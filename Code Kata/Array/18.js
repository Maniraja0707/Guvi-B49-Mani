<<<<<<< HEAD
//You are a passport issuer, but due to some problems in the system, there are redundant  passport numbers. Your task is to delete all the duplicate passport numbers. You are given a list of passport numbers.

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
  
let A = userInput[1].split(" ");
//console.log(A);
let uniqueA = A.filter((value, index) => A.indexOf(value) === index);
console.log(uniqueA.join(" ").trim());

  //end-here
=======
//You are a passport issuer, but due to some problems in the system, there are redundant  passport numbers. Your task is to delete all the duplicate passport numbers. You are given a list of passport numbers.

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
  
let A = userInput[1].split(" ");
//console.log(A);
let uniqueA = A.filter((value, index) => A.indexOf(value) === index);
console.log(uniqueA.join(" ").trim());

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});