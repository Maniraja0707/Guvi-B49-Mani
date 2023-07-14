//You are given three numbers A, B & C. Print the largest amongst these three numbers.

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
let a = userInput[0];
let b = userInput[1];
let c = userInput[2];
  console.log(Math.max(a,b,c));

  //end-here
});