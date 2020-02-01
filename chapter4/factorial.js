/*
** Use the times function shown below to write a program 
** that logs the value of a factorial to the console.
*/

function times(number1, number2) {
  let result = number1 * number2;
  // console.log(result);
  return result;
}

function factorial(n) {
  let sum = 1;
  let number = n;
  while (number > 0) {
    number -= 1;
    sum += times(sum, number);
  }
  console.log(sum);
  return sum;
}

factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);