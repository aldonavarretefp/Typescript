let nombre1:string = "Bruce";
let nombre2:string = "Ricardo";

function getNombre():string{
    return `${nombre1} ${nombre2}`
}

let mensajeMultilinea:string = `1.
2. Hola ${nombre1}
3. Hola ${nombre2}
4. ${5+7}`;
console.log(mensajeMultilinea);


console.log(`Los nombres son: ${getNombre()}`);
