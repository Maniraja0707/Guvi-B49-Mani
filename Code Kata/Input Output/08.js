//Write a code to get the input in the given format and print the output in the given format.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let str =userInput[0];
let tri = str.replace(/ /g, "\n");
console.log(tri);


//for (let i=0; i<str.length; i++) {
//    console.log(str[i]+"\n");
//}


  //end-here
});