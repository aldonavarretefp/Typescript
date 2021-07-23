
class Avenger{

    constructor(public nombre:string,public nombreReal:string){
    }

    protected getNombre():string{
        return this.nombre
    }
}
class SuperHeroe extends Avenger {
    constructor(nombre:string,nombreReal:string,public edad:number){
        super(nombre,nombreReal);
    }
    getNombre():string{
        return super.getNombre();
    }
}

let captain:Avenger = new Avenger("Cap",'Cap');
console.log(captain);

let antman:Avenger = new Avenger('Antman','Cap'); 
console.log(antman);

let ciclope:SuperHeroe = new SuperHeroe('Ciclope',"Scott",45);
console.log(ciclope);
console.log(ciclope.getNombre());
export = antman;