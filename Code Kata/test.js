// Getting input via STDIN
const { Console } = require("console");
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


  // Factorial formula
/*
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
  let Inputvalue = userInput[0];

  console.log(factorial(Inputvalue));
*/


// Kilometer to meter and centimeter
/*
let A = userInput[0];

let B = A * 1000 //Kilometer to meter

let C = A * 100000 // Kilometer to centimeter

console.log(B);
console.log(C);
*/


// Odd OR Even number
/*
function oddOrEven(n) {
  if (n === 0) {
    return "Zero";
  } else if (Math.round(n) % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let Inputnumber = userInput[0];
console.log(oddOrEven(Inputnumber)); 

*/

//5 times print value
/*
let N = userInput[0];

for (i= 1; i<6; i++){
  console.log(N);
}
*/

//Let "A"  be a string. Remove all the whitespaces and find it's length.
/*
let A = userInput[0];
console.log(A.split(" ").join('').length);
*/


//Write a code to get 2 integers A and N. Print the integer A, N times in separate line.
/*
let A = userInput[0].split(' ').map(Number);
//console.log(A.length)

let B = (Number(A[0]));
let C = (Number(A[1]));

//console.log(B);
//console.log(C);


for (i= 1; i<C+1; i++){
  console.log(B);
}
*/


// Celcius to Fahernheit
/*
let C = userInput[0];
let F = C * (9/5)+32;
console.log(F.toFixed(2));
*/


// You are given the coefficients of a quadratic equation in order A, B & C.
// X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a
/*
let array = userInput[0].split(' ');
//console.log(array);
let a = Number(array[0]);
let b = Number(array[1]);
let c = Number(array[2]);

let root1 = (-b + ((b**2)-(4*a*c)) **0.5) / ( 2 * a);
let root2 = (-b - ((b**2)-(4*a*c)) **0.5) / ( 2 * a);

console.log(root1.toFixed(2));
console.log(root2.toFixed(2));
*/

// 1 to N
/*
let N = userInput[0];

//console.log(N);

for (i=1; i<=N; i=i+1) {
  console.log(i);
}
*/



//You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

//Print the output up to two decimal places (Round-off if necessary).

//(S.I. = P*T*R/100)
/*
let A = (userInput[0]).split(' ');
//console.log(A);

let P = A[0];
let T = A[2];
let R = A[1];

let SI =(P * T * R) / 100
console.log(SI.toFixed(2));
*/


//Write a program to get a string as input and reverse the string without using temporary variable.
/*
let A = userInput[0];

console.log(A.split('').reverse().join(''));
*/



//Using the method of looping, write a program to print the table of 9 till N in the format as follows:
//(N is input by the user)
//9 18 27...
//Print NULL if 0 is input
/*
let N = userInput[0];
let arr =[];
//console.log(N);
if (N ==0) {
  console.log("NULL")
}
for (i=1; i<=N; i++){
  let X =(i * 9)
  arr.push(X)
  
}
console.log(arr.join(' '));
*/



//Using the method of looping, write a program to print the table of 9 till N in the format as follows:
/*
let N = userInput[0];
let arr =[];
//console.log(N);
if (N ==0) {
  console.log("NULL")
}
for (i=1; i<=N; i++){
  let X =(i * 9)
  arr.push(X)
  
}
console.log(arr.join(' '));

*/

//Write a code get an integer number as input and print the sum of the digits.
/*
let N = userInput[0];
let sum = 0;
//.log(N);

for (i=0; i<=N.length-1; i++){
  sum +=Number(N[i]);
  }
console.log(sum);
*/

//Write a code to get an integer N and print the values from N to 1.
/*
let N =Number(userInput[0]);
for (i=N; i>=1; i--) {
  console.log(i);
}
*/

//Write a code get an integer number as input and print the odd and even digits of the number separately.
/*
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
*/



/*
//You are given with a number "N", find its cube.
let N = Number(userInput[0]);
let cube = N*N*N;
console.log(cube);
*/


//Write a code to get an integer N and print the sum of  values from 1 to N.

/*
let N = Number(userInput[0]);
let sum = 0;
//console.log(N);

for (i=1; i<=N; i++){
sum += i;
  }
console.log(sum);
//console.log(typeof(sum));
*/


//Write a code to get an integer N and print the digits of the integer.
/*
let N= userInput[0];
let value = [];
for (i=0; i<=N.length-1; i++){
  value += N[i]+(" ")
}
console.log(value);
*/


//A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months
/*
let N= userInput[0];

let saving = (N*1000)+1000;
console.log(saving);
*/

//HCF
/*
let N = userInput[0];
//console.log(N);
let [A,B]= N.split(" ").map(Number);
//console.log([A,B]);
let hcf;

// looping from 1 to number1 and number2
for (let i = 1; i <= A && i <= B; i++) {

    // check if is factor of both integers
    if( A % i == 0 && B % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(hcf);
*/



//You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.
/*
let N = userInput[1];
//onsole.log(N);
let arr = N.split(" ").sort()
//console.log(arr);

let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
//console.log(uniqueArr);

console.log(uniqueArr.join(' '));
*/


