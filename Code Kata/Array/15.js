//You are an intern at GUVI and the company wants to organise its data and delete unnecessary extra storage elements used. You are given k arrays of unequal dimensions. Sort the k arrays individually and concatenate them.
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

function SortAndConcat(K, arr) {
  let result = [];
  let Newarr =[];
  for (let i=0; i < K; i++){
     Newarr =arr[i][0].slice();
    Newarr.sort((a,b) => a-b);
    result = result.concat(Newarr);
  }
  return result;
}

let K = Number(userInput[0]);

let arr =[];
for (i=2; i<userInput.length; i=i+2){
  arr.push([userInput[i].split(" ")]);
}





//console.log(userInput);
//console.log(userInput.length);
//console.log(K);
//console.log(arr);

console.log(SortAndConcat(K, arr).join(" "));


  //end-here
});