//* Creating Objects Explainer
// const product = {
//   productName: 'Coffee Machine'
// }

// 3 ways:
// factory functions
// Constructor functions
// Classes

// syntactic sugar

//* Factory Functions
// function gamer(name, score) {
//   return {
//       name: name,
//       score: score
//   }
// }

// const alice = gamer('Alice', 10)
// console.log(alice);

// Object Property Value Shorthand
// function gamer(name, score) {
//   return {
//       name,
//       score,
//       incrementScore() {
//         this.score++
//     }
//   }
// }

// const alice = gamer('Alice', 10)
// const dave = gamer('Dave', 3)
// const ash = gamer('Ash', 9)

// alice.incrementScore()
// dave.incrementScore()
// ash.incrementScore()
// dave.incrementScore()
// ash.incrementScore()
// console.log(alice)
// console.log(dave)
// console.log(ash)


// Pros and Cons
// Pros: The syntax is familiar, The syntax is easy to read
// Cons: Less performant, No inheritance

//*  Constructor Functions
// function Gamer(name, score) {
//   this.name = name
//   this.score = score
//   this.incrementScore = function() {
//     this.score++
// }
// }

// const dave = new Gamer('Dave', 0);
// const sarah = new Gamer('Sarah', 2);
// console.log(dave);
// dave.incrementScore();
// console.log(dave);
// console.log(sarah);
// sarah.incrementScore();
// console.log(sarah);

//* Constructor Function Challenge
/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialize it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/
 
// function Character(name){
//   this.name = name
//   this.collectedItemsArr = []
//   this.addItem = function (item){
//     this.collectedItemsArr.push(item);
//     console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`);
//   }
// }

// const marlin = new Character('Marlin');
// marlin.addItem('wand');
// marlin.addItem('map');
// marlin.addItem('potion');

//* Constructor Functions to Classes
// Classes: Templates for objects  
// class Gamer {
//   constructor(name, score) {
//       this.name = name
//       this.score = score
//   }
  
//   incrementScore() {
//       this.score++  
//   }
// }

// const dave = new Gamer('Dave', 0);
// const sarah = new Gamer('Sarah', 0);
// dave.incrementScore();
// console.log(dave);
// console.log(sarah);

//*  Constructor Functions to Classes Challenge
/*
Challenge:
Rebuild this constructor function as a class.
*/
// class Character {
//   constructor(name){
//     this.name = name
//     this.collectedItemsArr = []
//   }

//   addItem(item){
//     this.collectedItemsArr.push(item)
//     console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//   }
// }

// // function Character(name) {
// //   this.name = name
// //   this.collectedItemsArr = []
// //   this.addItem = function (item) {
// //       this.collectedItemsArr.push(item)
// //       console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
// //   }
// // }

// const wizard = new Character('Merlin');
// wizard.addItem('a wand');

//*  .apply() and .call()

// function displayPolitician(currentSituation) {
//   // console.log(this)
//   console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`)
// }

// const politician1 = {
// name: 'Carly Fowler',
// age: 40
// }

// const politician2 = {
// name: 'Dave Bland',
// age: 55
// }

// displayPolitician.apply(politician1, ['In jail for corruption'])
// displayPolitician.call(politician2, 'Resigned due to incompetence')

//* Inheritance Explainer
// Inheritance is the mechanism by which objects inherit properties and methods from other objects.

//? The prototype chain

//? prototype lookup mechanism

//? polymorphism 
// Polymorphism allows methods to have different implementations on different objects. An object can override a method it inherits, adapting it for specific needs.

//* Inheritance with constructor functions

//? call()
// The call method is used to call a function with a specified 'this' value and arguments. 

// function Event(name, location, date) {
//    this.name = name
//    this.location = location
//    this.date = date
//    this.getDetails = function () {
//        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
//    }
// }

// function Concert(name, location, date, headliner) {
//    Event.call(this, name, location, date)
//    this.headliner = headliner
// }

// Concert.prototype = Object.create(Event.prototype);
// Concert.prototype.constructor = Concert;

// const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
// console.log(concert.getDetails())

//* Polymorphism with constructor functions

//? Overriding inherited Methods on Constructor Functions

// function Event(name, location, date) {
//    this.name = name
//    this.location = location
//    this.date = date
//    // this.getDetails = function() {
//    //     return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
//    // }
// } 



/*
Challenge:
   1. Remove getDetails from the Event constructor's body 
      and add it to the Event constructor’s prototype. 
*/

// Event.prototype.getDetails = function() {
//    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
// }

// Event.prototype.cancelEvent = function() {
//    return 'Event Cancelled';
// }

// function Concert(name, location, date, headliner) {
//    Event.call(this, name, location, date)
//    this.headliner = headliner
//    // this.getDetails = function() {
       
//    // }
// }

// Concert.prototype = Object.create(Event.prototype)
// Concert.prototype.constructor = Concert

// Concert.prototype.getDetails = function() {
//    const eventBasics = Event.prototype.getDetails.call(this)
//    return `${eventBasics} Headliner: ${this.headliner}`
// }


