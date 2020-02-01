/*
** Create an array from the keys of object obj below, 
** with all values converted to uppercase. 
** Your implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let chars = Object.keys(obj);
// let uppercaseChars = [];

// for(let index in chars) {
//   uppercaseChars[index] = chars[index].toUpperCase();
// }

let uppercaseChars = Object.keys(obj).map( key => key.toUpperCase());
console.log(uppercaseChars);
