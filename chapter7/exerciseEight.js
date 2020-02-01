/*
** Without using a for, while, or do/while loop, 
** write some code that checks whether the number 3 appears inside these arrays
*/

let number = 3;

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

checkIfArrayContains(numbers1, number);
checkIfArrayContains(numbers2, number);
checkIfArrayContains(numbers3, number);

function checkIfArrayContains(array, number) { console.log(array.includes(number)); };
