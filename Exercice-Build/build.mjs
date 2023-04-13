import fs from 'fs/promises';
import { dirname, resolve } from 'path';
import md5 from 'md5';
import { minify } from 'terser';

const __dirname = dirname(new URL(import.meta.url).pathname);

const distPath = resolve(__dirname, 'dist');
const srcPath = resolve(__dirname, 'src');
const horlogeJsPath = resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = resolve(srcPath, 'index.html');
const indexHtmlDistPath = resolve(distPath, 'index.html');
const appJsDistPath = resolve(distPath, 'app.js');

async function rmAndMkdir() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  // On lit les fichiers en même temps
  const [buffer1, buffer2] = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  // On lit les fichiers les uns après les autres
  // const buffer1 = await fs.readFile(horlogeJsPath);
  // const buffer2 = await fs.readFile(indexJsPath);

  await fs.writeFile(appJsDistPath, buffer1);
  await fs.appendFile(appJsDistPath, buffer2);
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString('utf-8');

  content = content.replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
    .replace('<script src="./js/index.js"></script>', '');

  await fs.appendFile(indexHtmlDistPath, content);
}

await rmAndMkdir()
await buildJs()
await buildHtml()
