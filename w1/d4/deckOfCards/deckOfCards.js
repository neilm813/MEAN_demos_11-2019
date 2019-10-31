function randIntZeroToMax(exclusiveMax) {
  return Math.floor(Math.random() * exclusiveMax);  
}

// [ ] Create a Card class. A card should have the following functionality:

// [x] Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// [x] Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// [x] Each Card should have a numerical value (1-13)
// [x] Each Card should have a show method (log the card's information to the console)

class Card {
  constructor(suit, name, val) {
    this.suit = suit;
    this.name = name;
    this.val = val;
  }
  show() {
    console.log(this);
  }
}

// const card = new Card("Hearts", "Ace", 1);
// card.show();

// [x] Create a Deck class. A deck should have the following functionality:
// [x] The Deck should contain the 52 standard Cards
// [x] The Deck should be able to shuffle
// [x] The Deck should be able to reset
// [x] The Deck should be able to deal a random Card
// [x] Deal should return the Card that was dealt and remove it from the Deck

class Deck {
  constructor() {
    this.reset();
  }
  reset() {
    this.cards = [];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const names = {
      1: "Ace",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      6: "Six",
      7: "Seven",
      8: "Eight",
      9: "Nine",
      10: "Ten",
      11: "Jack",
      12: "Queen",
      13: "King"
    };

    for (const suit of suits) {
      for (let i = 1; i <= 13; ++i) {

        const newCard = new Card(
          suit,
          names[i],
          i
        );

        this.cards.push(newCard);
      }
    }
  }
  shuffle() {
    for (let i = 0; i < this.cards.length; ++i) {

      const randIdx = randIntZeroToMax(this.cards.length);
      const temp = this.cards[i];
      this.cards[i] = this.cards[randIdx];
      this.cards[randIdx] = temp;

      // shorthand swap using array destructure syntax
      // [this.cards[i], this.cards[randIdx]] =
      // [this.cards[randIdx], this.cards[i]];
    }
  }

  deal() {
    const removedCard = this.cards.shift();
    return removedCard;

    // shorthand
    // return this.cards.shift();
  }

  dealRandom() {
    const randIdx = randIntZeroToMax(this.cards.length);
    const spliced = this.cards.splice(randIdx, 1);
    return spliced[0];

    // shorthand
    // return this.cards.splice(
    //   randIntZeroToMax(this.cards.length),
    //   1
    // )[0];
  }

  show() {
    console.log(this.cards);
  }
}

const deck = new Deck();
// deck.shuffle();
// deck.show();

// [x] Now create a Player class. A Player should have the following functionality:
// [x] The Player should have a name
// [x] The Player should have a hand (an array of cards taken from a Deck)
// [x] The Player should be able to take a Card (use the deck.deal method)
// [x] The Player should be able to discard a Card

class Player {
  constructor(name, hand = []) {
    this.name = name;
    this.hand = hand;
  }

  take(deck) {

    const randCard = deck.dealRandom();
    this.hand.push(randCard);

    // shorthand
    // this.hand.push(
    //   deck.dealRandom()
    // );
  }

  discard(suite, name) {

    for (let i = 0; i < this.hand.length; ++i) {

      const currCard = this.hand[i];

      if (currCard.suite === suite && currCard.name === name) {
        const spliced = this.hand.splice(i, 1);
        return spliced[0];
      }
    }
    return null;
  }

  show() {
    console.log(this.hand);
  }
}

const player = new Player("Kim");