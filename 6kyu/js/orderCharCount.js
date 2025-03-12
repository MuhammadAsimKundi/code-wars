// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

/** Code */

function orderedCount(text) {
    let charMap = new Map();
    
    for (let char of text) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    return Array.from(charMap);
}