//Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.

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

function findnum(N,K,arr){
for(i=0; i<N; i++){
  if(arr[i]===K){
    return"yes";
  } 
  }return"no";
}

let A = userInput[0].split(" ");
let N = Number(A[0]);
let K = Number(A[1]);
let arr = userInput[1].split(" ").map(Number);


//console.log(arr);
console.log(findnum(N,K,arr));


  //end-here
});