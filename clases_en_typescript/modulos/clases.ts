class Avenger{
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:Boolean=true;
    peleasGanadas:number=0;

    constructor(nombre:string,equipo:string,nombreReal:string,puedePelear?:Boolean,peleasGanadas?:number){
        this.nombre =nombre;
        this.equipo =equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}

let captain:Avenger = new Avenger("Cap",'Cap','Steve');
console.log(captain);

let antman:Avenger = new Avenger('Antman','Cap','Aldo',true,4); 
console.log(antman);