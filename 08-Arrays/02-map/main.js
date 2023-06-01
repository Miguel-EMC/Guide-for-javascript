const letters = ['a','b','c', 'd'];

const newArray = letters.map(item => item + '++')


// for (let i=0; i<letters.length; i++){
//     const element = letters[i];
//     newArray.push(element + '++');
// }

console.log('original', letters)
console.log('new', newArray)

