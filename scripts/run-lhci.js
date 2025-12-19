import { spawnSync } from 'child_process';
import { mkdirSync } from 'fs';
import { resolve } from 'path';

const configPath = process.argv[2];
if (!configPath) {
  console.error('Usage: node scripts/run-lhci.js <config-path>');
  process.exit(1);
}

const tmpDir = resolve('.lighthouseci/tmp');
mkdirSync(tmpDir, { recursive: true });

const env = {
  ...process.env,
  TMP: tmpDir,
  TEMP: tmpDir,
};

const result = spawnSync('npx', ['@lhci/cli@0.13.0', 'autorun', `--config=${configPath}`], {
  shell: true,
  stdio: 'inherit',
  env,
});

process.exit(result.status ?? 1);
