function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'EC';
    console.log(name, age, country);
}


//es6
function newFunction2(name = 'oscar', age=32, country='EC'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('miguel', 21, 'COL');


let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' '+world;
console.log(epicPhrase);




let name = 'Miguel';
let age = 21;

//es5
obj = {name:name, age:age};

//es6
obj2 = {name, age};
console.log(obj2);


//ArrowFunction
const names = [
    {
        name: 'Miguel', age: 21
    },
    {
        name: 'Arelis', age: 20
    }
];

let listOfName = names.map(function(item){
    console.log(item.name)
})

let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {
    console.log(name)
} 

const listOfName4 = name => {

}

const square = num => num * num;


/**
 * Promesas
 */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey..!')
        } else{
            reject('Ups ..!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));




/**
 * Class
 */

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

import {hello} from './module'
hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);