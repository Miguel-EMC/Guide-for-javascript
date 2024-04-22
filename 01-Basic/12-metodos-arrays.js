/**
 * Metodos en arrays
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
