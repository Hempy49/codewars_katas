// Write a function that returns the number of occurrences of an element in an array.

// Solution:

Array.prototype.numberOfOccurrences = function(ele) {
  var count = 0;
  this.forEach(function(e) {
    if (ele === e) {
      count++;
    }
  })
  return count;
}
