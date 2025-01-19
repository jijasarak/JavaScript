//*  Symbols
// A primitive data type
// Am immutable identifier used as a property key in objects
// Each symbol is unique
// (A bit like UUIDs/GUIDs)
//  Symbols are not 1005 private
// Misuse or overuse of symbols can lead to confusion or complexity in code maintenance
// const userName = Symbol('user name');

const { set } = require("mongoose")

// const user = {
//     name: 'Benny',
// }

// user[userName] = 'Benny67';

// console.log(user[userName]);

//*  Symbols Challenge
/*
Challenge:
    1. Add a hidden property to the book object 
       holding a librarian’s note to say the book 
       has gone missing. 
    2. Log out the new property.
*/
// const librarianNote = Symbol();
// const book = {
//   title: "The Catcher in the Rye",
//   author: "J.D. Salinger",
//   year: 1951
// }

// book[librarianNote] = `This title has gone missing.`;

// console.log(book[librarianNote]);


//* The Map Object
// Map Object !=  array.map()
// The Map Object holds key/value pairs just like a regular object

// Map Object Benefits:
// Use other data types as keys
// Iterate with a forEach
// Insertion order

// Properties and methods:
// size (property)
// set
// get
// delete
// const athlete1 = { name: "Alice", age: "50" }
// const athlete2 = { name: "Dave", age: "51" }
// const athlete3 = { name: "Nicky", age: "49" }

// const finishers = new Map();

// finishers.set(athlete1, 10000);
// finishers.set(athlete2, 10200);
// finishers.set(athlete3, 9800);
// console.log(finishers);
 
// finishers.forEach((value, key)=> console.log(key.name, value));
// console.log(finishers.size);
// console.log(finishers.get(athlete3));
// finishers.delete(athlete3);
// console.log(finishers);
// console.log(finishers.has(athlete2));

// const person = {
//   name: 'Micky',
//   dob: '200174',
//   location: 'Dunwich'
// }
// person.language = 'English'
// person['100'] = 'one hundred'
// person['2'] = 'two'

// for (let key in person) {
//   console.log(person[key])
// }


//* Map Object Challenge 
// const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
// const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
// const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
// const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

// /* Challenge */

// /* 1. Create a map object "athletes" to store the athletes. */
// const athletes = new Map();

// function addAthlete(athlete, time) {
// /* 2. This function should add athletes to the "athletes" map. */
//   athletes.set(athlete, time);
// }

// function getSummary(){
// /* This function should make the following appear in the console */
//     athletes.forEach((value, key) => {
//       console.log(`${key.name}'s average time is ${key.averageTime10KmMins} but today Alice achieved ${value}`);
//     });
// //Alice's average time is 58.3 but today Alice achieved 57.3
// //Dave's average time is 53.2 but today Dave achieved 61.1
// //Micky's average time is 64.5 but today Micky achieved 59.9
// //Judy's average time is 66 but today Judy achieved 61.6
// }

// addAthlete(athlete1, 57.3);
// addAthlete(athlete2, 61.1);
// addAthlete(athlete3, 59.9);
// addAthlete(athlete4, 61.6);
// console.log(athletes);
// getSummary(); 

//* The Set Object
// A set object stores unique values as individual items, not key/value pairs. It's a bit like an array but with each item unique - no duplicates.

// const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes'];

// const wishListSet = new Set(wishListArr);
// wishListSet.add('diary');
// wishListSet.delete('shoes');
// console.log(wishListSet.has('shoes'));
// wishListSet.clear()
// wishListSet.forEach((listItem) => console.log(listItem));

// const wishListSet = Array.from(new Set(wishListArr));
// wishListSet.map((listItem) => console.log(listItem));

//* Sets Challenge
/* Challenge:
    1. Refactor this code to use a Set instead  
       of an array so no tags can be duplicated!
*/

// const postTags = []
// const postTags = new Set();

// function addTag(newTag) {
//     // postTags.push(newTag);
//     postTags.add(newTag);
// }

// addTag('history');
// addTag('romans');
// addTag('sociology');
// addTag('history');
// addTag('history');

// postTags.forEach((tag) => console.log(tag));


