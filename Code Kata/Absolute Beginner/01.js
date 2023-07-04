//Print the First 3 multiples of the given number N. (N is a positive integer)

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  //end-here
  
   let num = userInput;
   let result =""; 
    for (let i=1; i <=3; i++) {
        result +=(num * i)+ " ";
        
    }
    console.log(result.trim());
  
});