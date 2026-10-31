const prompt = require('prompt-sync')();

let numero = prompt("Passa'm un número: ");

if (numero == 7) {
    console.log("Has endevinat el numero!");
} else {
    console.log("No has encertat. Torna-ho a provar!");
}