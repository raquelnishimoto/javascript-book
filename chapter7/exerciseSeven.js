/*
** Use map and filter to first determine the lengths of all the elements in an array of string values, 
** then discard the even values (keep the odd values).
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let oddLength = array.map( string => string.length )
  .filter( length => length %2 !== 0 );

  return oddLength;
}