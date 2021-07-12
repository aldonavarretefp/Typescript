"use strict";
var nada = undefined;
console.log(nada);
nada = null;
console.log(nada);
var ironman;
// "strictNullChecks": false --> Si me deja hacer ese cambio
console.log(ironman);
ironman = "Tony";
console.log(ironman);
ironman = null;
console.log(ironman);
//Los numeros y los strings pueden tomar valores de null y undefined
