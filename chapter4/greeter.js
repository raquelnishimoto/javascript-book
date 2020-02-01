/*
** Add a function to this program that solicits the user's first and last names in separate invocations;
** the function should return the appropriate name as a string.
** Use the return values to greet the user with their full name.
*/

function getName(promtp) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(promtp);
  return name;
}


let firstName = getName("What's your first name? ");
let lastName = getName("What's your last name? ");

console.log(`Hello, ${firstName + ' ' + lastName}!`)