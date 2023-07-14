//Ramesh is a student and wants to find out if there is any other student in his class who has got the same marks as his, in maths. Help him to find out.


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


function index(N,M){
for (i=0; i< arr.length; i++){
  if(arr[i]==M){
    return i;
    }
}return -1;
}

let arr = userInput[1].split(" ").map(Number);
let A = userInput[0].split(" ").map(Number);

let N = A[0];
let M = A[1];
//console.log(arr);
console.log(index(N,M));


  //end-here
});