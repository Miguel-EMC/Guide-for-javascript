/**
 * Objetos
 * 
 * Los objetos se manejan con propiedades, una convinacion entre palabra claves y valores 
 */

var miAuto = {
    marca: "Toyota", 
    modelo: "Corolla",
    año: 2023,
};

//Para aceder a unos de los valores es mediante un punto y la palabra clave
miAuto.año

//Podemos tener funciones dentro del objeto
var misDatos = {
    nombre: "Miguel",
    apellido: "Muzo",
    edad: 21,
    detalleDelUsuario: function(){
        console.log(`Nombre Completo:   ${this.nombre} ${this.apellido}`)
    }
}

/**
 * Que es el this, hace referencia al objeto(al padre)
 * 
 * como por ejemplo misDatos.nombre
 */

