/**
 * Hoistig
 * 
 * Cuando las variables y las funciones se procesa cuando se ejecuta antes del codigo
 */

// Error
console.log(miNombre);
miNombre = "Miguel";

hey();

function hey(){
    console.log(`Hola ${miNombre}`);
}
