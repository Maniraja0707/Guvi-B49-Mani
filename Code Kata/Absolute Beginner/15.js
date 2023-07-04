//You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 

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
let C = userInput[0];
let F = C * (9/5)+32;
console.log(F.toFixed(2));

  //end-here
});