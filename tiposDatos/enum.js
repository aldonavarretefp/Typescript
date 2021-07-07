"use strict";
//Enumeracion desde cero, con paso 1 si no definimos
//Si lo definimos, podremos hacerlo, pero los no
//definidos seran 1 al anterior
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1000] = "min";
    Volumen[Volumen["medio"] = 1001] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
;
var audio = Volumen.min;
console.log(audio);
console.log(Volumen[10]); //max
