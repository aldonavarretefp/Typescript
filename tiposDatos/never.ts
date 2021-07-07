//Esto se ocupa para puntos criticos en el programa que jamas deben pasar

function errores(mensaje:string):never{
    throw new Error(mensaje)
}

errores("Esto nunca debe pasar")