<<<<<<< HEAD
//You are given Two Numbers, A and B. If C = A + B. Find C.


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
let a =userInput[0];
let b =userInput[1];
let sum =Number(a)+Number(b);

  console.log(sum);

  //end-here
=======
//You are given Two Numbers, A and B. If C = A + B. Find C.


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
let a =userInput[0];
let b =userInput[1];
let sum =Number(a)+Number(b);

  console.log(sum);

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});