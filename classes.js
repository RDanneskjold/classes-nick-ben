/* eslint-disable indent */
'use strict';

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.face = false;
  }
}

class Stack {
    constructor(stackArr) {
        this.stack = [...stackArr];
    }

    drawCard() {
      return this.stack.pop();
    }

    addCard() {

    }
}


const drawStackArr = [];


 ///new Stack(drawStack).drawCard = card.. GAME: activeStack.drawCard() = playedCard -> discardStack -> drawStack.drawCard -> activeStack.push(card)
const activeStack = [];
const discardStack = [];

const SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

(function generateDeck() {
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      drawStackArr.push(new Card(suit, value));
    });
  });
} () );

const drawStack = new Stack(drawStackArr);
const draw = drawStack.drawCard();

console.log(drawStackArr);
console.log(draw);