//You are given an array of numbers. Print the least occurring element. If there is more than 1 element print all of them in decreasing order of their value.

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
function leastOccurringElements(arr) {
  let frequency = {};
  arr.forEach(function(value) {
    if (value in frequency)
      frequency[value]++;
    else
      frequency[value] = 0;
  });

  let minFrequency = Math.min(...Object.values(frequency));
  let result = Object.keys(frequency).filter(key => frequency[key] === minFrequency).map(Number).sort((a, b) => b - a);

  return result;
}

let arr = userInput[1].split(" ").map(Number);

let output = leastOccurringElements(arr);

//console.log(arr);

console.log(output.join(' '));

  //end-here
});