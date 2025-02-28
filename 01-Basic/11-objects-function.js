/**
 * 
 * Objects functions
 * 
 */


//Funcion constructora
function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//New genera una nueva instancia en un objeto de otro objeto
var autoNuevo = new Auto("Testla", "Model 3", 2022);
var autoNuevo2 = new Auto("Tesla", "Model X", 2018);
var autoNuevo3 = new Auto("Toyota", "Corolla", 2021);


