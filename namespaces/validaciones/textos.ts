export const MENSAJES:string[] = [
    'El texto es muy largo',
    'El texto es muy corto'
];
export function obtenerError(numError:number):string {
    console.log(MENSAJES.length);
    return (numError>MENSAJES.length - 1)
            ? "Ël codigo de error no existe"
            :MENSAJES[numError];
}