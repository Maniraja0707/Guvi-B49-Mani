//Write a code to get an integer N and print the even values from 1 till N in a separate line.

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

let N = userInput[0];

//console.log(N);

for (i=2; i<=N; i=i+2) {
  console.log(i);
}


  //end-here
});