// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

/** Code */

function distinct(a) {
    let s = new Set(a)
    let a1 = [...s]
    return a1;
}

/** Another code */

function distinct(a) {
    let a1 = [];
    a.forEach(element => {
    if (!a1.includes(element)) {
        a1.push(element);
    }
    });
    return a1
}
// New Code
function distinctEl(a) {
    //this will only select distict elements from a array. and will ignore duplicates
        return [...new Set(a)];
    
}


/** Fast and robust code */

const distDuplicates = a => Array.from(new Set(a));