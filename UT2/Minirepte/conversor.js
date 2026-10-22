const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')();

const KB = 1024;
const MB = (KB * 1024);
const GB = (MB * 1024);

console.log("-----------------Conversor de Bytes-----------------");

let MidaBytes = prompt("Introduce una medida en Bytes: ");

console.log(`   ${MidaBytes} bytes són:`);
console.log(`   ${(MidaBytes / KB).toFixed(2)} KB`);
console.log(`   ${(MidaBytes / MB).toFixed(2)} MB`);
console.log(`   ${(MidaBytes / GB).toFixed(2)} GB`);

console.log("-----------------De GB a B-----------------");

let MidaGBytes = prompt("Introduce la medida en GigaBytes: ");
console.log(`${MidaGBytes} són ${(MidaGBytes * GB).toFixed(2)} bytes`);

console.log("-----------------Temps de descàrrega-----------------");

let mida = prompt("Introduce la medida del archivo (GB): ");
let velocitat = prompt("Introduce la velocidad de la conexión (Mbps): ");
let midabytes = (mida * GB);
let midabits = (midabytes * 8);
let velocitatbits = (velocitat * 1000 * 1000); // la mida de les unitats en l'àmbit de temps, va en base a 1000 no a 1024

console.log(`Tiempo de descarga: ${(midabits / velocitatbits).toFixed(0)} segons (${((midabits / velocitatbits) / 60).toFixed(1)} minuts)`);