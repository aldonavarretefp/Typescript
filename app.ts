// Tipos

// let superman:string = "Clark";
// let batman:string = "Bruce"

// let existe_:boolean = false;

// // Tuplas
// let parejaHeroes:[string,string] = [batman,superman];
// let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// // Arreglos
// let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

// //Enumeraciones
// enum Fuerza{
//     flash = 5,
//     superman = 100,
//     batman = 1,
//     acuaman = 0
// }

// let fuerzaFlash = Fuerza.flash;
// let fuerzaSuperman = Fuerza.superman;
// let fuerzaBatman = Fuerza.batman;
// let fuerzaAcuaman = Fuerza.acuaman;

// // Retorno de funciones
// function activar_batiseñal():string{
//     return "activada";
// }

// function pedir_ayuda():void{
//     console.log("Auxilio!!!");
// }

// // Aserciones de Tipo
// let poder:String = "100";
// let largoDelPoder:number = poder.length;
// console.log( largoDelPoder );

import { PI } from "./namespaces/validaciones/numeros";
console.log(PI);


// import { obtenerError } from "./namespaces/validaciones/textos";
// console.log(obtenerError(1));

import * as textos from "./namespaces/validaciones/textos";
console.log(textos.obtenerError(2));

import cualquierOtroNombrePeroYoSeQueEsRestarPorDefault from "./namespaces/validaciones/numeros";
console.log(cualquierOtroNombrePeroYoSeQueEsRestarPorDefault(5,3))