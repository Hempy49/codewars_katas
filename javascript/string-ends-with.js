// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Solution:

function solution(str, ending){
   var strEnd = str.slice(- ending.length);
   return strEnd === ending;
}
