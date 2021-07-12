export = nombre;
function nombreCompleto(nombre:string = "NO_NAME", apellido:string = "NO_LAST_NAME"):string{
    return nombre.concat(' ').concat(apellido)
}

//Parametros opcionales ?
function nombreCompleto2(nombre:string, apellido?:string):String{
    return nombre+ ' '+ apellido;
}

//Parametros por defecto
function nombreCompletoCapitalizado(nombre:string,apellido:string,capitalizado:boolean = true):string{
    if(capitalizado) return nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase() + ' ' + apellido.charAt(0).toUpperCase() + apellido.substring(1).toLowerCase()
    return nombre + ' ' + apellido;
}


let nombre = nombreCompleto("Aldo","Navarrete");
let nombreBarry = nombreCompleto2("Barry",); //Barry undefined
let nombreLuis = nombreCompletoCapitalizado("lUis","NaVarreTe",false); //Barry undefined

console.log(nombre,nombreBarry,nombreLuis);


