//? What is an API?
//* An API is any tool that helps connect your program with someone else's program.
//? What does API stand for?
//* Application Programming Interface
//? How would you describe an API in your own words?
//* A tool that allows your code to talk with (use the goodness from) someone else's code. (web APIs, 3rd-party packages, etc.)
//? Can you think of an example of an API you've used?
//* BoredAPI - https://www.boredapi.com/ (getting data from a server)
//* Local Storage (localStorage)

//? API Examples
//* Getting data from a server
// The server hosts "an API" - exposed "endpoints" we can access for getting data from the server.
// Note that the server doesn't give us access to everything, just the things they want us to have
//* Pre-written code that does cool stuff
// DOM API (.getElementById, e.g.)
// Array methods API (.filter, .map, e.g.)
//  3rd-party packages
// +many more!
//? black box?

//* Clients & Servers
//? What is a Client?
//* Any device that connects to the internet to get data from somewhere (makes a "request")
// Laptop, phone, tablet, any "smart" device (watch, doorbell, robot, vacuum, even a server!)
//? What is a Server?
//*  Basically just a computer. Accepts requests from client asking for something, then responds to the client with that thing (e.g. an HTML page, am image or file, or just plain data)
//? What are some examples of "clients" you've used today?
//* laptop, Smart phone
//? How would you explain what a "server" is to a 5 year-old?
//* A computer that send my own computer things when I ask it to.
//? In what way do clients and servers interact with each other?
//* Client sends a request to a server, and the server sends back a response.

//* Requests & Responses
//? What is a Request?
//* When a device asks for a "resource" (data, image, HTML page, authentication token, etc.)
//* Requires a connection to the internet somehow
//? What is a Response?
//* The reply to the request
//* Could contain the resource (HTML, JSON data, etc.) asked for the client.
//* Could contain a response saying the client isn't authorized to receive the resource
//? What are 3 things your computer (client) might request from a server?
//* JSON array of suggested videos
//* video stream
//* HTML page
//? What is the main job of a server?
//* Receive a request from a client and return a response.
//? Self study: what would a 3-digit server response code be if the server experiences an internal server error?
//* 500 Internal server error

//* JSON Review
//?

//* URLs and Endpoints
//? The makeup of a URL
//* The base URL
//* The endpoint

//*  Fetching with .then()
//? fetch().then()
// example:
// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data));

// Challenge
/*
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
*/

// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => console.log(data));

//* Fetching with async/await
async function getDogImage() {
  const response = await fetch(
    "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
  );
  const data = await response.json();
  const imageElement = document.createElement("img");
  imageElement.src = data.message;
  imageElement.alt = "random dog picture";
  document.getElementById("img-container").appendChild(imageElement);
  // console.log(data)
}

// Fetching with async/await challenge
/*
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
*/

async function getActivity() {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await response.json();
  console.log(data);
}
// getActivity();

//* Promises
// pending: The promise has yet to be completed
// fulfilled/Resolved: The promise was completed as promised
// rejected: The promise was not completed as promised

//* Handling Rejected Promises
// fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => {
//       console.log(err)
//       // update the DOM to warn the user
//       // access an alternative API
//   })
//   .finally(()=> console.log('The operation completed.'))

//* try/catch
// Catches exceptions and errors that occur during the execution of the code,including network errors and other unexpected issues.
// Challenge:
// 1. Convert the above code to use async/await, handle errors with “try/catch” blocks, and add a “finally” block.
async function errorHandling() {
  try {
    // the code we want to try to execute
    const response = await fetch(
      "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // the code to execute on an error
    console.log(err);
  } finally {
    // code to execute at the end of the operation
    console.log("The operation completed.");
  }
}

// errorHandling();

//* response.ok
// Checks the success of the HTP response status, which might not throw an error but still indicates a failure
//* Status code Basics
// 200 - 299 = successful response: TRUE
// 404 = not found: FALSE
// 500 = server error: FALSE
async function tryCatchErrorHandling() {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/dog.ceo/api/breeds/images/random"
    );
    if (!response.ok) {
      throw new Error("There was a problem with the API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    // update the DOM to warn the user
    // access an alternative API
  } finally {
    console.log("The operation completed.");
  }
}

// tryCatchErrorHandling();

//* Taking APIs to the next level
/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/

async function fetchRequest() {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/jsonplaceholder/posts"
    );
    if (!response.ok) {
      throw new Error("There was a problem with the API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("The operation completed.");
  }
}

// fetchRequest();

//* Methods
// GET - getting data
// POST - posting data
// PUT - updating data
// DELETE - deleting data
// PATCH and OPTIONS

//*  API requests: the body
/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the 
   fetch request. I want you to create a new post 
   with the title “Holiday Nightmares” and the body 
   “When I was kidnapped in Scotland…” 
    
   In the console, you should see and object with an 
   ID, for example: {id: 101}
*/

async function postMethod() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Holiday Nightmares",
        body: "When I was kidnapped in Scotland…",
        usrId: 101,
      }),
    });
    if (!response.ok) {
      throw new Error("There was a problem with the API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("The operation completed.");
  }
}

