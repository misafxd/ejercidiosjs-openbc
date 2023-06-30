import * as moduloController from './modulos/controller.js'
import chalk from 'chalk';

const sum = moduloController.suma(4,5);
console.log(sum);
const multi = moduloController.multiplica(1,2);
console.log(chalk.green(multi));
