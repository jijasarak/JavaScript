//? Logical Operators and Coalescing
//* Short-circuiting with OR (||)
// const jobHunter = {
//   name: 'Tom Chant',
//   // jobSearchArea: 'Europe',
// }

// const workLocation = jobHunter.jobSearchArea || 'Worldwide'
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)

/***** ternary *****/
// const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide'
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)

/***** if else *****/
// if (jobHunter.jobSearchArea) {
//     console.log(`${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`)
// }
// else {
//     console.log(`${jobHunter.name}'s work location is Worldwide`)
// }

//* Short-circuiting with OR (||) Challenge
// const jobHunter = {
//   name: "Tom Chant",
//   username: "TChant44",
//   workLocation: "Europe",
// };

/*
Challenge:
1. Make it so that if the jobHunter object does not have 
 a name property, the username is used instead.
*/

// Complete this line of code 👇
// const jobHunterName = jobHunter.name || jobHunter.username;

// console.log(`Hey ${jobHunterName}!`);


//* Short-circuiting with AND (&&)
// const user = {
//   userName: 'Tom',
//   role: 'admin',
// }

// user.role === 'admin' && console.log('Dashboard Displayed')

//* Short-circuiting with AND (&&) Challenge
// const accountBalanceUsd = '$45,000,000,000 🤑💰'
// const swissBankPassCodesArr = [1234,5678,9876,3434]

// function authenticationCheck(passCode){
//   swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd);
// /*
// Challenge:
// 1. If the passcode passed into authenticationCheck 
//    exists in swissBankPassCodesArr, authenticationCheck 
//    should log out accountBalanceUsd. 
   
//    If the passcode does not exist in swissBankPassCodesArr 
//    then authenticationCheck need not do anything.
   
// ⚠️ Make sure you short-circuit with &&
// */
// }

// authenticationCheck(3434);

//*  Nullish Coalescing operator ??
// function fetchUserBalance() {
    
//   // This is where we would make call to bank's database
  
//   const userBalance = 0; 
//   return userBalance;
// }

// /*
// Challenge:
//   1. Swap the logical OR operator for a Nullish Coalescing operator.
//   Ignore any red lines you see in the editor!
// */

// const balance = fetchUserBalance();
// const displayBalance = balance ?? "currently not available";

// console.log(`Your balance is ${displayBalance}.`);


//*  Optional Chaining ?.
// const library = {
//   sections: {
//       fiction: {
//           genres: {
//               fantasy: [
//                   { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
//                   { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
//               ],
//               scienceFiction: [
//                   { title: "Dune", author: "Frank Herbert", year: 1965 },
//                   { title: "Neuromancer", author: "William Gibson", year: 1984 }
//               ]
//           }
//       }
//   }
// }

/*
Challenge:
  1. Use the logical AND operator to log The Hobit object. 
     Notice how undefined is returned if you break the chain. 
*/

// console.log(library && library.sections && library.sections.fiction && library.sections.fiction.genres && library.sections.fiction.genres.fantasy[0]);

/*
Challenge:
    1. Apply optional chaining along the line to 
       log out The Hobit's year. 
*/
// console.log(library?.sections?.fiction?.genres?.fantasy[0]?.year);

// console.log(library.sections.fiction.genres.fantasy[0].year)


//* Super Challenge Library Software 
/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/

const collection = []

function addBookToCollection(title, author, yearPublished, libraryData) {
    // Explicitly check for title
    // if (title === undefined || title === null || title === '') {
    //     title = 'Unknown Title'
    // }
    title = title || 'Unknown Title';

    // Explicitly check for author
    // if (author === undefined || author === null || author === '') {
    //     author = 'Unknown Author'
    // }
    author = author ||'Unknown Author';

    // Explicitly check if yearPublished is undefined or null
    // if (yearPublished === undefined || yearPublished === null) {
    //     yearPublished = 'Not Specified'
    // }
    yearPublished ??= 'Not Specified';

    // Explicitly check for availability at main library
    let availability = 'Not Available' // Default value
    // if (libraryData) {
    //     if (libraryData.locations) {
    //         if (libraryData.locations.mainLibrary) {
    //             availability = 'Available'
    //         }
    //     }
    // }

    libraryData?.locations?.mainLibrary && (availability = 'Available');

    // Push the book object to 'collection'
    collection.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
        availability: availability
    })
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, { locations: { mainLibrary: true}})
addBookToCollection('', 'William Shakespeare', null, null, )
addBookToCollection('House of Giants', 'Gemma Small', '', null, {locations: { mainLibrary: null}})
console.log(collection) // House of Giants is not yet published!!




