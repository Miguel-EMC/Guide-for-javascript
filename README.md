# Guide for JavaScript

## Introduction to JavaScript

JavaScript is a popular programming language that is widely used for web development, desktop applications, native mobile applications, and even IoT applications. JavaScript is an interpreted, object-oriented, weakly typed, and dynamic language that enables developers to create interactive and dynamic web pages.

## Why Learn JavaScript?

There are several reasons why you should consider learning JavaScript:

- Many frameworks and libraries are built using JavaScript as their primary language.
- JavaScript is widely used for web development and can help you create responsive and dynamic websites.
- JavaScript can be used for desktop and mobile applications, including native mobile apps.
- JavaScript can be used in the backend to create server-side applications.
- JavaScript can be used in the IoT space, enabling developers to create smart and connected devices.

## What is JavaScript?

JavaScript is a scripting language that runs in the browser and allows developers to create dynamic and interactive web pages. It is a high-level, weakly typed, and dynamic language that is easy to learn and use. JavaScript allows developers to add behavior to web pages, validate form data, create animations, and much more.

## Example of Weakly Typed in JavaScript

JavaScript is a weakly typed language, which means that the type of a variable can change at runtime. Here are some examples:

```js
4 + "2";   // result is "42"
4 * "8";   // result is 32
"a" + true;  // result is "atrue"
false - 3; // result is -3
```

## Respuestas al Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings? ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es '+'. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario: strig
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Miguel Eduardo';
let apellido = 'Muzo Cansigña';
let username = 'Migue-EMC';
let edad = 21;
let mail = 'miguel@example.com';
let esMayorDeEdad = true;
let dineroAhorrado = 10;
let deudas = 200;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

- ¿Cuándo me sirve usar una función en mi código?
Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro. También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Miguel Eduardo";
const lastname = "Muzo Cansigña";
const completeName = name + lastname;
const nickname = "miguel-emc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
```
## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de código u otro dependien de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch
El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condional. En cambio, en el switch todos los 'cases' se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
```
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```
### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos.

```
const array = [1, 'jaja', true, false, { nombre: 'lala', edad: 3 }];
```


- ¿Qué es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.

```
const obj = {
  nombre: 'Fulanito',
  edad: 3,
  comidasFavoritas: ['Pollo frito', 'vegetales'],
};
```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.


### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
function imprimirPrimerElementoArray(arr) {
    console.log(arr[1])
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```
## PROGRAMACION ORIENTADA A OBJETOS

### Organización
- Variables
- Constantes
- Variables Estaticas
- Metodos
- Funciones Estaticas
- Getters y setters

### OBJETOS

- ¿Qué es un Objeto?

Existe objetos fisicos y conceptual

Fisicos: 'Personas'
Conceptual: 'Banco'

- ¿Qué son las propiedades?
Tambien se pueden llamar atributos, sustantivos que pertenecen al objeto.

- ¿Qué son los comportamientos?
Comportantamiento seras las operaciones del obejtos, sulen ser verbos o sustantivos y verbo

### EJEMPLO

### Perro:
Atributos:  
- nombre
- color
- raza
- altura

### Adopciones 
Atributos:  
- id
- nombre
- raza
- altura

Comportamientos: 
- serAdoptado()


### ABSTRACCION Y CLASES
- ¿Qué son las clases?
La abstraccion para depender del procedimiento del proyecto, crear prototipos.
Clase es el modelo sobre el cual se contruira nuestro objeto.



### Encapsulamiento
- ¿Qué son los encapsulamiento?
Getters: para obtener los atributos de la clase
Setters: para remplazar los atributos de la clase


### Polimorfismo 
- ¿Qué es el polimorfismo?
Permite cambiar el comportamiento de los metodos de una herencia
<!-- sobrecarga
paramétrico -->
inclusión