//You are given the coefficients of a quadratic equation in order A, B & C.

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

let array = userInput[0].split(' ');

//console.log(array);

let a = Number(array[0]);
let b = Number(array[1]);
let c = Number(array[2]);

let root1 = (-b + ((b**2)-(4*a*c)) **0.5) / ( 2 * a);
let root2 = (-b - ((b**2)-(4*a*c)) **0.5) / ( 2 * a);

console.log(root1.toFixed(2));
console.log(root2.toFixed(2));

  //end-here
});