// const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
// const concert2 = new Concert("Concert Two", "Highlands Park", "2024-08-08", "Dave Notes")
// const concert3 = new Concert("Concert Three", "Highlands Park", "2024-08-08", "Dave Notes")
// console.log(concert.getDetails())
// console.log(concert2.getDetails())
// console.log(concert3.getDetails())


//? Inheritance with constructor functions Challenge
// function Event(name, location, date) {
//    this.name = name
//    this.location = location
//    this.date = date
// }

// Event.prototype.getDetails = function() {
//    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
// }

// /*
// Challenge:
//    1. Set up a constructor for 'Conference' which 
//       should take in 'keynoteSpeaker' as a parameter. 
//    2. 'Conference' should inherit from 'Event'.
//    3. 'Conference' should have its own method 'getDetails'
//       which calls Event's getDetails method and returns a string 
//       with name, location, date, and keynote speaker.  
//    4. When you set up an instance of Conference and call 
//       getDetails you should log out: 
//       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
//       📝 The new method should be on the prototype. 
// */

// function Conference(name, location, date, keynoteSpeaker){
//    Event.call(this, name, location, date);
//    this.keynoteSpeaker = keynoteSpeaker;
// }

// Conference.prototype = Object.create(Event.prototype);
// Conference.prototype.constructor = Conference;

// Conference.prototype.getDetails = function() {
//    const eventBasics = Event.prototype.getDetails.call(this);

//    return `${eventBasics} Keynote Speaker: ${this.keynoteSpeaker}`;
// }

// const conference = new Conference("10 Nights of JS", "Scrimba HQ", "2025-09-29", "Ashley Smith")
// console.log(conference.getDetails())


//* Inheritance with classes

//? Inheritance with class syntax

//? The 'super' keyword
// 1. Access properties on the superclass's prototype
// 2. Invoke the  the superclass's constructor

// class Event {
//    constructor(name, location, date) {
//        this.name = name
//        this.location = location
//        this.date = date
//    }

//    getDetails() {
//        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
//    }
// }

// class Concert extends Event {
//    constructor(name, location, date, headliner) {
//        super(name, location, date)
//        this.headliner = headliner
//    }
   
//    getDetails() {
//        const eventBasics = super.getDetails()
//        return `${eventBasics} Headliner: ${this.headliner}`
//    }
// }

// const concert = new Concert("Summer Beats", "City Stadium", "2023-07-15", "The Electrons")
// console.log(concert.getDetails())

//* Inheritance with classes Challenge 
// class Event {
//    constructor(name, location, date) {
//        this.name = name
//        this.location = location
//        this.date = date
//    }

//    getDetails() {
//        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
//    }
// }

/*
Challenge:
   1. Set up a class 'TennisMatch' which 
      should take in 'player1' and 'player2' as parameters. 
   2. 'TennisMatch' should inherit properties and methods 
      from 'Event'.
   3. 'TennisMatch' should have its own method 'getDetails'
      which calls Event's getDetails method to get the 
      basic details of the event. It should return this string:
      ${eventBasics} Match: ${this.player1} vs ${this.player2}
   4. Uncomment my code below to create a new instance of TennisMatch
      and call the getDetails method. 
*/

// class TennisMatch extends Event{
//    constructor(name, location, date, player1, player2){
//       super(name, location, date);
//       this.player1 = player1;
//       this.player2 = player2;
//    }

//    getDetails(){
//       const eventBasics = super.getDetails();
      
//       return `${eventBasics} Match: ${this.player1} vs ${this.player2}`
//    }
// }

// const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15", "J Bloggs", "B Doe");
// console.log(tennisMatch.getDetails());

//* Static methods and properties
// class Employee {
//    static employeeCount = 0
//    constructor(name) {
//        this.name = name
//        Employee.employeeCount++
//    }
   
//    static getEmployeeCount() {
//        return Employee.employeeCount
//    }
// }

// const employee1 = new Employee("Alice")
// const employee2 = new Employee("Bob")
// const employee3 = new Employee("Smith")
// console.log(Employee.getEmployeeCount())

//* Static methods Challenge
// class Employee {
//    constructor(name) {
//        this.name = name
//    }
// /*
// Challenge:
// 1. Set up a static method called getNewIntern. 
//   getNewIntern should return an object with a 'name' property, 
//   a 'role' property which is hard-coded to ‘intern’, and a 
//   'startDate' property which should be the time of code execution. 
//   (🤔 How can you use JS to get the time right now?)
// */
//    static getNewIntern(name) {
//       return {
//          name,
//          'role' : 'intern',
//          'startDate' : new Date().toDateString()
//       }
//    }
// }

// console.log(Employee.getNewIntern('Dave'))


//* Private Fields
// class Holiday {
//    #destination
//    constructor(destination, price) {
//       //  this._destination = destination
//       this.#destination = destination
//        this.price = price
//    }
// }

// const safari = new Holiday('Kenya', 1000)
// safari.#destination = 'Tanzania'
// console.log(safari)

//* Getters and Setters
// class Holiday {
//    #destination
//    constructor(destination, price) {
//        this.#destination = destination
//        this.price = price
//    }

