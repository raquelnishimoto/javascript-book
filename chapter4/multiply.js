/*
** Write a program that uses a multiply method to multiply two numbers and returns the result. 
** Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
*/



function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

let numberOne = getNumber("Please, enter a valid number: ");
let numberTwo = getNumber("Please, enter a second valid number: ");

console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);