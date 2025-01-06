// Function to apply vertical mirror transformation
function vertMirror(strng) {
    return strng
        .split('\n') // Split the string into lines
        .map(line => [...line].reverse().join('')) // Reverse characters in each line
        .join('\n'); // Join the transformed lines back with newline characters
}

// Function to apply horizontal mirror transformation
function horMirror(strng) {
    return strng
        .split('\n') // Split the string into lines
        .reverse() // Reverse the order of the lines
        .join('\n'); // Join the transformed lines back with newline characters
}

// Higher-order function to apply a given transformation function
function oper(fct, s) {
    return fct(s); // Apply the passed function (fct) to the string (s)
}