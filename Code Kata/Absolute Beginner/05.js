<<<<<<< HEAD
//You will be provided with a number. Print the number of days in the month corresponding to that number.

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
let month = Number(userInput[0]);

if (month < 1 || month > 12) {
    console.log("Error");
} else if (month === 2) {
    console.log(28);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30);
} else {
    console.log(31);
}
  //end-here
=======
//You will be provided with a number. Print the number of days in the month corresponding to that number.

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
let month = Number(userInput[0]);

if (month < 1 || month > 12) {
    console.log("Error");
} else if (month === 2) {
    console.log(28);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30);
} else {
    console.log(31);
}
  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});