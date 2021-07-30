namespace Validaciones{
    export function validarTexto(texto:string):boolean{
        return (texto.length >3)? true : false;
    }

}
