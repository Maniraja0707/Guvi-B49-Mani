//Write a code get an integer number as input and print the sum of the digits.



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
let sum = 0;
//.log(N);

for (i=0; i<=N.length-1; i++){
  sum +=Number(N[i]);
  }
console.log(sum);

  //end-here
});