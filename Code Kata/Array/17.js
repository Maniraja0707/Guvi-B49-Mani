//You are a software engineer at an MNC. You are given the task of sorting the employees in your company based on their salary. Perform the task so that the employees, including yourself, will get a bonus from the management.


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

let arr = userInput[1].split(" ");
//console.log(arr);
let salaries = [];

for(i=0; i<arr.length; i+=2){
salaries.push([arr[i],Number(arr[i+1])]);
}

salaries.sort((a,b)=> a[1] - b[1]);
//console.log(salaries);

for(i=0 ; i<salaries.length; i++){
  console.log(salaries[i][0]);
}





  //end-here
});