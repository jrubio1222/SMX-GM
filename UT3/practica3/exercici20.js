const prompt = require('prompt-sync')();

let edat = prompt("Quina és la teva edat? ");
let entrada = prompt("Tens entrada? ");

if (edat >= 18 && entrada) {
    console.log("Accès permès");
} else {
    console.log("Accès denegat");
}