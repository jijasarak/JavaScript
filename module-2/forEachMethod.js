//? .forEach() Method 
// A method for iterating over arrays
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

/*
Challenge:
1. Nest a forEach to log out each individual
   power in each characters powers array.
*/
characters.forEach(function(character){

  character.powers.forEach(function(power){
    console.log(power);
  });
  
});