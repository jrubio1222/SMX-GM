const prompt = require('prompt-sync')();

let op = prompt("Què vols fer? (+,-,*,/) ");
let n1 = Number(prompt("Dona'm el primer numero: "));
let n2 = Number(prompt("Dona'm el segon numero: "));

if (op === "+") {
    console.log(`El resultat de la sume és ${n1 + n2}`);
} if (op === "-") {
    console.log(`El resultat de la resta és ${n1 - n2}`)
} if (op === "*") {
    console.log(`El resultat de la resta és ${n1 * n2}`)
} if (op === "/") {
    console.log(`El resultat de la resta és ${n1 / n2}`)
} else {
    console.log("Operació no vàlida")
}