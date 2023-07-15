<<<<<<< HEAD
//You are provided with a number, "N". Find its factorial.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
    // console.log('entered data is:', data);
    // console.log(userInput);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
  let Inputvalue = userInput[0];

  console.log(factorial(Inputvalue));


  //end-here
=======
//You are provided with a number, "N". Find its factorial.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
    // console.log('entered data is:', data);
    // console.log(userInput);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
  let Inputvalue = userInput[0];

  console.log(factorial(Inputvalue));


  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});