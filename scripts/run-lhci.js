import fs from 'fs';
import os from 'os';
import path from 'path';
import net from 'net';
import { spawn, spawnSync } from 'child_process';

const configPath = process.argv[2];
if (!configPath) {
  console.error('Usage: node scripts/run-lhci.js <config-path>');
  process.exit(1);
}

const REMOTE_PORT = 9222;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'lhci-remote-profile-'));

function pickChromePath() {
  const candidates = [
    process.env.LHCI_CHROME_PATH,
    'C://Program Files//Google//Chrome//Application//chrome.exe',
    'C://Program Files (x86)//Google//Chrome//Application//chrome.exe',
    'chrome',
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (candidate === 'chrome') return candidate;
    try {
      if (fs.existsSync(candidate)) return candidate;
    } catch {
      // ignore probe errors
    }
  }

  console.error('Chrome not found. Set LHCI_CHROME_PATH to your chrome.exe');
  process.exit(1);
}

function startHeadlessChrome(chromePath) {
  const chromeArgs = [
    '--headless=new',
    'about:blank',
    `--remote-debugging-port=${REMOTE_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--no-sandbox',
    '--disable-software-rasterizer',
    '--disable-features=UseAngle,VizDisplayCompositor',
  ];

  const chrome = spawn(chromePath, chromeArgs, {
    detached: true,
    stdio: 'ignore',
  });
  chrome.unref();
  return { chrome, chromeArgs };
}

function waitForPort(port, retries = 15, delayMs = 400) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const tryConnect = () => {
      const socket = new net.Socket();
      socket.once('connect', () => {
        socket.destroy();
        resolve();
      });
      socket.once('error', () => {
        socket.destroy();
        attempts += 1;
        if (attempts > retries) return reject(new Error(`Port ${port} did not open`));
        setTimeout(tryConnect, delayMs);
      });
      socket.connect(port, '127.0.0.1');
    };

    tryConnect();
  });
}

function killChrome(pid) {
  if (!pid) return;
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/PID', String(pid), '/T', '/F'], { stdio: 'ignore' });
  } else {
    try {
      process.kill(pid, 'SIGKILL');
    } catch {
      // already exited
    }
  }
}

async function run() {
  const chromePath = pickChromePath();
  const { chrome, chromeArgs } = startHeadlessChrome(chromePath);

  try {
    await waitForPort(REMOTE_PORT);

    const env = {
      ...process.env,
      VITE_DISABLE_HEAVY_EFFECTS: 'true',
      LHCI_COLLECT__SETTINGS__PORT: String(REMOTE_PORT),
      LHCI_COLLECT__SETTINGS__CHROME_PATH: chromePath,
      LHCI_COLLECT__SETTINGS__CHROME_FLAGS: chromeArgs.join(' '),
    };

    const result = spawnSync('npx', ['@lhci/cli@0.13.0', 'autorun', `--config=${configPath}`], {
      shell: true,
      stdio: 'inherit',
      env,
    });

    process.exit(result.status ?? 1);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  } finally {
    killChrome(chrome?.pid);
  }
}

run();
