<<<<<<< HEAD
//Write a code to get the input in the given format and print the output in the given format

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
const str =userInput[0].split("").join(" ");
console.log(str)

  //end-here
=======
//Write a code to get the input in the given format and print the output in the given format

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
const str =userInput[0].split("").join(" ");
console.log(str)

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});