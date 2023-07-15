<<<<<<< HEAD
<<<<<<<< HEAD:Code Kata/Array/13.js
//Given a string S, print it without using semicolon in your program.

=======
<<<<<<<< HEAD:Code Kata/Absolute Beginner/25.js
//You are given with a number "N", find its cube.
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
let A = userInput[0]
console.log(A)

  //end-here
========
//Write a code to get the input in the given format and print the output in the given format
=======
let N = Number(userInput[0]);
let cube = N*N*N;
console.log(cube);

  //end-here
========
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
>>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f:Code Kata/Input Output/02.js
=======
let A = userInput[0]
console.log(A)

  //end-here
>>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f:Code Kata/Array/13.js
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});