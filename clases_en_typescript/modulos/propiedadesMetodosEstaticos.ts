class Xmen {
    static nombre:string = "Wolverine";
    public nombre:string = "Wolverine";
    constructor(){

    }
    static crearXmen(){
        return new Xmen();
    }
}

let wolverine = Xmen.crearXmen();
console.log(wolverine.nombre);
console.log(Xmen.nombre);


export = wolverine;