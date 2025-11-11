import fs from 'fs';
import path from 'path';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'cv', 'Cristian-Bedoya-CV.pdf');

const streamContent = [
  'BT',
  '/F1 26 Tf',
  '64 770 Td',
  '(Cristian Bedoya - Curriculum Vitae) Tj',
  '/F1 14 Tf',
  '0 -48 Td',
  '(Desarrollador Full Stack orientado a crear experiencias accesibles y eficientes.) Tj',
  '0 -26 Td',
  '(Email: contacto@cristian.dev) Tj',
  '0 -22 Td',
  '(Teléfono: +57 300 111 22 33) Tj',
  '0 -22 Td',
  '(LinkedIn: linkedin.com/in/cristianbedoya) Tj',
  '0 -22 Td',
  '(GitHub: github.com/cristianbedoya) Tj',
  '0 -22 Td',
  '(Ubicación: Medellín, Colombia) Tj',
  '0 -40 Td',
  '/F1 16 Tf',
  '(Resumen)',
  ' Tj',
  '/F1 12 Tf',
  '0 -24 Td',
  '(Desarrollador en formación con énfasis en frontend y backend, ) Tj',
  '0 -18 Td',
  '(busca un rol donde aportar habilidades en React, Node.js y bases de datos SQL.) Tj',
  '0 -32 Td',
  '/F1 16 Tf',
  '(Tecnologías clave)',
  ' Tj',
  '/F1 12 Tf',
  '0 -24 Td',
  '(React · Node.js · Express · PostgreSQL · Git · Testing Library · Playwright) Tj',
  '0 -32 Td',
  '/F1 16 Tf',
  '(Educación)',
  ' Tj',
  '/F1 12 Tf',
  '0 -24 Td',
  '(Ingeniería de Sistemas - Universidad de Antioquia (2021 - presente)) Tj',
  'ET',
].join('\n');

const streamBuffer = Buffer.from(streamContent, 'utf8');

const objects = [];

function addObject(body) {
  const index = objects.length + 1;
  const objectString = `${index} 0 obj\n${body}\nendobj\n`;
  objects.push(objectString);
  return index;
}

addObject('<< /Type /Catalog /Pages 2 0 R >>');
addObject('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
addObject(
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
);
addObject(`<< /Length ${streamBuffer.length} >>\nstream\n${streamContent}\nendstream`);
addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

const header = '%PDF-1.4\n';
const offsets = [0];
let currentOffset = Buffer.byteLength(header, 'utf8');

for (const object of objects) {
  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(object, 'utf8');
}

const xrefHeader = `xref\n0 ${objects.length + 1}\n`;
let xrefBody = '0000000000 65535 f \n';

for (let i = 1; i <= objects.length; i++) {
  const offset = offsets[i];
  xrefBody += `${offset.toString().padStart(10, '0')} 00000 n \n`;
}

const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${currentOffset}\n%%EOF\n`;

const pdfContent = header + objects.join('') + xrefHeader + xrefBody + trailer;

fs.writeFileSync(outputPath, Buffer.from(pdfContent, 'utf8'));

console.log(`PDF generado en ${outputPath}`);
