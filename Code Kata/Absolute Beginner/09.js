<<<<<<< HEAD
//You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

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
let N = Number(userInput[0]);

if (N <= 0) {
    console.log("0");
}  else {
    console.log(Math.pow(N,2));
}
  //end-here
=======
//You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

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
let N = Number(userInput[0]);

if (N <= 0) {
    console.log("0");
}  else {
    console.log(Math.pow(N,2));
}
  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});