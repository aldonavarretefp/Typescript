

class Avenger{
    public nombre:string;
    private equipo:string;
    nombreReal:string;
    protected puedePelear:Boolean=true;
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
antman.nombre = 'Nick Fury';
console.log(antman);

export = antman;


//APRENDER:
//Tipos
    // Publicos: Se puede acceder desde cualquier lado
    // Privados: No son accesadas desde otro lado que no sea
    //          dentro de la clase.
    // Protected: Solo es accesible en la clase e hijas