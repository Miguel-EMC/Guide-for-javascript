/**
 * CLASES
 */

/**
 * Metodos
 */

/**
 * Herencia
 * Heredar, los atributos del padre
 */
class Usuario {
    constructor(name, age, email, active){
        //Estamos pidiendo que no se pueda modificar el name (privado)
        this._name = name,
        this.age = age, 
        this.email = email,
        this.active = active 
    }
    presentarse() {
       return `Hola soy ${this.name}`;
    }

    getName(){
        return this._name;
    }
    getAge(){
        return this.age;
    }
    getEmail (){
        return this.ege;
    }
    getActive(){
        return this.active;
    }
    setName(newName){
        this.name = newName
    }
}

class Theacher extends Usuario{
    constructor(name, age, email, active, coursesDigitized){
        super(name, age, email, active)
        this.coursesDigitized = coursesDigitized
    }
}

class Student extends Usuario{
    constructor(name, age, email, active, coursesTaken){
        super(name, age, email, active)
        this.coursesTaken = coursesTaken
    }
}