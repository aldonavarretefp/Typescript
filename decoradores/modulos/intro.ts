//Decorador de Clase
function consola(constructor:Function) {
    console.log(constructor);
}

@consola
class Villano{
    constructor(public nombre:string){

    }
}



//Decorador de Fabrica
function imprimirConsola( imprimir:boolean ):Function{
    return (imprimir)? consola : null;
}

@imprimirConsola(true)
class Heroe{
    constructor(public nombre:string){
        
    }
}



let hola;
export = hola;