// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

/** Code */

function largestPairSum (numbers) {
    //TODO: Write your Code here
    let sort = numbers.sort((a,b)=> b-a)
    return sort[0]+sort[1]
}