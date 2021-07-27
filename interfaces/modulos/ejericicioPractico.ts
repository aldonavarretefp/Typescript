import { nombre } from "../../ECMA2015_o_es6/modulos/arrowfunctions";

// Crear interfaces
interface Auto{
    encender :Boolean;
    velocidadMaxima : number;
    acelerar():void;
};
  
  
  
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  function conducirBatimovil( auto:Auto ):void{
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  
  let batimovil:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... run!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  interface Payaso {
    reir: Boolean;
    comer?: Boolean;
    llorar?: Boolean;
  }
  // utilizando propiedades opcionales
  
  let guason:Payaso = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  function reir( guason:Payaso ):void{
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion
interface Ciudad {
    (ciudadanos:string[]):number;
    length:number
}
let ciudadGotica:Ciudad;

ciudadGotica = function(ciudadanos:string[]):number {
    return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Persona {
    nombre:string;
    edad:number;
    sexo:'Masculino' | 'Femenino';
    estadoCivil:string;
    imprimirBio():void
}


/*
propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

let persona:Persona={nombre:"Aldo",edad:23,estadoCivil: "Casado",sexo: 'Masculino',imprimirBio:function () {
    console.log(this.edad,this.nombre,this.sexo,this.estadoCivil);
}}

persona.imprimirBio();

export = persona;