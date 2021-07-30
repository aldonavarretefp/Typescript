namespace Validaciones{
    export function validarFecha(fecha:Date):boolean {
        return (isNaN(fecha.valueOf()))? false : true;
    }
}