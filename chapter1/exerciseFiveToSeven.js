/*
** Explain why this code logs '510' instead of 15
** Answer: This expression concatanates a value of string type '5'
** with another value of number type 10. They are different data types.
** Javascript will perform a implicit type coersion by converting the number data type
** to a string and joining the two values: '5' and the converted '10'.
*/

console.log('5' + 10);


/*
** Refactor the code from the previous exercise
** to use explicit coercion, so it logs 15 instead.
*/

console.log(Number('5') + 10);

/*
** Use the template literal syntax along with the expression Number('5') + 10 
** to log the following sentence to the console: The value of 5 + 10 is 15.
*/

console.log(`The value of 5 + 10 is ${Number('5') + 10}`);