// //Decorador de Clase
// function consola(constructor:Function) {
//     console.log(constructor);
// }

// @consola
// class Villano{
//     constructor(public nombre:string){

//     }
// }



// //Decorador de Fabrica
// function imprimirConsola( imprimir:boolean ):Function{
//     return (imprimir)? consola : null;
// }

// @imprimirConsola(true)
// class Heroe{
//     constructor(public nombre:string){
        
//     }
// }

// //Decorador de metodos

// /*
//     Yo decido que metodo es editable, o que puede hacer cada metodo 
//     o que no puede hacer, le doy funcionalidades
//     FORZOSAMENTE RETORNAN UNA FUNCION
// */

// function editable(esEditable:boolean) {
//     return function(target:any,nombrePropiedad:string,descriptor:PropertyDescriptor){
//         if(!esEditable){console.warn("No es editable");
//         }
        
//         descriptor.writable = esEditable;
//     }
// }
// class Estudiante{
//     constructor(public nombre:string){}

//     @editable(true)
//     acabarCarrera(){
//         console.log(`Tal vez no acabe la carrera ${this.nombre}`);
//     }
// }

// let aldo = new Estudiante('Aldo');
// aldo.acabarCarrera = function () {
//     console.log(`Obvio ${aldo.nombre} va a acabar la carrera!`);
// }
// aldo.acabarCarrera();

/* Decoradores de Propiedades */

function editable(esEditable:boolean) {
    return function(target:any,nombrePropiedad:string,descriptor:PropertyDescriptor){
        descriptor.writable = esEditable;
    }
}
function editableProp(esEditable:boolean) {
    return function(target:any,nombrePropiedad:string):any{
        let descriptor:PropertyDescriptor ={
            writable:esEditable
        }

        return descriptor;
    }
}

class Villano {

    @editableProp(true)// Aqui va el decorador de una propiedad , pero ya no me deja cambiarlo aunque lo inicialice, se vuelve READ ONLY
    public nombre:string ;
    
    constructor(nombre:string = "Lex Luthor Inicializado"){
        this.nombre = nombre;
    }

    @editable(false)
    plan(){
        console.log('Es dominar el mundo');
    }
}

let lex = new Villano("Lex");
console.log(lex);
console.log(`El plan de ${lex.nombre} es:`);
lex.plan();

let hola;
export = hola;