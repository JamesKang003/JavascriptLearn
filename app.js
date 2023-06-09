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

//step 5)
// const fs = require("fs");
// // fs.mkdir("tutorial", (err) => {
// //   if (err) console.log(err);
// //   else {
// //     fs.writeFile("./tutorial/example.txt", "123", (err) => {
// //       if (err) console.log(err);
// //       else {
// //         console.log("created file successfully");
// //       }
// //     });
// //   }
// // });

// // fs.unlink("./tutorial/example.txt", (err) => {
// //   if (err) {
// //     console.log("deleted file");
// //   } else {
// //     console.log("deleted file");
// //     fs.rmdir("tutorial", (err) => {
// //       if (err) console.log(err);
// //       else {
// //         console.log("file deleted");
// //       }
// //     });
// //   }
// // });

// fs.readdir("example", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     for (let file of files) {
//       fs.unlink(`./example/${file}`, (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(`deleted: ${file}`);
//         }
//       });
//     }
//   }
// });

//step 6
// const fs = require("fs");
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt");
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// step 7 completed
// const fs = require("fs");
// const zlib = require("zlib");
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream("./example2.txt.gz");
// const writeStream = fs.createWriteStream("uc.txt");
// readStream.pipe(gunzip).pipe(writeStream);

// step8
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.write("hello world");
//     res.end();
//   } else {
//     res.write("using some other domain");
//     res.end();
//   }
// });

// server.listen("3000");

//step 9
// const http = require("http");
// const fs = require("fs");
// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/아이네.png");
//     res.writeHead(200, { "Content-type": "image/png" });
//     readStream.pipe(res);
//   })
//   .listen(3000);

// step 10
// const lodash = require("lodash");
// let example = lodash.fill([1, 2, 3, 4, 5], "banana", 1, 4);
// console.log(example);

//json
// step 11
// {
//   "name": "nodejs_tutorial",
//   "version": "1.0.0",
//   "description": "tutorial step 10",
//   "main": "app.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/JamesKang003/JavascriptLearn.git"
//   },
//   "author": "James Kang",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/JamesKang003/JavascriptLearn/issues"
//   },
//   "homepage": "https://github.com/JamesKang003/JavascriptLearn#readme",
//   "dependencies": {
//     "lodash": "^4.17.21" //major.minor.patch
//^: 4.x.x
//~: 4.17.x
//4.17.21
//   }
// }

// step 13
// const express = require("express");
// const path = require("path");
// const app = express();
// app.use("/public", express.static(path.join(__dirname, "static")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "static", "아이네.png"));
// });

// app.get("/example", (req, res) => {
//   res.send("hitting example route");
// });

// app.get("/example/:name/:age", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.params.name + " : " + req.params.age);
// });

// app.listen(3000);
