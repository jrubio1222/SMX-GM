const prompt = require('prompt-sync')();

let numero = prompt("Passa'm un número del 1-4: ");

if (numero == 1) {
    console.log("Talla XS");
} if (numero == 2) {
    console.log("Talla S");
} if (numero == 3) {
    console.log("Talla M");
} if (numero == 4) {
    console.log("Talla L");
} else {
    console.log("Talla no disponible");
}