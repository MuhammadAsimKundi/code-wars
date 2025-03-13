// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

/** Code */

function calculateTip(amount, rating) {
    // Define tip percentages for each rating
    const tips = { TERRIBLE: 0, POOR: 0.05, GOOD: 0.1, GREAT: 0.15, EXCELLENT: 0.2 };
    
    // Convert rating to uppercase for case-insensitive lookup
    const tip = tips[rating.toUpperCase()]; 
  
    // If rating exists, calculate tip; otherwise, return an error message
    return tip !== undefined ? Math.ceil(amount * tip) : "Rating not recognised";
}
  