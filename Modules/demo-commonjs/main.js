(async function() {
  // si le fichier est local
  // on doit commencer par /, ./ ou ../
  const hello = require('./hello.js');
  const MyMath = require('./my-math.js');
  const fs = require('fs'); // binaire de node.js
  const lodash = require('lodash'); // node_modules/lodash
  // const chalk = require('chalk'); // erreur car chalk est exportée en ESM

  // import('chalk').then(({ default: chalk }) => {
  //   console.log(chalk.red('Bonjour'));
  // });
  const { default: chalk } = await import('chalk')
  console.log(chalk.red('Bonjour'));

  console.log(MyMath.sum(1, 2)); // 3

  console.log(hello('Romain'));

  console.log(__filename);
  console.log(__dirname);
  console.log(process.cwd());

  console.log(fs.readFileSync(__dirname + '/../.prettierrc', { encoding: 'utf-8' }));
  console.log(lodash.kebabCase('Bonjour à tous'));

}())
