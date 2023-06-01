const letters = ['a','b','v'];

for (let i=0; i<letters.length; i++){
    const element = letters[i];
    console.log(element);
}

letters.forEach(item => console.log('foreach', item))