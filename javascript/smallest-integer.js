// Given an array of integers your solution should find the smallest integer.

// Solution:

class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min.apply(Math, args);
  }
}
