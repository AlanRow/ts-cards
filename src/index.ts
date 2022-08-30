import { getRandomCard, getCardLabel } from "./utils"

const card = getRandomCard()
console.log(`Ваша карта: ${getCardLabel(card)}`)