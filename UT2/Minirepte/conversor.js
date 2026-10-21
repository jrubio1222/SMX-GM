const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')();

const KB = 1024
const MB = (KB * 1024)
const GB = (MB * 1024)

console.log("-----------------Conversor de Bytes-----------------")

let MidaBytes = prompt("Introduce una medida en Bytes: ")

console.log(`   ${MidaBytes} bytes són:`)
console.log(`   ${MidaBytes / KB} KB`)
console.log(`   ${MidaBytes / MB} MB`)
console.log(`   ${MidaBytes / GB} GB`)

console.log("-----------------De GB a B-----------------")

let MidaGBytes = prompt("Introduce la medida en GigaBytes: ")
console.log(`${MidaGBytes} són ${MidaGBytes * GB} bytes`)

console.log("-----------------Temps de descàrrega-----------------")

let mida = prompt("Introduce la medida del archivo: ")
let velocitat = prompt("Introduce la velocidad de la conexión (Mbps): ")
let midabytes = (mida * GB)
let midabits = (midabytes / 8)
let velocitatbytes = (velocitat * MB)
let velocitatbits = (velocitatbytes / 8)
console.log(`Tiempo de descarga: ${midabits / velocitatbits} segons (${(midabits / velocitatbits) / 60} minuts)`)