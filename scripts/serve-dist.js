import http from 'node:http';
import { readFileSync, existsSync, statSync, createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

function getArg(name, fallback) {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  const value = args[idx + 1];
  if (!value || value.startsWith('--')) return fallback;
  return value;
}

const port = Number(getArg('--port', '4173'));
const host = getArg('--host', '0.0.0.0');
let base = getArg('--base', '/portafolio-web/');
if (!base.startsWith('/')) base = `/${base}`;
if (!base.endsWith('/')) base = `${base}/`;

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function safeJoin(root, relPath) {
  const resolved = path.resolve(root, relPath);
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === base.slice(0, -1)) {
      res.writeHead(302, { Location: base });
      res.end();
      return;
    }

    if (!pathname.startsWith(base)) {
      send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Not found');
      return;
    }

    let rel = pathname.slice(base.length);
    if (!rel) rel = 'index.html';

    // Remove any leading slashes that could appear after slicing.
    rel = rel.replace(/^\/+/g, '');

    const filePath = safeJoin(distDir, rel);
    if (!filePath) {
      send(res, 400, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Bad request');
      return;
    }

    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        // conservative caching for local audits
        'Cache-Control': 'no-cache',
      });
      createReadStream(filePath).pipe(res);
      return;
    }

    // SPA fallback
    if (existsSync(indexHtmlPath)) {
      const html = readFileSync(indexHtmlPath);
      send(res, 200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' }, html);
      return;
    }

    send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, 'dist/index.html not found');
  } catch {
    send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Internal error');
  }
});

server.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`dist server listening on http://localhost:${port}${base}`);
});
