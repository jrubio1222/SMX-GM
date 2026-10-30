const prompt = require('prompt-sync')();

let temperatura = prompt("Possam una temperatura (ºC): ");

 if (temperatura < 10) {
    console.log("Fa fred")
} else {
    if (temperatura <= 25) {
        console.log("Temperatura Moderada")
    } else {
        console.log("Fa calor")
    }
};

// console.log((a = prompt("temp?")) < 10 ? "fred" : a < 25 ? "mid" : "calor");
// (Fet per Lluís)