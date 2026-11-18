const prompt = require('prompt-sync')();

// 1
const NOM = "NetLlevant";
const ANY = "2026";

// 2
let nom_equip = undefined;
let Ram_GB = undefined;
let Disc_GB = undefined;
let Any_compra = undefined;
let Garantia = Boolean(undefined)
let IP = undefined;

// 3
nom_equip = prompt("Quin es el nom del equip? ");
Ram_GB = prompt("Quanta RAM té el teu equip (GB): ");
Disc_GB = prompt("Quina es la capacitat del disc? ");
Any_compra = Number(prompt("Quin any el vares comprar? "));
Garantia = Boolean(prompt("Esta en garantia? "));

// 4
let Antiguitat = 2026 - Any_compra;
let Ram_mb = Ram_GB * 1024;
let Disc_tb = Disc_GB / 1024;
let Garantiab = Boolean(Garantia);

// 5
console.log();
console.log("==========FITXA EQUIP==========");
console.log(`Nom de l'equip: ${nom_equip}`);
console.log(`Memòria RAM (GB): ${Ram_GB}`);
console.log(`Capacitat del disc (GB): ${Disc_GB}`);
console.log(`Any de compra: ${Any_compra}`);
console.log(`Està en garantia? (Si/No): ${Garantia}`);
console.log();
console.log("==========NetLlevant · INVENTARI==========");
console.log(`Èquip: ${nom_equip}`);
console.log(`RAM: ${Ram_GB} (${Ram_mb} MB)`);
console.log(`Disc: ${Disc_GB} (${Disc_tb} TB)`);
console.log(`Àntiguitat: ${Antiguitat} anys`);
console.log(`Garantia: ${Garantiab}`);

// 6
let tipus_equip = typeof(nom_equip);
let tipus_ram = typeof(Ram_GB);
let tipus_disc = typeof(Disc_GB);
let tipus_any = typeof(Any_compra);
let tipus_garantia = typeof(Garantia);
let tipus_ip = typeof(IP);
console.log()
console.log("==========TIPUS DE DADES==========");
console.log(`nomEquip: ${tipus_equip}`);
console.log(`ramGB: ${tipus_ram}`);
console.log(`discGB: ${tipus_disc}`);
console.log(`anyCompra: ${tipus_any}`);
console.log(`garantia: ${tipus_garantia}`);
console.log(`adrecaIP: ${tipus_ip}`);