//Objeto

// const usuario1 = {
//     name: "Miguel",
//     age: 20,
//     email: "miguel@example.com",
//     activo: true,
//     cursosAprobados : [
//         "JavaScrip basico",
//         "Algoritmos"
//     ]
// };



// //Para agregar un nuevo usuario

// const usuario2 = {
//     name: "Arelis",
//     age: 20,
//     email: "arelis@example.com",
//     activo: true,
//     cursosAprobados : [
//         "JavaScrip basico",
//         "Algoritmos"
//     ],
//     saludar() {
//         console.log(`Mi nombre es ${this.name}`)
//     }
// };


// console.log(usuario1);
// console.log(usuario2.saludar());


/**
 * FUNCIONES CONSTRUCTORA
 * 
 * Determinar un molde y a parti de hay determinar para crear un objeto
 */

function Usuario(name, age, email, active){
    this.name = name,
    this.age = age, 
    this.email = email,
    this.active = active 
}

const user1 = new Usuario('Miguel', 21, 'miguel@example.com', true);
const user2 = new Usuario('Pepo', 21, 'pepo@example.com', true);

console.log(user1)
console.log(user2)

