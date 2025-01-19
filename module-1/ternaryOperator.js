//? The ternary operator in JavaScript is a shorthand for conditional statements. It’s a compact syntax for writing an if-else expression and is often used to assign values or execute simple operations based on a condition.

//! Syntax: condition ? expressionIfTrue : expressionIfFalse;
//* condition: The condition to evaluate. If it's true, the first expression is executed.
//* expressionIfTrue: Executed if the condition is true
//* expressionIfFalse: Executed if the condition is false 

// const exerciseTimeMins = 20;

// const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!';

// console.log(message);  

//? for complex conditionals
//! When to avoid: If the condition or expressions are too complex, use an if-else statement for better readability.
// const exerciseTimeMins = 40;

// const message = exerciseTimeMins < 30 ? 'You need to try harder!'
// : exerciseTimeMins < 60? 'Doing good!' 
// : 'Excellent!';

// console.log(message);


// more example code 

const playerGuess = 3;
const correctAnswer = 6;

const message = playerGuess === correctAnswer ? "Correct!" : "Wrong!";
console.log(message);