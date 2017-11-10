// Create a function that takes a string and returns that string with the first half
// lowercased and the last half uppercased.
// 
// eg: foobar == fooBAR
//
// If it is an odd number then 'round' it up to find which letters to uppercase.
//
// Solution:

function sillycase(silly) {
  var midPoint = Math.ceil(silly.length / 2);
  var beg = silly.slice(0, midPoint).toLowerCase();
  var end = silly.slice(midPoint).toUpperCase();
  return beg + end;
}
