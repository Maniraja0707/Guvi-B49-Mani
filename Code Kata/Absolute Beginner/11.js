<<<<<<< HEAD
<<<<<<<< HEAD:Code Kata/Absolute Beginner/11.js
//Write a code to get the input and print it 5 times.

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

for (i= 1; i<6; i++){
  console.log(N);
}



  //end-here
========
//You are given with a number "N", find its cube.
=======
//Write a code to get the input and print it 5 times.
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f

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

<<<<<<< HEAD
let N = Number(userInput[0]);
let cube = N*N*N;
console.log(cube);

  //end-here
>>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f:Code Kata/Absolute Beginner/25.js
=======

let N = userInput[0];

for (i= 1; i<6; i++){
  console.log(N);
}



  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});