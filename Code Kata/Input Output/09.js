<<<<<<< HEAD
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
for (let i=0; i<str.length; i++) {
    console.log(str[i]+"");
}


//for (let i=0; i<str.length; i++) {
//    console.log(str[i]+"\n");
//}


  //end-here
=======
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
for (let i=0; i<str.length; i++) {
    console.log(str[i]+"");
}


//for (let i=0; i<str.length; i++) {
//    console.log(str[i]+"\n");
//}


  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});