



// console.log('What is the capital of Peru?');

// setTimeout(function(){
//     console.log('Lima!')
// }, 3000);

// function displayTrafficLight(light){
//   console.log(light)
// }

// setTimeout(displayTrafficLight, 3000, '🟢')

// displayTrafficLight('🔴')

function logAnswer(answer, points) {
  console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

setTimeout(logAnswer, 3000, 'Lima', 10)