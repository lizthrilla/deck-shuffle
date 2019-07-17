const main = () => {
  const suits = ['hearts', 'clubs', 'spades', 'diamonds']

  const faces = [
    { name: 'Ace', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
    { name: 'Four', value: 4 },
    { name: 'Five', value: 5 },
    { name: 'Six', value: 6 },
    { name: 'Seven', value: 7 },
    { name: 'Eight', value: 8 },
    { name: 'Nine', value: 9 },
    { name: 'Ten', value: 10 },
    { name: 'Jack', value: 11 },
    { name: 'Queen', value: 12 },
    { name: 'King', value: 13 }
  ]
  const deck = []

  // function to creat a deck of cards
  const createDeck = () => {
    for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
      // console.log(suits[suitsIndex])
      for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const name = faces[faceIndex].name
        const value = faces[faceIndex].value
        const suit = suits[suitsIndex]
        // console.log(face)
        deck.push({
          suit: suit,
          name: name,
          value: value
        })
        // console.log(face + ' of ' + suit)
      }
    }
  }

  console.log(deck)
  // function randomFirstCard() {

  // }

  const randomFirstCard = () => {
    createDeck()
    const randomNumber = Math.random()
    const randomIndexNumber = randomNumber * 52
    const wholeIndexNumber = Math.floor(randomIndexNumber)
    const randomCard = deck[wholeIndexNumber]
    console.log(randomCard)
    const displayCard = `${randomCard.name} of ${randomCard.suit}`
    console.log(displayCard)
    return randomCard
  }

  const randomSecondCard = () => {
    createDeck()
    const randomIndex = Math.floor(Math.random() * 52)
    // console.log(deck[randomIndex])
    const displayCard = `${deck[randomIndex].name} of ${deck[randomIndex].suit}`
    console.log(displayCard)

    return deck[randomIndex]
  }

  const firstCard = randomFirstCard()
  const secondCard = randomSecondCard()

  const winner = () => {
    if (firstCard.value > secondCard.value) {
      console.log('first card is winner')
      return 'First Card Wins'
    } else if (firstCard.value < secondCard.value) {
      console.log('second card is winner')
      return 'Second Card Wins'
    } else {
      console.log('DRAW!')
      return 'DRAW!'
    }
  }

  document.querySelector('h1.hello-world').textContent = `${firstCard.name} of ${firstCard.suit}`
  document.querySelector('h1.second-card').textContent = `${secondCard.name} of ${secondCard.suit}`
  document.querySelector('h2.who-won').textContent = winner()
}

document.addEventListener('DOMContentLoaded', main)
