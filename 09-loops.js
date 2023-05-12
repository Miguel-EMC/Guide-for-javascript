/**
 * Tarea que cumpla una condicion, de forma repetitiva
 * Sale del bucle hasta que cumpla la condicion
 */


// ***FOR
var estudiantes = ["Maria", "Juan", "Camila", "Miguel", "Arelis"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

//*** WHILE */
var animales = ["Oso", "Perro", "Gato", "Pato"];

function listarAnimales(animales){
    console.log(`Nombre de animal:  ${animales}`)
}

while(animales.length > 0){
    var animal = animales.shift();
    listarAnimales(animal);
}