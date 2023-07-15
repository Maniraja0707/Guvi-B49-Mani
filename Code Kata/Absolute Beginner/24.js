<<<<<<< HEAD
//Write a code get an integer number as input and print the odd and even digits of the number separately.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
    // console.log('entered data is:', data);
    // console.log(userInput);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let N = userInput[0];
let arr = [];

for (i=0; i<=N.length-1; i++){
 arr.push(N[i]);
}

let even = "";
let odd = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even += arr[i] + " ";
    } else {
        odd += arr[i] + " ";
    }
}
even = even.trim().split(" ").sort().join(" ");
odd = odd.trim().split(" ").sort().join(" ");
console.log(even);
console.log(odd);
  //end-here
=======
//Write a code get an integer number as input and print the odd and even digits of the number separately.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
    // console.log('entered data is:', data);
    // console.log(userInput);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let N = userInput[0];
let arr = [];

for (i=0; i<=N.length-1; i++){
 arr.push(N[i]);
}

let even = "";
let odd = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even += arr[i] + " ";
    } else {
        odd += arr[i] + " ";
    }
}
even = even.trim().split(" ").sort().join(" ");
odd = odd.trim().split(" ").sort().join(" ");
console.log(even);
console.log(odd);
  //end-here
>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});