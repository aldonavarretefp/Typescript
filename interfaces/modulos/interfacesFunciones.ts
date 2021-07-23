interface DosNumerosFunc{
    ( n1:number,n2:number ) : number 
}
let sumar:DosNumerosFunc;

sumar = function(a:number,b:number){
    return a+b;    
}
let restar:DosNumerosFunc;

restar = function(a:number,b:number){
    return a-b;    
}
