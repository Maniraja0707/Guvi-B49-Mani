//The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

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
//equilateral triangle area formula =(Math.sqrt(3) / 4) * Side^2
let a =Number(userInput[0])
let equilateral_triangle_area= (Math.sqrt(3)/4)*(Math.pow(a,2)); 
  console.log(equilateral_triangle_area.toFixed(2));

  //end-here
});