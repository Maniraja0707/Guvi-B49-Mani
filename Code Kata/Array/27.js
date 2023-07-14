//You are given two arrays of equal length. Your task is to merge the two arrays then sort them too and then find the sum of two middlemost elements.

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

let A = userInput[1].split(" ").map(Number);
let B = userInput[2].split(" ").map(Number);

let arr = [];
for (i= 0; i<A.length; i++){
  arr.push(A[i]);
}

for (i= 0; i<B.length; i++){
  arr.push(B[i]);
}

arr = arr.sort((a,b)=>a-b);
let l = arr.length;

let N2 = l/2;
let N1 = (l/2)-1;

let sum = arr[N1]+arr[N2];
console.log(sum);



  //end-here
});