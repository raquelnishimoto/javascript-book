/*
** What does this code output to the console?
** the output of calling the function isArrayEmpty with an empty array
** will output 'Not empty', because the object arr has a truthy value
*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array