// function() {
  // si le fichier est local
  // on doit commencer par /, ./ ou ../
  import hello from './hello.js';
  import { sum } from './my-math.js';
  import { readFileSync } from 'fs'; // binaire de node.js
  import { dirname } from 'path'; // binaire de node.js
  import lodash from 'lodash'; // CommonJS modules can always be imported via the default export
  import chalk from 'chalk';

  console.log(chalk.red('Bonjour'));

  console.log(sum(1, 2)); // 3

  console.log(hello('Romain'));

  console.log(new URL(import.meta.url).pathname); // __filename
  console.log(dirname(new URL(import.meta.url).pathname)); // __dirname
  // console.log(__filename);
  // console.log(__dirname);
  console.log(process.cwd());

  console.log(readFileSync(dirname(new URL(import.meta.url).pathname) + '/../.prettierrc', { encoding: 'utf-8' }));
  console.log(lodash.kebabCase('Bonjour à tous'));

// }
