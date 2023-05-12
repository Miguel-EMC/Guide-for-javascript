/**
 * SCOPE GLOBAL
 * 
 * permite acceder a los valores que fueron asignadas fueras de las funcione
 */

// Asignada de forma global
var hello = "HELLO";

//Con let o const no se puede reasignar un nuevo valor
let world = "Hello World";
const helloWorld = "Hello World"

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();