// postMethod()

//* Headers contain
// Extra (meta) info about the request
// Authentication
// The type of data being sent
// This is not an exhaustive list!

/*
Challenge:
1. Add a headers object, setting the "Content-Type" to application/json.
*/
async function headerContent() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Holiday Nightmares",
        body: "When I was kidnapped in Scotland…",
        usrId: 101,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("There was a problem with the API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("The operation completed.");
  }
}

// headerContent();

//* The Promise Constructor
const promise = new Promise((reject, resolve) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("operation failed");
  }
});

// promise.then(response => console.log(response))
async function promiseWTC() {
  try {
    const response = await promise;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

// promiseWTC();

//* Working with images asynchronously
const image = document.createElement("img");
image.src = "http://...";

const image2 = new Image();
image2.src = "http://...";

// console.log(image)
// console.log(image2)

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/

image.addEventListener("load", () => console.log("Image has loaded"));
image.addEventListener("error", () => console.log("Image has NOT loaded"));

//* Promise Challenge

function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = "a beautiful scene";
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject("img has NOT loaded"));
  });
  /*
Challenge:
1. Return a new promise. The promise should:
    - create a new image and assign the incoming url 
      to its src attribute. (Use the Image constructor 
      for this!)
    - listen out for a load event. If a load event is 
      detected, the promise should resolve, providing the
      image element.
    - listen out for an “error” event. If an error 
      event is detected, the promise should reject giving 
      the message “img has NOT loaded”.
*/
}

try {
  const results = await preLoadImg(
    "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"
  );
  console.log(results);
  document.getElementById("img-container").appendChild(results);
} catch (error) {
  console.error(error);
}

//* Callback hell
// Callback hell is a situation where multiple async operations are chained together using nested callbacks, which makes the code difficult to read and maintain.

// upload a file
function uploadFile(callback) {
  console.log("Step 1: Uploading file...");
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// process a file
function processFile(callback) {
  console.log("Step 2: Processing file...");
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// notify a user
function notifyUser(callback) {
  console.log("Step 3: Notifying user...");
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
/* 
Challenge:
1. Try to invoke these functions so they run in sequence. 
 The callback function passed to the final function (notifyUser) 
 can just be an anonymous function that logs 'All steps completed!'
*/
uploadFile(() => {
  processFile(() => {
    notifyUser(() => {
      console.log("All steps completed!");
    });
  });
});

// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!

//* Using Promises to escape Callback Hell
function uploadFile() {
  return new Promise((resolve, reject) => {
      console.log('Step 1: Uploading file...')
      setTimeout(() => {
          resolve() // Call the next step after 1 second
      }, 1000)
  })
}

function processFile() {
  return new Promise((resolve, reject) => {
      console.log('Step 2: Processing file...')
      setTimeout(() => {
          resolve() // Call the next step after 1 second
      }, 1000)
  })
}

function notifyUser() {
  return new Promise((resolve, reject) => {
      console.log('Step 3: Notifying user...')
      setTimeout(() => {
          resolve() // Call the next step after 1 second
      }, 1000)
  })
}

/* 
Challenge:
1. Await these promises in order in a try/catch block and 
 when they are done, log 'All steps completed!'.
*/

// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!

try{
  await uploadFile();
  await processFile();
  await notifyUser();
  console.log('All steps completed!');

}catch(err){
  console.log(err);
}


//* Promise.all
function createPromise() {
  return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5
      if (success) {
          resolve("Operation successful!")
      } else {
          reject("Operation failed.")
      }
  })
}

try {
  const promise1 = createPromise()
  const promise2 = createPromise()
  const promise3 = createPromise()
  const result = await Promise.all([promise1, promise2, promise3])
  console.log(result)
} catch(err) {
  console.log(err)
} 


//*  Super challenge: Async Image Load
function getImagePromise(url) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const img = new Image()
          img.src = url
          img.alt = 'scenic image'
          img.addEventListener('load', () => resolve(img))
          img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
      }, 500)
  })
}

const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-cenic3'
]

async function preloadImages(imageUrlsArr) {
  const imgContainer = document.getElementById('img-container')
  const uploadContainer = document.getElementById('upload-container')
  
  const promises = imageUrlsArr.map((url) => getImagePromise(url))
  
  try{
      const results = await Promise.all(promises)
      console.log('All images loaded successfully!')
      uploadContainer.style.display = 'none'
      results.forEach((img) => imgContainer.appendChild(img))
  } catch(err) {
      console.log(err)
  }
/*
Challenge:
1. Create an array of promises using getImagePromise.
2. Save the results of calling all of those promises 
   in one go to a const 'results'.
3. If the promises resolve: 
   - log "All images loaded successfully!".
   - hide 'uploadContainer'
   - iterate over the results and render them to imgContainer.
4. If the promises reject:
   - catch and log the error.
*/
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))


//!debouncing
//! throttling
//! caching 
//!lazy loading  