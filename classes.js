'use strict'

class Card {

    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.face = false;
    };

}
const drawStack = [];
const activeStack = [];
const discardStack = [];
const SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

(function generateDeck() {
    SUITS.forEach(suit => {
        VALUES.forEach(value => {
            drawDeck.push(new Card(suit, value));
        })
    })
} () );




console.log(deck);