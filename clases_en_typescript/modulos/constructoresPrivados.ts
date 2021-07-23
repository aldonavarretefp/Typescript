class Apocalipsis{
    static instancia:Apocalipsis;
    private constructor(public nombre:string){

    }

    static llamarApocalipsis(){
        if( !Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis('Soy unico apocalipsis');
        }
        return Apocalipsis.instancia;
    }
}

let apocalipsisFalso = Apocalipsis.llamarApocalipsis();
let apocalipsisFalso2 = Apocalipsis.llamarApocalipsis();
console.log(apocalipsisFalso,apocalipsisFalso2);
export = apocalipsisFalso2;
