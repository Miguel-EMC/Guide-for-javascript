/**
      Ejercicio 2:
   
   Dada una cadena de texto, comprobar si es un palindromo o no.
   Los palindromos son palabras que se leen igual aun estando inverdiadas
   Por ejemplo: ana, bob, otto, allivessevilla 
   
   No tener encuenta espacios o simbolos raros
   
 */

function palindromo(text){

    let invert = text.split('').reverse().join('');

    // if(invert === text){
    //     console.log("Es un palindromo");
    // }else{
    //     console.log("No es un palindromo")
    // }

    return invert == text;
}

console.log(palindromo('Miguel'));