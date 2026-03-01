// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


//  code 

function vowelIndices(word){
  //your code here
  let chai = []
  for (let i = 0; i < word.length; i++) {
    // .test() to check the character against your Regex
    if (/[aeiouy]/i.test(word[i])) {
      // Push the index (i + 1 for 1-based indexing)
      chai.push(i+1);
    }
  }
  return chai
}