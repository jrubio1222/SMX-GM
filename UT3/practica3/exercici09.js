const prompt = require('prompt-sync')();

let edat = prompt('Quina edat tens? ');

if (edat >= 18) {
    console.log("Ets major d'edat");
} else {
    console.log("Ets menor d'edat");
}