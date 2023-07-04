//Rajesh and Ram are having a conflict on the maximum marks that they have scored in all the exams conducted in the past year. The one having scored the maximum gets a treat from the other. They decide to go through their test papers and record their highest marks. You are Rajesh’s best friend and as he has tutions to attend, he gives you all his test papers and asks you to find out the maximum marks that he has scored among all the marks in all exams. He promises you a treat if he wins the bet with Ram. Help Rajesh find out his highest marks.

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

// find maximum
let value = userInput[1].split(" ").map(Number);
//console.log(value);

function findmax(value) {
  let MaximumMark = value[0];
  for (i=1; i<value.length; i++){
    if(value[i]>MaximumMark) {
      MaximumMark = value[i];
    }
  }
  return MaximumMark;
}

console.log(findmax(value));

  //end-here
});