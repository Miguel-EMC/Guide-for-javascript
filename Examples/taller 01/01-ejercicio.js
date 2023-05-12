/***
  Recomendaciones:
  
  - Escribir variables en ingles por fines dimanicos
  - Test en cada ejercicio
  - Siempre mostrar el resultado en la consola/terminal
  - Hay varias soluciones validad para un mismo ejercicio

 */

/**
    EJERCICIO 01
  
    Dado un numero, devolver su tabla de multiply completa
  
    var number_01 = number(Cualquier numero)
    var number_max = mumber(Cualquier numero)
    
    number_01 * number_max = number_result
 */

//   var number_01 = 5;
//   var number_max = 10;

//   for (var i = 0; i <= number_max; i++){
//     var result = number_01  * i;
//     console.log(`${number_01} x ${i} = ${result}` );
// }

function multiply(a, b) {
  for (var i = 0; i <= b; i++) {
    var result = a * i;
    console.log(`${a} x ${i} = ${result}`);
  }
}

multiply(11, 20);
