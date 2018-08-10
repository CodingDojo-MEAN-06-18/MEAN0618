// TypeScript Bikes - OOP
// Objectives:
// Refresh your object-oriented programming skills
// Practice your supercharged JavaScript with TypeScript
// Using the TypeScript Playground tool, create a new class called Bike with the following properties/attributes:

// price
// max_speed
// miles
// Create 3 instances of the Bike class.

// Use the constructor() function to specify the price and max_speed of each instance (e.g. let bike1 = new Bike(200, "25mph"); also write the code so that the initial miles is set to be 0 whenever a new instance is created.

// Add the following functions to this class:

// displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
// ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
// reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
// Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().

// What would you do to prevent the instance from having negative miles?

// Which methods can return this in order to allow chaining methods?

// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.

class Bike {
    price: number;
    max_speed: number;
    miles: number;
    constructor(){}
    displayInfo() {
        return console.log(this.price, this.max_speed, this.miles);
    }    
    // have this method display the bike's price, maximum speed, and the total miles.
    ride() {
        return this.miles += 10;
    } //have it display "Riding" on the screen and increase the total miles ridden by 10
    reverse(){
        return this.miles -= 5;
    } //have it display "Reversing" on the screen and decrease the total miles ridden by 5...
}
let bike1 = new Bike();
bike1.displayInfo()
bike1.ride()
bike1.reverse()