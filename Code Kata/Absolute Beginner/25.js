//You are given with a number "N", find its cube.

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
let cube = N*N*N;
console.log(cube);

  //end-here
});