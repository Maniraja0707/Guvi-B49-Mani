//Let "A" be a year, write a program to check whether this year is a leap year or not.

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
let year = userInput[0];
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
let result = isLeapYear ? 'Y' : 'N';
console.log(result);

  //end-here
});