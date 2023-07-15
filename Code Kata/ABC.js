const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  //const inputString = userInput.toString();
  //const inputArray = inputString.split(',');
  //console.log(inputArray);// array of given inputs
// your code goes here
  let arr = userInput[0];
  console.log(arr);

  
});