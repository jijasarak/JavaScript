//?  The switch statement in JavaScript is used for executing one block of code out of many based on the value of a specific expression. It provides an alternative to using multiple if-else conditions.

//! Syntax:
/** switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // Add more cases as needed
  default:
    // Code to execute if no cases match
} **/

//* expression: The value to compare against the case values.
//* case: Specifies a value to compare with the expression.
//* break: Ends the execution of the current case. Without it, the code continues into the next case (called fall-through behavior).
//* default: Optional. Executes if none of the case values match the expression.

//* Key Points:
//* Fall-through behavior: Without a break statement, the code continues to the next case. This is useful in grouping cases.
//* Default case: Executes when no other cases match. It is optional.
//* Strict comparison: switch uses strict comparison (===), meaning types must also match.

//? When to Use:
//? When there are many specific values to check against a single variable.
//? For cleaner and more readable code compared to multiple if-else conditions.

/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
  let price = 0;

  switch(item) {
      case 'coffee':
          price = 2;
          break;
      case 'sandwiches':
          price = 5;
          break;
      case 'salad':
          price = 4;
          break;  
      case 'lemon cake':
          price = 3; 
          break;
      default:
          return `Sorry, we don't sell ${item}`;
  }
  return `You selected ${item}. That will be $${price}`;
}

console.log(selectItem('lemon cake'));

