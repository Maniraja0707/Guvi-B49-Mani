//You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

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

let A = (userInput[0]).split(' ');
//console.log(A);

let P = A[0];
let T = A[2];
let R = A[1];

let SI =(P * T * R) / 100
console.log(SI.toFixed(2));

  //end-here
});