/* The word polymorphism means having many forms. 
In simple words, we can define polymorphism as the 
ability of a message to be displayed in more than one form. 
Real life example of polymorphism: A person at the same time 
can have different characteristic. Like a man at the 
same time is a father, a husband, an employee.
*/


class Person{

    constructor(name){
        this.name = name
    }

    describeYourSelf() {
        console.log("I am a person!")
        return 
    }
}

class Male extends Person{

    constructor(name){
        super(name)
    }

    describeYourSelf()  {
        console.log("I am a male! and my name is "+this.name)
        return 
    }
}

class Female extends Person{

    constructor(name){
        super(name)
    }

    describeYourSelf() {
        console.log("I am a female! and my name is "+this.name)
        return 
    }
}

let person = new Person("Person")
let hassan = new Male("Hassan")
let zainab = new Female("Zainab")
person.describeYourSelf()
hassan.describeYourSelf()
zainab.describeYourSelf()