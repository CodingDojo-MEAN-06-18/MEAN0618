// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:





function Ninja(name, health=100) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = health;

// showStats() - This should show the Ninja's name, strength, speed, and health.
    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
}

// sayName() - This should log that Ninja's name to the console.
Ninja.prototype.sayName = function() {
    console.log("Ninja name is: " + this.name );
    return this;
};


// drinkSake() - This should add +10 Health to the Ninja
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};

const ninja1 = new Ninja("Erin");

ninja1.sayName();

ninja1.showStats();
ninja1.drinkSake().showStats();
