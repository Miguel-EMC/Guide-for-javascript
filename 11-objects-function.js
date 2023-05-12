/**
 * 
 * Objects functions
 * 
 */


//Funcion constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//New genera una nueva instancia en un objeto de otro objeto
var autoNuevo = new auto("Testla", "Model 3", 2022);


var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2021);


