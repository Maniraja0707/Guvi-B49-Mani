//You are provided with a number check whether its odd or even. 

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

function oddOrEven(n) {
  if (n === 0) {
    return "Zero";
  } else if (Math.round(n) % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let Inputnumber = userInput[0];
console.log(oddOrEven(Inputnumber)); 

  //end-here
});