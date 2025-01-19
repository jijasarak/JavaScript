//* APIs and Async JS

//* Why APIs?
// Access real data
// Build more interesting apps
// Prepare to learn fullstack

//? What is an API?
// AN API is any tool that helps connect your program with someone else's program.

//* What does API stand for?
// Application Programming Interface

//* API Examples
// Getting data from a server
  // The server hosts "An API" - exposed "endpoints"
  // Ote that the server doesn't give us access to everything, just the things they want us to have
// Pre-written code that does cool stuff
  // DOM API (.getElementById, e.g.)
  // Array methods API (.filter, .map, e.g.)
  // 3rd-party packages
  // +Many more!

// 1) What does API stand for?
// Application Programming Interface

// 2) How would you describe an API in your own words?
// A tool that allows your code to talk with (use the goodness from)
// someone else's code. (Web APIs, 3rd-party package, etc.)

// 3) Can you think of an example of an API you've used?
  //  BoredAPI - https://www.boredapi.com/ (getting data from a server)
  //  Local Storage (localStorage)


//? Clients & Servers 
//* What is a client?
//  Any device that connects to the internet to get data from somewhere (makes a "request")
  // Laptop, phone, tablet, any "smart" device (watch, doorbell, robot vacuum, even a server!)
  
//*  What is a Server?
// Basically just a computer. Accepts requests from clients asking for something, then responds to the client with that thing (e.g. an HTML page, an image or file, or just plain data)

// 1) What are some examples of "clients" you've used today?
// Laptop
// Smart Phone

// 2) How would you explain what a "server" is to a 5 year-old?
// A computer that send my own computer things when I ask it to.

// 3) In what way do clients and servers interact with each other?
// Client sends a request to a server, and the server sends back a response.

//? Requests & Responses 

//* What is a Request?
//  When a device asks for a "resource" (data, images, HTML page, authentication token etc.)
// Requires a connection to the internet somehow

//* What is a Response?
// The reply to the request
// Could contain the resource (HTML, JSON data, etc.) asked for by the client
// Could contain a response saying he client isn't authorized to receive the resource


// 1) What are 3 things your computer (client) might request from a server?
// JSON array of suggested videos
// Video stream
// HTML page

// 2) What is the main job of a server?
// Receive a request from a client and return a response.

// 3) Self study: what would the 3-digit server response code 
// be if the server experiences an internal server error?
// 500 Internal Server Error


//? JSON Review
// https://jsonlint.com/ 


//? First fetch
/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => console.log(data))

//? .then() and Asynchronous JavaScript 

//? Dog API Fetch and DOM Practice 
/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/ 

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data =>{
//     const ele = document.createElement('img')
    // ele.src = data.message;
    // document.querySelector('#image-container').appendChild(ele);
//   })

//? Fetch idea from Bored API 
/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

fetch("https://apis.scrimba.com/bored/api/activity") 
  .then(response => response.json())
  .then(data => {
    console.log(data.activity);
  })