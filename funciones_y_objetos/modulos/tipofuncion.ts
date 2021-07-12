export = miFuncion;

function sumar(x:number,y:number):number{
    return x+y;
}
function saludar(nombre:string):string{
    return "Hola "+nombre;
}
function salvarMundo():void{
    console.log("El mundo esta salvado")

}



let miFuncion: (a:number,b:number) =>number;
// let miFuncion: (nombre:string) => string;
// let miFuncion: () => void;


// miFuncion = 10;

miFuncion = sumar;
console.log(miFuncion(44,5));

// miFuncion = saludar;
// console.log(miFuncion("Aldo"));

// miFuncion = salvarMundo;
// miFuncion();
