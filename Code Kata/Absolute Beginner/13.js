//Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

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


let A = userInput[0].split(' ').map(Number);
//console.log(A.length)

let B = (Number(A[0]));
let C = (Number(A[1]));

//console.log(B);
//console.log(C);


for (i= 1; i<C+1; i++){
  console.log(B);
}

  //end-here
});