let esSuperman:boolean = true;
let esBatman:boolean = true;
let esAcuaman:Boolean = true;

if(esSuperman){
    console.log("Estamos salvados")
}else{
    console.log("oops!")
}

esSuperman = convertirClark();

if(esSuperman){
    console.log("Estamos salvados")
}else{
    console.log("oops!")
}

function convertirClark(){
    return false;
}