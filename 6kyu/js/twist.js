// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.


/** Code */

// add the value "codewars" to the websites array 1,000 times
let websites = []
for(let i=0; i<1000; i++){
  websites.push('codewars')
}

/** Short and optimzed */

var websites = new Array(1000).fill("codewars");
