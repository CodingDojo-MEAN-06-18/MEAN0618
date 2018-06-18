// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"



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


// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health.

Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;
}


// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.


Ninja.prototype.kick = function(ninja){
    const damage = this.strength * 15
    ninja.health -= damage;
    console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
    return this;
}




const blueNinja = new Ninja("Blue Ninja");
const redNinja = new Ninja("Red Ninja");
// testing sayName on new ninjas
redNinja.sayName();
blueNinja.sayName();
blueNinja.showStats();
redNinja.showStats();
blueNinja.strength = 5;
redNinja.strength = 3;
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();
