import { Card, CardSuit, CardValue } from "../types"

const suits: CardSuit[] = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
]


export function getRandomInt(max: number, min: number = 0) : number {
  const range = max - min + 1
  return Math.floor(Math.random() * range) + min 
}

export function getRandomSuit() : CardSuit {
  const val = getRandomInt(3)
  return suits[val]
}

export function getRandomValue() : CardValue {
  return getRandomInt(13, 1) as CardValue
}

export function getRandomCard() : Card {
  return {
    suit: getRandomSuit(),
    value: getRandomValue()
  }
}