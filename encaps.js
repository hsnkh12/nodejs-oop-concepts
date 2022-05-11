
/**
 * The idea behind encapsulation is to make some variables
 * private, to prevent dircet modification of data feilds.
 * only let the user to change and display private
 * variables in the way creator of the class wants,
 * through getters and setters methods.
 * 
 */


class TV {

    
    #channel;
    #volumeLevel;

    constructor() {
        this.#channel = 1
        this.#volumeLevel = 1;
        this.on = false;
    }

    get id(){
        return Math.random();
    }

    turnOn(){
        this.on = true
    }

    turnOff(){
        this.on = false
    }

    setChannel(value){
        if (value > 1){
            this.#channel = value;
        }
    }

    getChannel() {
        return this.#channel
    }

    // set setVolumeLevel(value){
    //     if (value > 1){
    //         this.#volumeLevel = value;
    //     }
    // }

    getVolumeLevel(){
        return this.#volumeLevel
    }

    channelUp(){
        if (this.on){
            this.#channel++
        }
    }

    channelDown(){
        if (this.on && this.channel > 2){
            this.#channel--
        }
    }

    volumeUp(){
        if (this.on){
            this.#volumeLevel++
        }
    }

    volumeDown() {
        if (this.on && this.volumeLevel > 2){
            this.#volumeLevel--
        }
    }
}



let myTv = new TV();
myTv.turnOn();
myTv.channelUp();
myTv.channelUp();
myTv.volumeUp()
myTv.volumeUp()
myTv.volumeUp()
myTv.volumeUp()
myTv.setChannel(5)
console.log(myTv.getChannel())