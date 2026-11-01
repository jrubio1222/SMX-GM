const prompt = require('prompt-sync')();

let edat = prompt("Quina edat tens? ");
let carnet = prompt("Tens carnet d'estudiant?: ");

if (edat < 18 || edat > 65 || carnet) {
    console.log("Tens descompte");
} else {
    console.log("Preu normal");
}