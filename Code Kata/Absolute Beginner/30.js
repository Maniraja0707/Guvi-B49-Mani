<<<<<<< HEAD
//You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.


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
let a =userInput[0];
let b =userInput[1];
//area = a* b
let area =Number(a)*Number(b);

  console.log(area);

  //end-here
=======
//You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.


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
let a =userInput[0];
let b =userInput[1];
//area = a* b
let area =Number(a)*Number(b);

  console.log(area);

  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});