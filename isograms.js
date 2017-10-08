// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Solution:
function isIsogram(str){
  letters = str.toLowerCase().split('')
  for(var i = 0; i < letters.length; i++) {
    for(var j = 0; j < letters.length; j++){
      if(i!=j){
        if(letters[i] == letters[j]){
          return false
        }
      }
    }
  }
  return true
}
