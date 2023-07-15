
//Annoymous function
// a. Print odd numbers in an array
(function(){
    var arr = [1,2,3,4,5]
    var Oddarr = [];
    for (i=0; i<=arr.length; i++){
        if (i%2 !=0)
        Oddarr.push(i);
        }
    console.log(Oddarr);
})();


// b. Convert all the strings to title caps in a string array
(function() {
    let arr = ['this is book', 'jio', 'airtel'];
    let newarr = arr.map(function(str) {
      return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      }).join(' ');
    });
    console.log(newarr);
  })();
  

// c. Sum of all numbers in an array
(function(){
    var arr = [1,2,3,4,5]
    var Oddarr = 0;
    for (i=0; i<=arr.length; i++){
        Oddarr+=i
    }
    console.log(Oddarr);
})();

// d. Return all the prime numbers in an array
(function(){
  var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];
  var primes = arr.filter(function(num) {
    //console.log("sqrt: ", Math.sqrt(num));
    for(let i = 2; i < num; i++) {
      if(num % i === 0) return false; // num % 2 ===0 retun false so its exit if true continue to next else level
    }
    return num > 1;//return (condition num should be grater than 1)
  });
  console.log(primes);
})();

//another method

// d. Return all the prime numbers in an array
(function(){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var primes = arr.filter(function(num) {
      console.log("sqrt: ", Math.sqrt(num));
      for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
      }
      return num > 1;
    });
    console.log(primes);
  })();


// e. Return all the palindromes in an array
(function(){
  let arr = ['racecar', 'level', 'hello', 'world', 'madam'];
  let palindromes = arr.filter(function(word) {
    return word === word.split('').reverse().join('');
  });
  console.log(palindromes);
})();




// f. Return median of two sorted arrays of the same size.
