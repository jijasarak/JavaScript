//? Object destructuring in JavaScript allows you to extract properties from objects into variables in a clean and concise way. It is a feature of ES6 that simplifies working with objects.

//? Object Destructuring enables us to extract properties from objects into distinct variables. 

//! Syntax:  const { property1, property2 } = object;

//* property1, property2: The properties you want to extract.
//* object: The object from which the properties are extracted.

// const favoriteFilm = {
//   title: "Top Gun",
//   year: "1986",
//   genre: "action",
//   star: "Tom Cruise",
//   director: "Tony Scott"
// }; 

// const {title, year, genre, star, director} = favoriteFilm;

// console.log(`My favorite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`);


const dreamHoliday = {
  destination: 'Austin, Texas',
  activity: 'visit the Tesla HQ',
  accommodation: 'luxury ranch',
  companion: 'Elon Musk'
}

const {destination, activity, accommodation, companion} = dreamHoliday;

console.log(`I would love to go to ${destination} to ${activity}. 
   I'd sleep in a ${accommodation} and hang out with ${companion} all day.`);


//? Renaming Variables:
//* You can rename variables while destructuring.
// ex., 
// const user = {
//   name: "Alice",
//   age: 25,
// };

// const { name: userName, age: userAge } = user;
// console.log(userName); 
// console.log(userAge);


//? Default Values:
//* Provide default values for properties that might be undefined.
// ex.,
// const user = {
//   name: "Alice",
// };

// const { name, age = 30 } = user;
// console.log(name); 
// console.log(age); 


//? Nested Objects:
//* You can destructure nested objects as well.
// ex.,
// const user = {
//   name: "Alice",
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// const {
//   address: { city, zip },
// } = user;
// console.log(city);
// console.log(zip);

//? Using Rest Operator:
//* The rest operator (...) can be used to collect the remaining properties into another object.
// ex.,
// const user = {
//   name: "Alice",
//   age: 25,
//   city: "New York",
// };

// const { name, ...rest } = user;
// console.log(name);
// console.log(rest);

//? Destructuring in Functions:
//* You can destructure an object passed as a function parameter.

// ex.,
// function greet({ name, age }) {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// const user = { name: "Alice", age: 25 };
// greet(user);  

//? Practical Applications:
//* Extracting only the required properties from an object.
//* Simplifying function parameters when working with configuration objects or APIs.
//* Providing default values for missing properties.

//? Destructuring is an essential feature for writing clean and efficient JavaScript code.
