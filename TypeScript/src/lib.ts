import chalk from 'chalk';
import lodash from 'lodash';
import Random from 'mdn-random';
import express, { Request, Response } from 'express';

console.log(chalk.red('Hello'));
console.log(lodash.kebabCase('Bonjour à tous'));
console.log(Random.getInt(0, 100));

const app = express();

function callbackHome(req: Request, res: Response) {
  res.json({
    msg: 'Home'
  });
}

app.get('/', callbackHome);

app.listen(3000);
