// Instructions
//
// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Solution:

var capitals = function (word) {
	var capitals = []
  var w = word.split('');
  w.forEach(function(letter){
  if (letter == letter.toUpperCase()) {
     capitals.push(w.indexOf(letter))}
 });
 return capitals;
};
