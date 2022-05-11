/* Class abstraction means to separate class implementation 
from the use of the class. 
The creator of the class provides a description of the class 
and let the user know how the class can be used. 
The user of the class does not need to know how the class is implemented. 
The detail of implementation is encapsulated and hidden from the user.
*/


class Product{

    static data = []
    
    #price = 0;
    #id;

    constructor(title, imageUrl="/images"){
        this.title = title;
        this.imageUrl = imageUrl
        this.#id = Product.data.length
    }

    get overview(){
        return this.id + " | " + this.title + " | " + this.imageUrl + " | " + this.price
    }

    get id(){
        return this.#id + "AKSDC"
    }

    get price(){
        return this.#price + "$"
    }

    setPrice(value){
        if (value > 0 && value < 100){
            this.#price = value
        }
    }

    // Abstraction 
    save(){
        if (this.#dataIsValid()){
            this.#addToDatabase()
            return "Saved"
        }
        return "Invalid"
    }

    #dataIsValid(){
        if ( this.title && this.image){
            return true
        }
        return false
    }

    #addToDatabase(){
        Product.data.push(this)
    }

    // Abstraction 
    delete(id){
        
        if (this.#indexIsValid(id)){
            Product.data[id].delete();
            return "Deleted"
        }
        return "Invalid"
    }

    // Abstraction 
    getProduct(id){

        if (this.#indexIsValid(id)){
            return Product.data[id]
        }
        return "Invalid"
    }

    #indexIsValid(index){
        if (index < Product.data.length){
            return true
        }
        return false
    }

    fetchProducts(){
        return Product.data
    }


}

let product = new Product("Laptop")
product.setPrice(10)
console.log(product.save())
console.log(product.overview)