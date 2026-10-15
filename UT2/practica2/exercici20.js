const prompt = require('prompt-sync')();

let entrada = prompt('Escriu qualsevol text: ');
let valorbuleano = Boolean(entrada);
console.log(`${typeof entrada}`);
console.log(`Boolean: ${valorbuleano}`);