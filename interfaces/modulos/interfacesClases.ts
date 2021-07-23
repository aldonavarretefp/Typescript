interface Xmen{
    nombre:string;
    nombreReal?:string;
    regenerar(nombreReal:string):void;
}

class Mutante implements Xmen {
    nombre:string;
    nombreReal:string;
    esBueno:boolean;

    regenerar(nombre:string){
        console.log(`Hola ${nombre}`);
    }
}

let wolverine = new Mutante();
wolverine.regenerar("Logan");
export = wolverine;