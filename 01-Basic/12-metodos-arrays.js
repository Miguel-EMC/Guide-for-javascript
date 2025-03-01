/**
 * Metodos en arrays
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 */

var articulos = [
    {
        nombre: "Bici",
        costo: 300
    },
    {
        nombre: "Television",
        costo: 800
    },
    {
        nombre: "Libro",
        costo: 15
    },
    {
        nombre: "Celular",
        costo: 520
    },
    {
        nombre: "PC",
        costo: 1200
    },
];

/**
 * Metodos que recorrer el array
 */

// 'Filter' filtrar cosas especificas del array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})


// 'map' va ayudar a mapear ciertos articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});


/**
 * 
 */

// 'find()' validar mediante un true o false si existe el arituclo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'PC'
})

// foreach
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

// 'some' verdarero o false para arituclos que cumplan con la validacion 
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})


// 'split' convierte un texto en un array separado 

  var text = 'miguel'
 var invert = text.split('');
 //Resultado:  ['M', 'i', 'g', 'u', 'e', 'l']


 //Methods that iterate over an array
 //Methods that DO NOT modify the original array (Immutability methods)
 const numbers = [1, 2, 3, 4, 5];
 const squareNumbers = numbers.map(num => num * num);
 console.log(squareNumbers)



 const ages = [12,25,16,78,63,20,15,12,16]
 const person = ages.filter(year => year <= 18)
 console.log(person)

 // ForEach
 const colors = ["red", "blue", "pink"]
 const iteratedColors = colors.forEach(color => console.log(color))


 // Exercise: Fahrenheit to celsius conversion

 const temperatureFahrenheit = [32,65,89,63,20,356,56,85,25,96]
 const temperatureCelsius = temperatureFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))
 console.log(temperatureCelsius)


 // Find()

 const multipleOf5 = [5,10,15,20,25,30,35,40]
 const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)
 console.log("My number grater than 10 is", firstNumberGreaterThan10)

 // FIndIndex()

 const randomNumbers = [6,14,25,78,65,48,40,56]
 const indexNumber = randomNumbers.findIndex(number => number > 50)
 console.log("Random Number", indexNumber)

 // Slice ()
 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())