//Write a code to get an integer N and print the sum of  values from 1 to N.


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
let sum = 0;
//console.log(N);

for (i=1; i<=N; i++){
sum += i;
  }
console.log(sum);

  //end-here
});