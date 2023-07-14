//Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
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

let A = userInput[0];
A = A.split('');
let ACount = userInput[0].length;
//console.log(ACount);
let N = ((userInput[0].length)/2);
N = Math.floor(N);
//console.log(N);

  ACount%2 ===0? ((A[(N-1)] = "*") && (A[N] = '*')):(A[N] = '*');

console.log(A.join(''));

  //end-here
});