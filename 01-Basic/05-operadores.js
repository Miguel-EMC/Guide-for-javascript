/**
 * operadores aritméticos
 */

/**
 * Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.
 * Para realizar las operaciones básicas, como suma, resta, multiplicación y división;
 *  utiliza los siguientes operadores:
 */

// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3

/**
 * Operador de residuo
 */

21 % 5 // 1


/**
 * Operador de incremento y decremento
 */

variable++
variable--
++variable
--variablevar

a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4

/**
 * Operadores de asignación
 */

var saludo = "Hola Mundo"


/**
 * Operadores de asignación combinada
 */

var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3

var contador = 1

contador += 2
contador -= 1
contador *= 5
contador /= 2

console.log(contador)

/**
 * Operadores de comparación
 */

//Igualdad por valor: compara dos variables solamente por su valor
"3" == 3 // true
3 == 3 // true

// Igualdad estricta: comprara dos variavles por su valor y tipo de dato
"3" === 3 // false
3 === 3 // true

/**
 * Operadores de desigualdad
 */

//Desigualdad por valor
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta por valor y tipo de dato
"3" !== 3 // true
3 !== 3 // false


/**
 * Operadores de mayor y menor
 */

// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

/**
 * Operadores lógicos
 * 
 * Los operadores logicos comparan dos o mas expresiones y devuleve un valor logico (verdad o falso)
 */

var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

// Operadores de union
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true