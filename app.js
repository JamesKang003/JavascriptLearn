/**
 * step 1)
 * const tutorial = require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObj());
 */

/**
 * step 2)
 * 
 * const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  get myName() {
    return this.name;
  }
}

let pedro = new Person("Pedro");
let christina = new Person("Christina");
christina.on("name", () => {
  console.log("my name is " + christina.myName);
});
pedro.on("name", () => {
  console.log("my name is " + pedro.myName);
});

pedro.emit("name");
christina.emit("name");
 */

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

r1.question(`what is ${num1} + ${num2}?`, (userInput) => {
  console.log(userInput);
});
