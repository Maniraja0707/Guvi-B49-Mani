//You are provided with two numbers. Find and print the smaller number.

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
let spl = userInput[0].split(" ");

let nums =spl.map(Number);
//console.log(nums);
let min = Math.min(...nums);

  console.log(min);

  //end-here
});