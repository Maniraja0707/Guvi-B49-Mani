<<<<<<< HEAD
//Write a code to get the input in the given format and print the output in the given format
=======
<<<<<<<< HEAD:Code Kata/Array/13.js
//Given a string S, print it without using semicolon in your program.

>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

<<<<<<< HEAD
const userInput=[];
=======
const userInput = [];
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

<<<<<<< HEAD
  console.log(userInput[0]);

  //end-here
=======
let A = userInput[0]
console.log(A)

  //end-here
========
//Write a code to get the input in the given format and print the output in the given format

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  console.log(userInput[0]);

  //end-here
>>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f:Code Kata/Input Output/02.js
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});