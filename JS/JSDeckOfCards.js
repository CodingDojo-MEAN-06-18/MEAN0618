// Assignment: Deck of Cards
// Create a Deck class. A deck should have the following functionality:



// Creates mpty deck of cards
class Deck {
    constructor(){
        this.deck = [];
    }

    // The Deck should be able to shuffle
    shuffle(){
        let x = this.deck.length, t, i;
        while (x) {
            i = Math.floor(Math.random() * x--);
            t = this.deck[x];
            this.deck[x] = this.deck[i];
            this.deck[i] = t;
        }
    return this;
    }


// The Deck should contain the 52 standard cards
    // The Deck should be able to reset
    reset(){
        this.deck = [];
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const numbers = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (let suit of suits) {
            for (let number of numbers) {
                this.deck.push(number + " of " + suit);
            }
        }
        return this;
    }
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck
    dealRandom(){
        return this.deck.pop();
    }

}


// Now create a Player class. A Player should have the following functionality:
class Player{
    constructor(name){

// The Player should have a name
        this.name = name;

// The Player should have a hand
        this.hand = [];
    }

// The Player should be able to take a card (use the deck.deal method)
    drawCard(deck){
        this.hand.push(deck.dealRandom());
        return this;
    }

// The Player should be able to discard a card
    discard(){
        this.hand.pop();
        return this;
    }
}

const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1 = new Player("Lucy");
player1.drawCard(deck1);
console.log(player1);
console.log(deck1);