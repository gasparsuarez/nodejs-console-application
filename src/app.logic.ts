import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';


// Desestructuración
const { b:base, l:limit, s:displayTable} = yarg;

let outputMessage = '';
const messageHeader = `
============================
    Tabla del ${base}
============================
`;

for(let i = 1; i <= limit; i++){
    outputMessage += `${ base } x ${ i } = ${ base*i }\n`;
}

outputMessage = messageHeader + outputMessage;

if(displayTable){
    console.log(outputMessage);
}
/* const outputPath = 'output'
fs.mkdirSync(`${outputPath}`);
fs.writeFileSync(`${outputPath}/tabla-5.txt`, outputMessage); */
//console.log('File created!');


