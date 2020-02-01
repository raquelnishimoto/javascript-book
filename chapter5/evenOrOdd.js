/*
** Write a function, evenOrOdd, that determines whether its argument is an even number. 
** If it is, the function should log 'even' to the console; 
** otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/

function evenOrOdd(number) {
  if(validNumber(number)) {
    number % 2 === 0 ? console.log('even') : console.log('odd');
  } else {
    console.log(`${number} is not an integer.`)
  }
  
}

evenOrOdd(0);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('hi');
evenOrOdd(1.1);

/*
** Let's improve our previous implementation of evenOrOdd. 
** Add a validation check to ensure that the argument is an integer. 
** If it isn't, the function should issue an error message and return.
*/

function validNumber(number) {
  return parseInt(number) === number
}