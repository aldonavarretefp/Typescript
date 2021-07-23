function sumar(a:number,b:number):number{
    return a+b;
}

const sumarArrow = (a:number,b:number) => a+b; 

console.log(sumar(5,4));
console.log(sumarArrow(5,4));

function darOrden_hulk(orden:string):string{
    return  `Hulk: ${orden}`
}

const darOrden_hulkArrow = (orden:string):string => `Hulk: ${orden}`;

console.log(darOrden_hulk("Ataca"));
console.log(darOrden_hulkArrow("Smashea"));

let capitanAmerica = {
    nombre:"Hulk",
    darOrden_hulk:function(){
        setTimeout(()=>{
            console.log(this.nombre + " SMASH!!");       
        },1000)
    }
};

capitanAmerica.darOrden_hulk();
export = capitanAmerica;