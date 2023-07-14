//You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

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

let arr = userInput[1].split(" ").map(Number);
//console.log(arr);

let firstsum = 0;
let lastsum = 0;

for(i=0; i<3; i++){
  firstsum += arr[i];
}
for(i=arr.length-1; i>arr.length-4; i--){
  lastsum += arr[i];
}

(firstsum != lastsum)? console.log(0):console.log(1);

//console.log(firstsum);
//console.log(lastsum);

  //end-here
});