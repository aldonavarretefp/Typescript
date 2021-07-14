export = loquesea;
type Heroe = {
    nombre:string,
    edad:number

}

//Esta variable puede ser string, numero, o Heroe
let loquesea: string | number | Heroe = "Fernando"
loquesea= {
    nombre:"Flash",
    edad:56
};

console.log(loquesea)
console.log(typeof loquesea)

//Puedes saber el tipo de variable con typeof