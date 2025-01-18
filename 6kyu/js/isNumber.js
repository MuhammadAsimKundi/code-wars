// /** Task */

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not. 

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

/** Code with Regular Expression*/

function isDigit(s) {
    // Trim any whitespace from the input string
    s = s.trim();

    // Use a regular expression to check if the string is a valid integer or floating-point number
    return /^-?\d+(\.\d+)?$/.test(s);
}


/** Simple Code*/

function isDigit(s) {
    // Trim any whitespace from the input string
    s = s.trim();

    // Try to parse the string as a number
    const num = parseFloat(s);

    // Ensure:
    // 1. The parsed number is not NaN.
    // 2. The parsed number is finite (not Infinity or -Infinity).
    // 3. The trimmed string matches the parsed number's string representation.
    return !isNaN(num) && isFinite(num) && String(num) === s;
}
