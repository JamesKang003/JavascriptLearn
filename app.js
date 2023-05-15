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

/**
 * Step 3) 
 * const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

r1.question(`what is ${num1} + ${num2}? \n`, (userInput) => {
  if (userInput.trim() == answer) {
    r1.close();
  } else {
    r1.setPrompt("Incorrect response please try again\n");
    r1.prompt();
    r1.on("line", (userInput) => {
      if (userInput.trim() != answer) {
        r1.setPrompt(`Your answer of ${userInput} is incorrect.`);
        r1.prompt();
      } else {
        r1.close();
      }
    });
  }
});
r1.on("close", () => {
  console.log("correct answer");
});
 * 
 */

// //step 4)
// const fs = require("fs");
// // //create a file
// fs.writeFile("example.txt", "this is an example", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("file created successfully");
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) console.log(err);
//       else console.log(file);
//     });
//   }
// });

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully renamed");
// });

// fs.appendFile("example2.txt", "some data being appended", (err) => {
//   if (err) console.log(err);
//   else console.log("successfully appended data to file");
// });

// fs.unlink("example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("delete success");
// });