//    get destination() {
//        return this.#destination
//    }

//    set destination(newDestination) {
//        if (typeof newDestination !== 'string' || newDestination.length <= 0){
//            throw new Error('Destination not valid')
//        }
//        this.#destination = newDestination
//    }
// }

// const safari = new Holiday('Kenya', 1000)
// safari.destination = 'Kashi'
// console.log(safari.destination)

//* Getters and Setters Challenge
// class Holiday {    
//    /*
//    Challenge:
//        1. Make 'price' a private field.
//        2. Create a getter for price which appends a $ sign 
//           to the front and displays it to a max of 2 decimal 
//           places. 
//        3. Create a setter for price which updates price with a 
//           new price.
//        4. Test! 
//    */
//        #destination
//        #price
//        constructor(destination, price) {
//            this.#destination = destination
//            this.#price = price
//        }
   
//        get destination() {
//            return this.#destination
//        }
   
//        set destination(newDestination) {
//            if (typeof newDestination !== 'string' || newDestination.length <= 0){
//                throw new Error('Destination not valid')
//            }
//            this.#destination = newDestination
//        }

//        get price(){
//          return `$${this.#price.toFixed(2)}`;
//        }

//        set price(newPrice){
//          this.#price = newPrice;
//        }
//    }
   
//    const safari = new Holiday('Kenya', 1000)
//    // safari.price = 23.233
//    console.log(safari.price)

//* Super Challenge: Game Characters
class Character {
   /* Base Character Class
   Your task is to design and implement a Character class with properties 'name' (a string), 'health' (a number), and isAlive (a boolean). This class will serve as a foundation for a simple game or simulation where characters can take damage and possibly "die" if their health reaches zero.

   Class Structure:
   Your class should have:
   - a name property that is set through the constructor.
   - a private health property initialized to 100.
   - a static property count to track how many characters have been created.
   
   Static Methods to add:
   - incrementCount() to increase the count each time a new character is instantiated.
   - getCount() to return the current number of characters.
   
   Health Management:
   - Include a getter and a setter for health. The setter should ensure that the health value does not fall below zero.
   
   Damage Functionality:
   - Implement a method 'takeDamage' which decreases the health value by a specified amount. 
   
   Alive Status:
   - Implement a getter for 'isAlive' that returns a boolean value. A character is considered alive if their health is greater than zero.
   
   Status Report:
   - Implement a method getStatus() that returns a string stating the character's name, 
     current health, and whether they are alive or dead.
   */
      static count = 0
      #health = 100
      constructor(name){
            this.name = name
            Character.incrementCount()
      }

      static incrementCount(){
            Character.count++
      }

      static getCount(){
         return Character.count
      }

      get health(){
         return this.#health
      }

      set health(value){
         this.#health =  Math.max(0, value)
      }

      takeDamage(amount){
         this.health -= amount
      }

      get isAlive(){
         return this.#health > 0
      }

      getStatus() {
         return `${this.name} has ${this.health} health and is ${this.isAlive ? 'alive' : 'dead'}.`
      }

}
   
class Hero extends Character{
   /* The Hero class
   The Hero class should inherit from Character. This new class should include additional functionality to manage an inventory of items that the hero can collect during gameplay.
   
   Constructor:
   - The constructor for the Hero class should initialize the hero with a name and an empty inventory for items.
   
   Inventory Management:
   - Implement a method pickUpItem that allows the hero to add items to their inventory.
   - Items should simply be added to an array.
   
   Item Retrieval:
   - Implement a method getItems that returns a string listing all the items in the hero's inventory.
   */
   constructor(name){
      super(name)
      this.items = []
   }

   pickUpItem(item){
      this.items.push(item)
   }

   getItems() {
      return `${this.name} has the following items: ${this.items.join(", ")}`
   }
    
}
   
class Villain extends Character {
   /* The Villain class
   The Villain class should inherit from Character. This new class should include additional functionality to allow the villain to issue a threat.
   
   Constructor:
   - The constructor for the Villain class should initialize the villain with a name and a threat.
   
   Threat
   - The getThreat method should simply return the threat.
   */
   constructor(name, threat) {
      super(name)
      this.threat = threat
   }
  
   getThreat() {
         return this.threat
   }
}
   
   // Example Usage
   const merlin = new Hero("Merlin")
   const medea = new Hero("Medea")
   const troll = new Villain("Troll", 'I will destroy your soul!')
   
   console.log(troll.getThreat()) // I will destroy your soul!
   merlin.pickUpItem("Sword")
   merlin.takeDamage(15)
   medea.takeDamage(5)
   medea.pickUpItem("Shield")
   console.log(merlin.getItems()) // Merlin has the following items: Sword
   console.log(medea.getItems()) // Medea has the following items: Shield
   troll.takeDamage(101)
   console.log(troll.getStatus()) //Troll has 0 health and is dead.
   console.log(medea.getStatus()) // Medea has 95 health and is alive.`
   console.log(merlin.getStatus()) // Merlin has 85 health and is alive.
   console.log(`Total characters created: ${Character.getCount()} `) // Total characters created: 3