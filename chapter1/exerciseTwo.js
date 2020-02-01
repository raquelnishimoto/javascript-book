/* 
  Use the arithmetic operators to determine 
  the individual digits of a 4-digit number like 4936
*/

const number = 4936;
// thousand place
console.log(parseInt((number % 10000) / 1000));
console.log((number - (number % 1000)) / 1000);

// hundred place
console.log(parseInt((number % 1000) / 100));
console.log(((number % 1000) - (number % 100)) / 100);

// tens place
console.log(parseInt((number % 100) / 10));
console.log(((number % 100) - (number % 10)) / 10);

// ones place
console.log(parseInt(number % 10));
console.log(number % 10);