const totals = [1,2,5,8,9,6,7,10];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta',rta);