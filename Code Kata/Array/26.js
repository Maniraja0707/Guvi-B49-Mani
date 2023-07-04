//Given a number N and an array of N integers, find the sum of all the negative numbers in the array.

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
let arr = userInput[1].split(" ").map(Number);

let sum = 0;
//console.log(arr);
//console.log(arr.length);
for (i=0; i<=arr.length-1; i++){
  if (arr[i]<=0){
  sum += arr[i];
  }
}
console.log(sum);


  //end-here
});