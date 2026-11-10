const prompt = require('prompt-sync')();

//introduir IP
console.log("--------Clasificador d'adreces IP--------");
let o1 = Number(prompt("Passa'm el primer octet "));
let o2 = Number(prompt("Passa'm el segon octet "));
let o3 = Number(prompt("Passa'm el tercer octet "));
let o4 = Number(prompt("Passa'm el quart octet "));
let clase;
let tipus;
if (o1 >= 0 && o1 <= 255 && o2 >= 0 && o2 <= 255 && o3 >= 0 && o3<= 255 && o4 >= 0 && o4 <= 255) {
    console.log("IP vàlida");
    console.log(`Adreca: ${o1}.${o2}.${o3}.${o4}`);
} else {
    console.log("Adreca no vàlida: Cada octet ha d'estar entre 0 i 255");
}

// definir clases
if (o1 >= 1 && o1 <= 126) {
    clase = "A";
} if (o1 == 127) {
    clase = loopback;
    console.log(`Clase: ${clase}`);
} if (o1 >= 128 && o1 <= 191) {
    clase = "B";
    console.log(`Clase: ${clase}`);
} if (o1 >= 192 && o1 <= 223) {
    clase = "C";
    console.log(`Clase: ${clase}`);
} if (o1 >= 224 && o1 <= 239) {
    clase = "D";
    console.log(`Clase: ${clase}`);
} if (o1 >= 240 && o1 <= 255) {
    clase = "E";
    console.log(`Clase: ${clase}`);
}

switch (clase) {
    case "A":
        console.log("Màscara per defecte: 255.255.255.0");
    case "B":
        console.log("Màscara per defecte: 255.255.0.0");
    case "C":
        console.log("Màscara per defecte: 255.255.0.0");
    default:
        console.log("Màscara per defecte: No té (adreca especial)");
        break;
}

if (clase === "A" && o1 == 10) {
    let tipus = "Privada";
} else {
    tipus = "Pública";
} if (clase === "B" && o1 == 172 && o2 >= 16 && o2 <= 31) {
    tipus = "Privada";
} else {
    tipus = "Pública";
} if (clase === "C" && o1 == 192 && o2 == 168 && o2 <= 0 && o3 <= 255) {
    tipus = "Privada";
} else {
    tipus = "Pública";
}
console.log(`La IP és: ${tipus}`);