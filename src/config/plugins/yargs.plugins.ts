
import yargs, { alias } from 'yargs';
import { hideBin } from 'yargs/helpers';


// Configuración de los argumentos o banderas 
// pasados en la ejecución de nuestro app.ts
// Ejecución : npx ts-node src/app --args

export const yarg = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base',

    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table',
    })
    .option('n', {
        name: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination',
    })
    // Con .check podemos comprobar que datos son válidos en los parámetros. 
    .check((argv, options) => {
        if (argv.b < 1) throw 'Error: Base must be a greater than 0';
        return true;
    })
    .parseSync()

