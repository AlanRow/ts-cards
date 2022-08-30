import { Card, CardSuit, CardValue } from "../types"

export function getSuitName(suit: CardSuit) : string {
  switch (suit) {
    case 'clubs':
      return 'треф'
    case 'diamonds':
      return 'бубей'
    case 'hearts':
      return 'червей'
    case 'spades':
      return 'пик'
  }
}

export function getValueName(value: CardValue) : string {
  switch (value) {
    case 1:
      return 'туз'
    case 2:
      return 'двойка'
    case 3:
      return 'тройка'
    case 4:
      return 'четверка'
    case 5:
      return 'пятерка'
    case 6:
      return 'шестерка'
    case 7:
      return 'семерка'
    case 8:
      return 'восьмерка'
    case 9:
      return 'девятка'
    case 10:
      return 'десятка'
    case 11:
      return 'валет'
    case 12:
      return 'дама'
    case 13:
      return 'король'
  }
}

export function getCardLabel(card: Card) {
  return `${getValueName(card.value)} ${getSuitName(card.suit)}`
}