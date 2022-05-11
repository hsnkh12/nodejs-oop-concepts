
// All variables are private and user cannot modify or set any of them.

class Student{

    #name;
    #surname;

    constructor(name, surname){
        this.#name = name;
        this.#surname = surname;
    }

    getName(){
        return this.#name
    }

    getSurname(){
        return this.#surname
    }
}



let hassan = new Student("Hassan", "El Abdallah")



console.log(hassan.getName())
console.log(hassan.getSurname())