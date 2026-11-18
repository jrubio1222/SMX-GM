const prompt = require('prompt-sync')();

// 1
let velocitat = prompt("Quina es la teva velocitat (Mbps)? ");
let velocitat_test = prompt("Quina velocitat ha marcat el test? ");
let ping = prompt("Quin ping ha marcat el test (ms)? ");
let perdua = prompt("Quina perdua de paquets ha marcat el test (%)? ");

// 2
if (velocitat <= 0) {
    console.log("Dades no vàlides");
} else {
}

// 3
let percentatge = velocitat / velocitat_test * 100;

// 4
let estat = undefined;
if (percentatge >= 90 && ping < 30 && perdua == 0) {
    estat = "ÒPTIMA";
} else if (percentatge >= 70 && ping < 100 && perdua <= 2) {
    estat = "ACCEPTABLE";
} else if (ping > 200 || perdua > 10) {
    estat = "CRÍTICA";
} else {
    estat = "DEFICIENT";
}

console.log();
console.log("-----ESTAT-XARXA-----")
console.log(`Percentatge: ${percentatge}%`);
console.log(`Estat: ${estat}`);