const prompt = require('prompt-sync')();

// 1
let nom_client = prompt("Quin es el teu nom? ");
let hores = Number(prompt("Quant de tems es necesita? "));
let cost = Number(prompt("Quin es el cost de les peces? (€) "));
let contracte = Boolean(prompt("Te contracte de manteniment? "));
let urgent = Boolean(prompt("El servei es urgent? "));

// A partir d'aqui em dona error no se per què :(
// 2
let cost_obra = hores * 35;
let descompte = undefined;
if (contracte == si) {
    descompte = cost_obra * 0.2;
} else {
    descompte = cost_obra * 0;
}

// 3
let cost_urgent = undefined;
if (urgent == si) {
   cost_urgent = 15;
} else {
   cost_urgent = 0;
}

// 4
let iva = preu * 0.21;
let preu = cost + cost_obra + cost_urgent;
let preu_total = preu + iva;

console.log();
console.log(`Client: ${nom_client}`);
console.log(`Hores de ma d'obra: ${hores}`);
console.log(`Cost de les peces (€): ${cost}`);
console.log(`Té contracte de manteniment) (Si/No): ${contracte}`);
console.log(`Servei urgent? (Si/No): ${urgent}`);
console.log();
console.log("--- PRESUPOST ---");
console.log(`Client: ${nom_client}`);
console.log(`Mà d'obra ${hores}: ${cost_obra} €`);
console.log(`Descompte contracte: -${descompte} €`);
console.log(`Peces: ${cost} €`);
console.log(`Recàrrec urgència: ${cost_urgent} €`);
console.log(`Base imposable: ${preu} €`)
console.log(`IVA (21%): ${iva} €`);
console.log(`TOTAL: ${preu_total}`);