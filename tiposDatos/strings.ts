let batman:string = "Batman"
let linternaVerde:string = "Linterna Verde"
let volcanNegro:string = 'Volcan negro';

console.log(batman)
console.log(linternaVerde)
console.log(volcanNegro)

let concatenar1:string = `Los héroes son ${batman},${linternaVerde} y ${volcanNegro}`;
console.log(concatenar1)
let concatenar2:string = "Los héroes son" + batman + "," + linternaVerde + ', y ' + volcanNegro;
console.log(concatenar2)
let concatenar3:string = "Los héroes son".concat(batman).concat(",").concat(linternaVerde).concat(" y ").concat(volcanNegro)
console.log(concatenar3)

