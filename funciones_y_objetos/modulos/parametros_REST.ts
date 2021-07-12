

export = superman;

function nombreCompleto(nombre:string, ...demasParametros:string[]){
    return nombre + " " + demasParametros.join(" ");
}


let superman = nombreCompleto("Clark","Joseph","Kent");
let aldo = nombreCompleto("Aldo","Yael","Navarrete","Zamora","Me","Gusta","BTR");

console.log(superman)
console.log(aldo)