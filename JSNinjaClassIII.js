// Assignment: Ninja Class III
// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:




class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3
        this.speed = 3
        console.log(this)
    }



// sayName() - This should log that Ninja's name to the console.
    sayName() {
        console.log(`Hi my name is ${this.name}`)
    }


// showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }

// drinkSake() - This should add +10 health to the Ninja
    drinkSake(){
        this.health += 10
    }
}
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }
    speakWisdom(){
        let sip = super.drinkSake();
        sip;
        console.log(`"It is what you haven't done that will torment you" \n - ${this.name}`)
        return this
    }
}
const erin = new Ninja("Ninj Erin")
erin.sayName()
erin.drinkSake()
const lucy = new Sensei("Sensei Lucy")
lucy.speakWisdom()
lucy.showStats()