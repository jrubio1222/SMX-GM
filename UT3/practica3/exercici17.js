// Cas A 
let hora = 9; 
if (hora < 10 || hora > 18) { 
console.log("Accés denegat"); 
}
// Si que ho mostrarà, ja que empra || i si un valor ja és cert, tot és cert. 

// Cas B 
let Hora = 15; 
let capDeSetmana = false; 
if (Hora < 10 || Hora > 18 || capDeSetmana) { 
console.log("Accés denegat"); 
}
// NO, ja que totes les condicions son falses.

// Cas C 
let HORA = 17; 
let CapDeSetmana = true; 
if (HORA < 10 && HORA > 18 && CapDeSetmana) { 
console.log("Accés denegat"); 
}
// NO, ja què l'hora no es menor que 10 i com empra "&&" si un valor es fals, tot és fals.