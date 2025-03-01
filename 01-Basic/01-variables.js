/**
 * ¿Que son variables?
 * 
 * Una variable es la representación de un lugar que reservamos en memoria para guardar un valor. 
 * El valor puede ser cualquier tipo de dato, * inclusive objetos o funciones.
 */


/**
 * En JavaScript, una variable se crea con la palabra reservada var, seguido del nombre de la variable. Esto se denomina declaración.
 * 
 */

var nombre = "Juanito";

// ** Estados de una variables  **

// 1. Declarar la variable
var edad; 

// 3. Inicializar la variable
edad = 21;


/**
 * Variables arrays
 */

var elementos = ["Computadoras", "Celular"];

/**
 * variables Objeto
 */

var persona = {
    nombre : "Miguel",
    apellido : "Muzo",
    edad: 21
}
persona;


// after to ES6
var name = 'Miguel'

let age = 20

{
    console.log('Valor dentro del bloque', age)
}

console.log('Valor fuera del boque', age)
age = age * 2 
console.log('valor modification', age)



// JavaScript
let name = 'Miguel'
const PI = 3.141516


/**
 * Reglas de nomenclatura
 * 
 * 
 * Nombres pronunciables y expresivos. Preferentemente en inglés usando camelCase🐫, evitando guiones - o _ y abreviaturas.
 * 
 */



/**
 * 
 * Arrays: Plural
 *   
 * */

// No recomendado
let arrayNames = ["Alex", " Mariana", "Cande"];
let user = ["Alex", " Mariana", "Cande"];
let userList = ["Alex", " Mariana", "Cande"];

//recomendado
let usersList = ["Alex", " Mariana", "Cande"];
const usersNames = ["Alex", "Mariana", "Jessica"];


/*
 * Booleans: Con prefijos "is", "has" y "can". ("es verdadero", "tiene/contiene x", "puede hacer x").
 */

const isValid = true;
const hasColor = true;
const canRead = false;

/*
 *
 * Números: Con prefijos "min", "max" y "total".
 * 
 */

const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

/**
 * 
 * Funciones: Verbo + sustantivo/s (ya que son acciones).
*/
createUser();
updateUser();
sendEmail();

//Acceso:
getUser();

//Modificación:
setUser()

//Predicado:
isValidUser();

/**
 * 
 * Clases: Sustantivos
 * 
 */

class User {}
class UserProfile {}
class Account {}




// Ambito global: Puedo acceder desde cualquier parte del codigo

let greeting = "Hello world!"; 

function greet() {
  console.log(greeting);
}

greet()



//> Ámbito local o de función
function greet() {
    let greeting = "Hello World";
    console.log(greeting);
  }
  greet(); //> Hello world

  console.log(greeting); //> Variable no definida
  

//> Ámbito de bloque
{
    let greeting = "Hello World";
    var lang = "English";
    console.log(greeting);
}
  console.log(lang); //> English
  console.log(greeting); //> Uncaught ReferenceError: greeting is not defined



//> Ámbito estático o dinámico
const age1 = 28;
function printAge() {
  console.log(age1);
}
function mainApp() {
  const age1 = 26;
  console.log(age1)
  printAge();
}
mainApp(); //> 28