function regresar<T>(arg:T) {
    return arg;
}

//Metodo toFixed redondea
console.log(regresar(12.5345345).toFixed(2));
console.log(regresar("Aldo Navarrete").length);
console.log(regresar(new Date().toLocaleTimeString()));