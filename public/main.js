const main = () => {

  const suits = ['hearts', 'clubs', 'spades', 'diamonds']

  const values = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
  ]

  let deck = []

  const createDeck = () => {
    for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
      // console.log(suits[suitsIndex])
      for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
        const face = values[valueIndex]
        const suit = suits[suitsIndex]
        // console.log(deck)
        // console.log(`${face} of ${suit}`)
        deck.push(`${face} of ${suit}`)
        // console.log(face + ' of ' + suit) 
      }
    }
  }

  // console.log(createDeck())
  // console.log(deck)

  const randomFirstCard = () => {
    createDeck()
    const randomNumber = Math.random()
    console.log(randomNumber)
    const randomIndexNumber = randomNumber * 52
    console.log(randomIndexNumber)
    const wholeIndexNumber = Math.floor(randomIndexNumber)
    console.log(wholeIndexNumber)
    const randomCard = deck[wholeIndexNumber]
    console.log(randomCard)

    return randomCard
    // const oneLineVersion = Math.floor(Math.random() * 52)
  }
  const randomSecondCard = () => {
    createDeck()
    const randomIndex = Math.floor(Math.random() * 52)
    console.log(deck[randomIndex])

    return deck[randomIndex]
  }

  document.querySelector('h1.hello-world').textContent = randomFirstCard()
  document.querySelector('h1.second-card').textContent = randomSecondCard()
}

document.addEventListener('DOMContentLoaded', main)
