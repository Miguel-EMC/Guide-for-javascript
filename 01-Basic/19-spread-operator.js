/**
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 
 * 
 */


// 1. Copying an Array

const originArray = [1,2,3,4,5,6,7]
const copyOfArray = [...originArray]

console.log(originArray)
console.log(originArray)

// 2. Combining Arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1, ...array2]
console.log(array1)
console.log(array2)
console.log(combinedArray)


//3. Creating arrays with additional elements
const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray, 4, 5 ,6]
console.log(baseArray)
console.log(arrayWithAdditionalElements)


// 4. Pass elements to functions

function sum (a,b,c) {
    return a + b +c
}

const numbers = [1,2,3]
const result = sum(...numbers)
console.log(result)