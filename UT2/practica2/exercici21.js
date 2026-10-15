const prompt = require('prompt-sync')();

let nom = prompt('Com et diven? ');
let edattext = prompt('Quants anys tens? ');
let edat = Number(edattext);
let edatanyqueve = edat + 1;

console.log(`Hola ${nom}! Tens ${edattext} anys.`);
console.log(`El any que ve en tendràs ${edatanyqueve} anys.`);