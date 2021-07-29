//Toda la validación 
namespace Validaciones{
    export function validarTexto(texto:string):boolean{
        return (texto.length >3)? true : false;
    }
    export function valdiarFecha(fecha:Date):boolean {
        return (isNaN(fecha.valueOf()))? false : true;
    }
}



let hoy = new Date();
console.log(
    Validaciones.validarTexto('Barr'),
    Validaciones.valdiarFecha(hoy)
);