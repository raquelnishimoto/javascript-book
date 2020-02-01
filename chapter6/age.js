/*
** Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
** The updated code should use a for loop to display the future ages.
*/

let rlSync = require('readline-sync');
let age = parseInt(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for(let year = 1; year <= 4; year++) {
  console.log(`In ${year * 10} you are going to be ${age + (year * 10)}.`);
}