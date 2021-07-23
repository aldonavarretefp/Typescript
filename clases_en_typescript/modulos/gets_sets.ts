class Avenger{
    private _nombre:string
    constructor(nombre?:string){
        this._nombre = nombre
    }

    get nombre():string{
        if(this._nombre){
            return this._nombre;        
        }
        return "No tiene un nombre el Avenger";
    }
    set nombre(nombre:string){
        this._nombre = nombre
    }
}

let ciclope:Avenger = new Avenger();
console.log(ciclope.nombre);
ciclope.nombre = 'Ciclope';
console.log(ciclope);

export = ciclope;