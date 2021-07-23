
class Avenger{
    private     nombre:string;
    public      equipo:string;
    private     nombreReal:string;
    public      puedePelear:Boolean=true;
    peleasGanadas:number=0;

    constructor(nombre:string,equipo:string,nombreReal:string,puedePelear?:Boolean,peleasGanadas?:number){
        this.nombre =nombre;
        this.equipo =equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    
    public bio():void{
        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`
        console.log(mensaje);
    }
    private cambiarEquipo(nuevoEquipo:string):Boolean{
        if(nuevoEquipo ===this.equipo){
            return false;
        }
        this.equipo = nuevoEquipo;
        return true;
    }

    public cambiaEquipoPublico(nuevoEquipo:string):Boolean{
        return this.cambiarEquipo(nuevoEquipo);
    }
}

let captain:Avenger = new Avenger("Cap",'Cap','Steve');
console.log(captain);

let antman:Avenger = new Avenger('Antman','Cap','Aldo',true,4); 
console.log(antman);

antman.bio()
console.log('Antman antes');
console.log(antman);
console.log(antman.cambiaEquipoPublico("Ironman"));
console.log(antman);

export = captain;