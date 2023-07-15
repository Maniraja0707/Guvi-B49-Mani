<<<<<<< HEAD
//Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.



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

// program to find the HCF or GCD of two integers

// take input

//HCF
let N = userInput[0].split(" ").map(Number);
//console.log(N);
let A = N[0];
let B = N[1];
//console.log([A,B]);
let hcf;

// looping from 1 to number1 and number2
for (let i = 1; i <= A && i <= B; i++) {

    // check if is factor of both integers
    if( A % i === 0 && B % i === 0) {
        hcf = i;
    }
}

// display the hcf
console.log(hcf);

=======
//Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.



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

// program to find the HCF or GCD of two integers

// take input

//HCF
let N = userInput[0].split(" ").map(Number);
//console.log(N);
let A = N[0];
let B = N[1];
//console.log([A,B]);
let hcf;

// looping from 1 to number1 and number2
for (let i = 1; i <= A && i <= B; i++) {

    // check if is factor of both integers
    if( A % i === 0 && B % i === 0) {
        hcf = i;
    }
}

// display the hcf
console.log(hcf);

>>>>>>> 39b1ac0fab075f3723fcbb779cecd7c6e89e887f
});