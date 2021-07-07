"use strict";
//Esto se ocupa para puntos criticos en el programa que jamas deben pasar
function errores(mensaje) {
    throw new Error(mensaje);
}
errores("Esto nunca debe pasar");
