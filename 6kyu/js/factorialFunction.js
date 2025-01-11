// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// code

function factorial(n){
    if (n===0 || n===1){
      return 1;
    }else{
      return n*factorial(n-1)
    }
}
  
// short Code

const factorial = n => (n <= 1 ? 1 : n* factorial(n-1));