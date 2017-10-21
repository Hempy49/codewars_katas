// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contains any char.

// Solution:

function XO(str) {
  x = [];
  o = [];
  var string = str.toLowerCase().split('');
  for(var i = 0; i < str.length; i++){
    if (string[i] === 'x'){
      x.push(string[i]);
    } else if (string[i] === 'o'){
      o.push(string[i]);
    }
  }
  return x.length === o.length;
}
