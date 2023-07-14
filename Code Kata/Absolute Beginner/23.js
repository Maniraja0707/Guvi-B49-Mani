//Write a code to get an integer N and print the values from N to 1.

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

let N =Number(userInput[0]);
for (i=N; i>=1; i--) {
  console.log(i);
}

  //end-here
});