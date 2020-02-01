/*
** Write a program named age.js that includes someone's age
** and then calculates and reports the future age in 10, 20, 30 and 40 years.
*/

/*
** In chapter 3 -
** Modify the age.js program you wrote in the exercises for the Variables chapter. 
** The updated code should ask the user to enter their age instead of hard-coding the age in the program.
*/

let rlSync = require('readline-sync')
let age = Number(rlSync.question("How old are you? "));
let futureDecades = 4;
let decade = 10;

console.log(`You are ${age} old.`);

while (futureDecades > 0) {
  console.log(`In ${decade} years, you will be ${age + decade} old.`)
  futureDecades -= 1;
  decade += 10;
}

