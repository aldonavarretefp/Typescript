let hoy = new Date();

console.log(
    Validaciones.validarTexto('Barr'),
    Validaciones.validarFecha(hoy)
);

if (Validaciones.validarTexto('Texto de prueba')){
    console.log('El texto es valido');
}else{console.log('Texto invalido');}