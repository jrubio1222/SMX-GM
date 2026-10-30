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