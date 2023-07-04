//You are provided with the radius of a circle "A". Find the length of its circumference.

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
let radius = userInput[0];
// circumference =2*pi r
let circumference =2 * Math.PI * radius;
  console.log(circumference.toFixed(2));

  //end-here
});