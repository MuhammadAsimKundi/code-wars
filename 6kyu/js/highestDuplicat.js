// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// code .

function highestRank(arr) {
    const freq = new Map();
    
    // Build frequency map
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Sort by frequency descending, then by number descending
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1] || b[0] - a[0])[0][0];
}