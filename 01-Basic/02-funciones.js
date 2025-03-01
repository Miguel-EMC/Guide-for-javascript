/**
 * Existen dos tipos de funciones
 * 1. Funciones Declarativas
 * 2. Funciones Expresión o Anonimas
 */

// 1. Funciones Declarativas
function miFuncion(){
    return 3;
}
miFuncion();

// 2. Funciones Expresión
// Conocidas tambien como funciones anonimas

var miFuncion = function(){
    return a + b;
}

miFuncion();


/**
 * Ejemplo
 */

// 1. Ejemplo 01
function saludar(nombre){
    //console.log("Hola " + nombre);
    console.log(`Hola ${nombre}`);
}
saludar("Miguel");

// 2. Ejemplo 2: sumar
function suma(a,b){
    var resultado = a + b;
    return `El resultado es igual a ${resultado}`;
}
suma(1,6);

/**
 * Diferencias:
 * 
 * A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
 * Ya que el hoisting solo se aplica en las palabras reservadas var y function.
 * 
 * Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada,
 * y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
 */