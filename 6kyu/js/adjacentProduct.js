// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
// 2
// ∗
// 3
// =
// 6
//  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
// 5
// ∗
// 10
// =
// 50
//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
 
// −
// 2
// ∗
// 7
// =
// −
// 14
//  −2∗7=−14

/** Code */

function adjacentElementsProduct(array) {
    // Initialize the maximum product as the product of the first two numbers
    let maxProduct = array[0] * array[1];
  
    // Iterate through the array
    for (let i = 1; i < array.length - 1; i++) {
      // Calculate the product of the current number and the next one
      const product = array[i] * array[i + 1];
      // Update maxProduct if the current product is greater
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  
    return maxProduct;
}

/** Short Code */

function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i) => n * array[i + 1]).slice(0, -1));
}