//accending A and Decending B with combined
/*
let A = userInput[1];
let B = userInput[2];

A = A.split(' ').sort();
B =B.split(' ').sort(Number);

function sortNums(arrAc) {
  let sorted = arrAc.sort((a, b) => a - b);
  console.log(sorted.join(", "));
}
function sortNums(arrDc) {
  let sorted = arrDc.sort((a, b) => b - a);
  console.log(sorted.join(", "));
}

console.log(A);
console.log(B);
*/

// Without semmicolon
/*
let A = userInput[0]
console.log(A)
*/


//remove duplicate
/* 
let A = userInput[1].split(" ");
console.log(A);
let uniqueA = A.filter((value, index) => A.indexOf(value) === index);
console.log(uniqueA.sort().join(" ").trim());
*/


// find maximum
/*
let value = userInput[1].split(" ").map(Number);
console.log(value);

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
*/

// sort of values(You are a software engineer at an MNC. You are given the task of sorting the employees in your company based on their salary. Perform the task so that the employees, including yourself, will get a bonus from the management)
/*
let arr = userInput[1].split(" ");
//console.log(arr);
let salaries = [];

for(i=0; i<arr.length; i+=2){
salaries.push([arr[i],Number(arr[i+1])])
}

salaries.sort((a,b)=> a[1] - b[1]);
//console.log(salaries);

for(i=0 ; i<salaries.length; i++){
  console.log(salaries[i][0]);
}
*/


//Ria is a 5 year old girl. Her mother wants to teach her how to sort words in the same order that they appear in a dictionary. She decides to write a program to sort a given set of strings based on their alphabetical order. Help Ria’s mother to complete the program.
/*
let arr = userInput[1].split(" ");
console.log(arr.sort().join(" ").trim());
*/


//odd number
//Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.
/*
let N = userInput[0]; // example input
//console.log(N);
let arr = Array.from(N);
//console.log(arr);


 let Odd = arr.filter(x => parseInt(x) % 2 == 1)
 

 if (Odd.length == 0) {
     Odd.push(-1);
 }

//console.log(Odd);
console.log(Odd.join(' '));
*/


//Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
/*
let A = userInput[0];
A = A.split('');
let ACount = userInput[0].length;
//console.log(ACount);
let N = ((userInput[0].length)/2);
N = Math.floor(N);
//console.log(N);

  ACount%2 ===0? ((A[(N-1)] = "*") && (A[N] = '*')):(A[N] = '*');

console.log(A.join(''));
*/

//You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.
/*let arr = userInput[1].split(" ").map(Number);
//console.log(arr);

let firstsum = 0;
let lastsum = 0;

for(i=0; i<3; i++){
  firstsum += arr[i];
}
for(i=arr.length-1; i>arr.length-4; i--){
  lastsum += arr[i];
}

(firstsum != lastsum)? console.log(0):console.log(1);

//console.log(firstsum);
//console.log(lastsum);
*/


//In a world cup tournament,no of goals scored by each team is given to you. Your task is to calculate net goal rate of each team.
/*
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
result.push(Value);
  
}
//console.log(typeof(Value))
console.log(result.join(" "));
*/




//Given a number N and an array of N integers, find the sum of all the negative numbers in the array.
/*
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
*/

//Mr.Stark wants to order the employee ids, which are recorded in a 2D matrix, in ascending order. He wants to do it so as to allot a new id to a person who joins as a fresher. You are the CTO of the Stark industries and you are asked by Mr.Stark to sort the data.
/*
function matrix(M,N){
  let newarr =[];
  for (i=0; i<=arr.length-1; i++){
  newarr += arr[i]+",";
  newarr = newarr.sort((a,b)=>a-b);
    
  }
  console.log(newarr);
}

let A = userInput[0].split(" ");
let M = A[0];
let N = A[1];
let arr =[];
for (i=1; i<userInput.length; i++){
  arr.push(userInput[i].split(" "));
}
console.log(arr);
console.log(matrix(M,N))
*/

//Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
/*
function findnum(N,K,arr){
for(i=0; i<N; i++){
  if(arr[i]===K){
    return"yes"
  } 
  }return"no"
}

let A = userInput[0].split(" ");
let N = Number(A[0]);
let K = Number(A[1]);
let arr = userInput[1].split(" ").map(Number);


//console.log(arr);
console.log(findnum(N,K,arr));
*/


//You are given an array of numbers. Print the least occurring element. If there is more than 1 element print all of them in decreasing order of their value.
//I don't know
/*
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
*/


//You are given two arrays of equal length. Your task is to merge the two arrays then sort them too and then find the sum of two middlemost elements.

/*
let A = userInput[1].split(" ").map(Number);
let B = userInput[2].split(" ").map(Number);

let arr = [];
for (i= 0; i<A.length; i++){
  arr.push(A[i])
}

for (i= 0; i<B.length; i++){
  arr.push(B[i])
}

arr = arr.sort((a,b)=>a-b);
let l = arr.length;

let N2 = l/2
let N1 = (l/2)-1

let sum = arr[N1]+arr[N2];
console.log(sum);
*/



//Ramesh is a student and wants to find out if there is any other student in his class who has got the same marks as his, in maths. Help him to find out.

function index(N,M){
for (i=0; i< arr.length; i++){
  if(arr[i]==M){
    return i
    }
}return -1
}

let arr = userInput[1].split(" ").map(Number);
let A = userInput[0].split(" ").map(Number);

let N = A[0];
let M = A[1];
//console.log(arr);
console.log(index(N,M));


//end-here
});