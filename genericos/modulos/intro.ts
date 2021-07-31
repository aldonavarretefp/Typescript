function regresar<T>(arg:T) {
    return arg;
}

//Metodo toFixed redondea
console.log(regresar(12.5345345).toFixed(2));
console.log(regresar("Aldo Navarrete").length);
console.log(regresar(new Date().toLocaleTimeString()));

// Ejemplo 2:


function funcionGenerica<T>(arg:T) {
    return arg;
}

type Heroe = {
    nombre: string,
    nombreReal:String,   
}
type Villano = {
    nombre: string,
    apellido?:string,
    nombreReal:String,   
}
const aldo = {
    nombre:'Master Y ',
    nombreReal:'Aldo Navarrete'
}
console.log(funcionGenerica<Villano>(aldo));