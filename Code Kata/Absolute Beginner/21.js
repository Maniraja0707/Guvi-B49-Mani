//Using the method of looping, write a program to print the table of 9 till N in the format as follows:


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
let arr =[];
//console.log(N);
if (N ===0) {
  console.log("NULL");
}
for (i=1; i<=N; i++){
  let X =(i * 9);
  arr.push(X);
  
}
console.log(arr.join(' '));
  //end-here
});
