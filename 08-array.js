/**
 * Arrays
 * 
 */


//Declaracion de un arreglo
               //0         1       2
var frutas = ["Manzana", "Pera", "Fresa"];
console.log(frutas[0])

//Longitud del arreglo
console.log(frutas.length);


/**
 * Metodos para arrays 
 */

//Añade elementos al final del array frutas[];
var masFrutas = frutas.push("Platanos")

//Elimina el ultimo elemento del array frutas[]:
var ultimaFruta = frutas.pop("Platanos");

//Añade elementos al principio del array frutas[];
var inicioFruta = frutas.unshift("Uvas");

//Elimina un elemento  al principio del array frutas[]:
var borrarFrutaInicio = frutas.shift("Uvas");

//Buscar la posicion de un elemento en el array frutas[];
var posicionFruta = frutas.indexOf("Pera");