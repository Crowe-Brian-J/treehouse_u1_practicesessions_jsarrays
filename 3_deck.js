// Note: We've supplied you a basic function that takes an array of elements and shuffles their order in the array. It's a really useful, but somewhat complex algorithm -- look in the teacher's notes for links to an explanation for how it works. You'll use this function to shuffle a deck of cards that you'll create.
/* function shuffle(arr) {
  var j, x, i
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = arr[i]
    arr[i] = arr[j]
    arr[j] = x
  }
  return arr
} */
//rewritten as an arrow function
const shuffle = (arr) => {
  let j, x
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1)) //randomizes number stored in j from (i + 1) down
    x = arr[i] //assigns number at arr[i] to x
    arr[i] = arr[j] //assigns number at arr[j] to arr[i]
    arr[j] = x //assigns number at x to arr[j]
  }
  return arr
}

/* Complete the function createDeck(), which we've started for you below. The goal is to create a multi-dimensional array of 52 elements (52 cards), and return them shuffled when the function is called. To simplify creating the deck use two for loops -- one inside the other -- to build a multidimensional array.
 */
// 1. Add a for loop -- to loop through each element in the suites array
// 2. INSIDE that loop, add another loop that loops through elements in the ranks array.
// 3. Inside the second, nested loop, create a new array named card, which is composed of a rank and a suite. For example ['King', '♥︎'].
// 4. Push that card onto the deck array. Once both loops complete running, the deck array will hold 52 elements, and each of those elements are themselves an array.
// 5. Finally, pass the new deck to the shuffle() function, and return the results.
/* function createDeck() {
  var suites = ['♠︎', '♣︎', '♥︎', '♦︎']
  var ranks = [
    'Ace',
    'King',
    'Queen',
    'Jack',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2'
  ]
  var deck = []
  // add your code below here:
} */
//rewritten as arrow function
const createDeck = () => {
  const suits = ['♠︎', '♣︎', '♥︎', '♦︎']
  const ranks = [
    'Ace',
    'King',
    'Queen',
    'Jack',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2'
  ]
  let deck = []
  //my code below
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = [ranks[j], suits[i]]
      deck.push(card)
    }
  }
  return shuffle(deck)
}

// 6. Call the createDeck() function and store the results in a new variable named myDeck

/* 7. Use a for loop to loop through the deck and list each card in the order the appear in the newly shuffled array. Use the log() method to print out a message like this, once for each card:
"7 of ♥.︎"
*/

// Run your code by typing node 3_deck.js in the console below
