const orders = [
    {
        customerName: 'Name',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Juan',
        total: 150,
        delivered: true
    }, 
    {
        customerName: 'Karl',
        total: 220,
        delivered: true
    }, 
];


console.log('orginal', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);


// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });

// console.log('rta2', rta2);
// console.log('orginal', orders);


const rta3 = orders.map((item) => {
    item.tax = 0.19;
    return{
        ...item,
        tax: .19
    };
});


console.log('rta3', rta3);
console.log('orginal', orders);
