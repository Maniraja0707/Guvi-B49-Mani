//In a world cup tournament,no of goals scored by each team is given to you. Your task is to calculate net goal rate of each team.

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

let lastsum = 0;
for (i=arr.length-1 ; i> arr.length-4; i--){
  lastsum += arr[i];
}
//console.log(lastsum);

let result =[];
for (i=0; i<arr.length; i++){
  var Value = (Number(lastsum) - Number(arr[i]))*(-1);
  //if (Value < 0){
result.push(Value);
  //}
  //result.push(Value);
}
//console.log(typeof(Value))
console.log(result.join(" "));

  //end-here
});