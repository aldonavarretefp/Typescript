
//Enumeracion desde cero, con paso 1 si no definimos
//Si lo definimos, podremos hacerlo, pero los no
//definidos seran 1 al anterior
enum Volumen{
    min=1000,
    medio,
    max=10
};

let audio:number = Volumen.min;
console.log(audio);
console.log(Volumen[10]); //max