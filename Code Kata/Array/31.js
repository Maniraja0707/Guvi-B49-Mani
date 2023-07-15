<<<<<<< HEAD
//Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.


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
//odd number

let N = userInput[0]; // example input
//console.log(N);
let arr = Array.from(N);
//console.log(arr);


 let Odd = arr.filter(x => parseInt(x) % 2 == 1);
 

 if (Odd.length === 0) {
     Odd.push(-1);
 }

//console.log(Odd);
console.log(Odd.join(' '));



  //end-here
=======
//Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.


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
//odd number

let N = userInput[0]; // example input
//console.log(N);
let arr = Array.from(N);
//console.log(arr);


 let Odd = arr.filter(x => parseInt(x) % 2 == 1);
 

 if (Odd.length === 0) {
     Odd.push(-1);
 }

//console.log(Odd);
console.log(Odd.join(' '));



  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});