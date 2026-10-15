const prompt = require('prompt-sync')();

let n1text = prompt('Primer número: ');
let n2text = prompt('Segon número: ');

let n1 = Number(n1text);  
let n2 = Number(n2text);

console.log(`Suma = ${n1 + n2}`);
console.log(`Resta = ${n1 - n2}`);
console.log(`Multiplicació = ${n1 * n2}`);
console.log(`Divisió = ${n1 / n2}`);