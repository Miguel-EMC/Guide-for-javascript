/**
 * function recursiva(){
 *  if (/ validacion /) {
 * 
 *   //llamamos a la recursividad
 * } else {
 *    // llmados normales, sin recursividad
 * }
 * }
 * 
 */

// function recursiva(numero){
//     console.log(numero)

//     if (numero < 5){
//         return recursiva(numero + 1);
//     }else {
//         return 5;
//     }

// }
let numeros = [0,1,2,3,4,5,8,46,9984,2,455,6,4,852,4185,68,45,75,12,64,58,95]
let numero = 0;
for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}

function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray)
    }
}


