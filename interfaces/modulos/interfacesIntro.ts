interface Xmen {
    nombre:string;
    //Parametros opcionales
    regenerar?(nombreReal:string):void;
}

function enviarMision( xmen : Xmen ){
    console.log(`Enviando a: ${xmen.nombre}`);
    xmen.regenerar("Logan");
}

let wolverine:Xmen = {
    nombre:"Wolverine",
    //Aqui especificamos la funcion de la interfaz
    regenerar(x:string){
        console.log(`Se ha regenerado a ${x}`);
    }
}

enviarMision(wolverine);

export = wolverine;