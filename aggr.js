/*
Aggregation is a special form of association that represents 
an ownership relationship between two objects. 
Aggregation models has-a relationships. 
The owner object is called an aggregating object, 
and its class is called an aggregating class. 
The subject object is called an aggregated object, 
and its class is called an aggregated class. 
*/

/* “a student has a name” is a composition relationship 
between the Student class and the Name class, 
whereas “a student has an address” is an aggregation 
relationship between the Student class and the Address class, 
since an address can be shared by several students. 
*/



// Aggregtion class
class Customer{

    #id
    constructor(name, surname, email, city, street, postalCode){
        this.profile = new Profile(name, surname, email)
        this.address = new Address(city, street, postalCode)
        this.#id = Math.random()
    }

}

// Aggregated class
class Address{

    constructor(city, street, postalCode){
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }

}
// Aggregated class
class Profile{
    constructor(name, surname, email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

}


