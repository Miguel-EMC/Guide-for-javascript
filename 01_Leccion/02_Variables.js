/**
 * Variables
 */

//Data type string
var name = "Miguel";
var lastName = "Muzo";

console.log("My name is = "+name + lastName);

//Data type number
var number = 100;
console.log("Data type number = " + number);

//Data type object
var object = {
    name: "Miguel",
    lastName: "Muzo",
    age: "21",
}
console.log(object);

//Data type boolean (True, False)
var isTrue = true;
console.log(typeof isTrue);

//Data type function
function myFunction(){}


//Data type symbol
var symbol = Symbol("My symbol");

//Data type is a function
class Person{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

//Data types arrays
var cars = ['BMW', 'Audi','ferrari'];

//Variable declaration

//name = "Juan"; //Not Valid
//let name = "Juan" //Valid
console.log(name);

//const lastName = "Muzo"; //A const cannot be modified

//Variables Declaration
let nameComplete = "Miguel Muzo";
console.log(typeof nameComplete);

