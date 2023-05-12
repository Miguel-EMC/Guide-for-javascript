/**
 * Scope Local
 */

const helloWorld = () => {
    const hello = 'hello World';
    console.log(hello);
}

helloWorld();

//No se puede acceder porque no existe una variable global
//console.log(hello);

var scope = "I am global"

const functionScope = () => {
    var scope = 'i am just a local';
    const funct = () => {
        return scope
    }
    console.log(funct());
}

functionScope();