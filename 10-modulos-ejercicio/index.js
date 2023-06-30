import * as moduloController from './modulos/controller.js'
import chalk from 'chalk';

const multi = moduloController.multiplica(moduloController.suma(1,2),moduloController.suma(4,5));
console.log(chalk.green(multi));
