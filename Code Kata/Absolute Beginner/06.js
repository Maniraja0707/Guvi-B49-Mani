<<<<<<< HEAD
//You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

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

let B = A * 1000 //Kilometer to meter

let C = A * 100000 // Kilometer to centimeter

console.log(B);
console.log(C);

  //end-here
=======
//You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

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

let B = A * 1000 //Kilometer to meter

let C = A * 100000 // Kilometer to centimeter

console.log(B);
console.log(C);

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});