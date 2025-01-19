//? Advanced Function Patterns and Generators
//? Advanced Function Patterns Intro
//*  We will be studying:
// Closures
// IIFE's
// Recursion
// Currying
// Throttling & Debouncing
// Generators

//* Closures
// lexical scope
// function outerFunction(param) {
//   const outerVariable = 'I am from the outer function'
  
//   function innerFunction() {
//       console.log(param)
//       console.log(outerVariable)
//   }
  
//   return innerFunction
// }
// const closure = outerFunction('I am an argument')
// closure()
// closure() 

//* Closures - an example 
// function scorePoint(playerName) {
//   let score = 0
//   return {
//       displayScore: function () {
//           console.log(`${playerName} has ${score} points`)
//       },
// /*
// Challenge:
//  1. Add two more functions to this object. One to increment 
//     the score and one to decrement the score. Call those functions 
//     a couple of times for each player and then call displayScore 
//     to check it’s working. 
// */
//     incrementScore: function () {
//       score++;
//     },

//     decrementScore: function () {
//       score--;
//     }
//   }
// }

// const player1 = scorePoint('Vicky')
// const player2 = scorePoint('Leo')

// // player1.displayScore()
// player1.incrementScore()
// player1.incrementScore()
// player1.incrementScore()
// player2.incrementScore()
// player1.decrementScore()

// player1.displayScore()
// player2.displayScore()

//* Closures Challenge
