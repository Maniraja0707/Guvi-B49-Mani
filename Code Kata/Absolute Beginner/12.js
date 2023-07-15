<<<<<<< HEAD
//Let "A"  be a string. Remove all the whitespaces and find it's length.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let A = userInput[0];
console.log(A.split(" ").join('').length);

  //end-here
=======
//Let "A"  be a string. Remove all the whitespaces and find it's length.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let A = userInput[0];
console.log(A.split(" ").join('').length);

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});