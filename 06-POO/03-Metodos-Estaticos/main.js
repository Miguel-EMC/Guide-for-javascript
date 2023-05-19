const student = {
    name: 'Miguel',
    age: '21',
    approvedCourse: ['curso 01'],
    addCourse(newCourse){
        this.approvedCourse.push(newCourse);
    }
}

student.addCourse('Curso 02')

/**
 * Object keys
 */

// console.log(Object.keys(student));
// console.log(Object.getOwnPropertyNames(student));
// console.log(Object.entries(student));


console.log(Object.getOwnPropertyDescriptors(student));

Object.defineProperties(student, "navigator", {
    value: "Chrome",
    enumerator: false,
    writable: true,
    configurable: true 
})

Object.defineProperties(student, "pruebaNasa", {
    value: "extraterestres",
    enumerator: false,
    writable: true,
    configurable: false 
})

console.log(Object.getOwnPropertyDescriptors(student));
