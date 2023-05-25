let numbers = [1,2,3,4,5,6,8,9,15];
if (numbers.includes(7)){
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra')
}

let base = 4;
let exponent = 4;
let result = base ** base;
console.log(result)

const data = {
    frontend: 'Miguel',
    backedn: 'Miguel-02',
    design: 'Are'
}
const entries = Object.entries(data);
console.log(entries)


const values = Object.values(data);
console.log(values)
console.log(values.length)


const string = 'hello'
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '----'));


const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello Word'),3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();