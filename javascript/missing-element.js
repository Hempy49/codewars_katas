// Fellow code warrior, we need your help! We seem to have lost one of our array elements,
// and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain
// all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
//
// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9
// (inclusive), and returns the missing element.

// Solution:

function getMissingElement(superImportantArray){
  var sortedArr = superImportantArray.sort()
  for(var i = 0; i < 10; i++){
    if (sortedArr[i] != i){
      return i
    }
  }
}
