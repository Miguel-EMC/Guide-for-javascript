const obj1 = {
    a: 'A',
    b: 'B',
    c: {
        d:'D',
        e: 'E'
    }
};

const stringfiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringfiedComplexObj);
