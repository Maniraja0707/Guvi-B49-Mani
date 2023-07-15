<<<<<<< HEAD
//Write a code to get an integer N and print the digits of the integer.


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

let N= userInput[0];
let value = [];
for (i=0; i<=N.length-1; i++){
  value += N[i]+(" ");
}
console.log(value.trim());

  //end-here
=======
//Write a code to get an integer N and print the digits of the integer.


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

let N= userInput[0];
let value = [];
for (i=0; i<=N.length-1; i++){
  value += N[i]+(" ");
}
console.log(value.trim());

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});