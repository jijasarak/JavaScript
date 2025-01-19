//? for of loop
//* Syntax: for (let character of characters){
// * ...
//* } 



const characters = [
  {
      title: 'Ninja',
      emoji: '🥷',
      powers: ['agility', 'stealth', 'aggression'],
  },
  {
      title: 'Sorcerer',
      emoji: '🧙',
      powers: ['magic', 'invisibility', 'necromancy'],
  },
  {
      title: 'Ogre',
      emoji: '👹',
      powers: ['power', 'stamina', 'shape-shifting'],
  },
  {
      title: 'Unicorn',
      emoji: '🦄',
      powers: [ 'flight', 'power', 'purity'],
  }
]; 

// for(let character of characters ){
//   console.log(character);
// };

// Challenge:
// 1. Nest a for of inside this for of to iterate over the powers array for each character. Log out each power.

// for(let character of characters ){
//   for(let power of character.powers){
//     console.log(power);
//   };
// };


//? for in loop
for(let property in characters ){
    console.log(characters[property]);
};

// for...of vs for...in 
// They both iterate over object data structure
// Arrays are objects too!
// for...in : iterates over all enumerable property keys of an object
// for...of : iterates over the values of an iterable object. (example of iterable objects include arrays, strings)