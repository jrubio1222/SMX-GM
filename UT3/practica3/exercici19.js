const prompt = require('prompt-sync')();

let num = prompt("Passa'm un numero (1-100) ");

if (num >= 1 && num <= 100) {
    console.log("Numero correcte");
} else {
    console.log("Numero fora del rang");
}