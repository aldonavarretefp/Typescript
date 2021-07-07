"use strict";
var esSuperman = true;
var esBatman = true;
var esAcuaman = true;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("oops!");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("oops!");
}
function convertirClark() {
    return false;
}
