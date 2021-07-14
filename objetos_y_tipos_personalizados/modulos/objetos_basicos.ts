export = flash;

type Heroe = {
    nombre:string,
    edad:number,
    poderes:any[],
    getNombre:()=>string;
}

let flash:Heroe = {
    nombre:"Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido","Viajar por el tiempo"],
    getNombre(){
        return this.nombre; 
    }
};
let superman:Heroe = {
    nombre:"Clarck Kent",
    edad: 500,
    poderes: ["Puede volar","Super Velocidad",123],
    getNombre(){
        return this.nombre; 
    }
};




console.log(flash.getNombre());