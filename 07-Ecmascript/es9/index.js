const obj = {
    name: 'oscar',
    age: '32',
    country: 'EC'
}

let {name, ...all} = obj;
console.log(all);


const obj1 = {
    name: 'Miguel',
    age: '18'
}

const obj2 = {
    ...obj1,
    country:'CL'
}

console.log(obj1);
console.log(obj2);



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'));
    });
};


helloWorld()
   .then(response => console.log(response))
   .catch(error => console.log(error))
   .finally(() => console.log('Finally'))


   const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
   const match = regexData.exec('2018-04-20');
   const year = match[1];
   const month = match[2];
   const day = match[3];

   console.log(year, month, day);