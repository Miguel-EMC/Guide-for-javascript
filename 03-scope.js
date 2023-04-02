/**
 * Scope
 * 
 * Existe dos tipos de scope global(el todo) y el local(pequeño univeso del global)
 */

var nombre = "Miguel" //Scope global

function fun(){
    var apellido = "Muzo"; //Scope local
    return nombre + "" + apellido
}

fun(); //"Miguel Muzo"

/**********/

console.log(apellido); //apellido is not defined