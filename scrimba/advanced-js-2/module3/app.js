//? Working with objects

//*  Objects and Inbuilt Methods
// const books = {
//   "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
//   "b002": { title: "1984", price: 15.99, isAvailable: false },
//   "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
//   "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
// }

// const product = new Object()
// product.name = 'Coffee Machine'
// // console.log(product)

//** Static Methods
// console.log(Object.keys(books))

//* Object Methods Challenges 1
// const books = {
//   "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
//   "b002": { title: "1984", price: 15.99, isAvailable: false },
//   "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
//   "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
// }

// /*
// Challenge:
//   1. Use Object.keys to get an array of keys. 
//      You can store it in a const 'bookKeys'. 
//   2. Iterate over bookKeys twice.
//      A) First log each individual key in the array.
//      B) Then log only the book titles.
// */
// Object.keys(books).forEach((item) => {
//   console.log(item);
//   // console.log(books[item].title);
// });

// /*
// Output: b001
//         b002
//         b003
//         b004
// Output: To Kill a Mockingbird
//         1984
//         The Great Gatsby
//         Moby Dick
// */

// /*
// Challenge:
//   1. Create an array of values using Object.values
//   2. Iterate over it and log out each book price.
// */

// Object.values(books).forEach(value => console.log(value.price));


//* Object Methods Challenge 2
// const books = {
//   "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
//   "b002": { title: "1984", price: 15.99, isAvailable: false },
//   "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
//   "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
// }

// const bookEntries = Object.entries(books)
// bookEntries.filter(item =>item[1].price > 16).forEach(item => console.log(`ID: ${item[0]} Book: ${item[1].title} £${item[1].price}`));

// bookEntries.filter(([id, book]) => book.price > 16)
// .forEach(([id, book]) => console.log(`ID: ${id} Book: ${book.title} £${book.price}`))

/*
Challenge:
  1. Use Object.entries to create an array from 'books'.
  2. Use an array method to filter out the books 
     which cost less than 16.
  3. Iterate over the remaining books and log a string 
     for each book in this format:
     ID: b001 Book: To Kill a Mockingbird £18.99
Bonus points:
  1. Make your code DRYer by destructuring the array 
     where it is passed into a method.
  2. Chain the array methods together.
*/


/*
    Expected Output:
    ID: b001 Book: To Kill a Mockingbird £18.99
    ID: b004 Book: Moby Dick £22.5
*/ 

//* Object.hasOwn & .hasOwnProperty()
const user1 = {
   username: "rpchan",
   subscriptionLevel: "bronze",
 }
 
 const user2 = {
   username: "bcstevens",
   subscriptionLevel: "silver",
   accessPremiumFeature: false
 }
 
 // console.log(user2.hasOwnProperty('accessPremiumFeature'))
//  console.log(Object.hasOwn(user2, 'accessPremiumFeature'))
 
// function canAccessPremiumFeature(userObj, prop) {

//    return userObj.hasOwnProperty(prop) && userObj[prop];
//    // return Object.hasOwn(userObj, prop) && userObj[prop];
//    /*
//    Challenge:
//    1. Write logic to check if the object has the property. 
//       Do this challenge twice, once with hasOwn and once 
//       with hasOwnProperty. All the function need do is return
//       a boolean. 
//       Bonus: use short circuiting to only return true if 
//       'accessPremiumFeature' both exists AND is true.
//    */ 
//    }
   
//    console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
//    console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 


//* Assignment by Value/Reference

//* Deep copy vs Shallow copy
// Shallow: Creates a new object or array, but only at the first level. For nested objects or arrays, a shallow copy will still hold references to the original nested objects or arrays.
// Deep:  copies the entire array or object

//* Spread Operator (...)
// Which helpful for expanding and joining arrays.

//* Spread Operator (...) Challenge
// const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
// const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
// const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
// const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

// function findPriceExtremes(arr){
// /*
// Challenge:
// 2. Find the highest number from the array 
//    and store it in the const 'highest'. 
// 3. Find the lowest number from the array 
//    and store it in the const 'lowest'. 
// */
//     const highest = Math.max(...arr);
//     const lowest = Math.min(...arr);
//     console.log(`The highest average share price was ${highest} `)
//     console.log(`The lowest average share price was ${lowest}`)
// }

// /*
// Challenge:
// 1. Call this function with one array holding 
//    all of the data from the 4 arrays above.
// */
// findPriceExtremes([...averageSharePriceByMonthQ1, ...averageSharePriceByMonthQ2, ...averageSharePriceByMonthQ3, ...averageSharePriceByMonthQ4]); 


//* Object.assign()
// Copies properties from a source object to a target object
// Returns the new version of the target object
// const studentDetails = {
//    firstName: 'janaka',
//    lastName: 'siriwardena',
//    age: 28,
//    country: 'sri lanka',
//    email: 'j.siri@totalinternet.com',
//    discordUsername: 'JS1',
//    modulesCompleted: ['html', 'js', 'css']
//    }  
   
// const studentDetailsCopy = {}

// Object.assign(studentDetailsCopy, studentDetails)
// studentDetailsCopy.modulesCompleted[0] = 'react'
// console.log(studentDetails)
// console.log(studentDetailsCopy)


// console.log(studentDetailsCopy);
// console.log(studentDetails);

// /*
// Challenge:
//    1. Prove that what we have created here is a shallow copy.
// */

//* structuredClone() 
// const studentDetails = {
//    firstName: 'janaka',
//    lastName: 'siriwardena',
//    age: 28,
//    country: 'sri lanka',
//    email: 'j.siri@totalinternet.com',
//    discordUsername: 'JS1',
//    modulesCompleted: ['html', 'js', 'css']
// } 

// const deepClonedStudentDetails = structuredClone(studentDetails)
// deepClonedStudentDetails.modulesCompleted[0] = 'TS'
// console.log(studentDetails)
// console.log(deepClonedStudentDetails)

//* Objects with Methods and "this"
// const gamer = {
//    name: 'Dave',
//    score: 0,
//    incrementScore: function(){
//        //this
//        // console.log(this);
//        this.score++;   
//    }
// }

// console.log(gamer)
// gamer.incrementScore()
// console.log(gamer)

//* Binding "this"'
// .bind() this
// const product = {
//    name: 'Vanilla Lip Gloss',
//    sku: 'w234fg',
//    stock: 276,
//    getProductInfo: function() {
//       //  console.log(this)
//        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
//    }
// }

// // product.getProductInfo()

// const productDetails = product.getProductInfo.bind(product)

// productDetails()

//*  Binding "this" Challenge'
// const button = document.getElementById('btn')

// const product = {
//     name: 'Vanilla Lip Gloss',
//     sku: 'w234fg',
//     stock: 276,
//     getProductInfo: function() {
//         // console.log(this)
//         console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
//     }
// }

// /*
// Challenge 1:
//   What is the 'this' value of 'product.getProductInfo' as we
//   are using it now in the eventListener?
//   Write your answer here: The element that was clicked!

// Challenge 2:
//   Debug the code so it works as intended.
// */

// button.addEventListener('click', product.getProductInfo.bind(product));


