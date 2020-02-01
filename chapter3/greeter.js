/*
** Write a dynamic greeter program named greeter.js. 
** The program should contain a function that takes one argument, name, 
** and logs a Hello, {name}! message to the console. 
** You should replace {name} with the value of the name argument.
*/

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name? ");

console.log(`Hello, ${name}!`)

/*
** Modify the greeter.js program to ask for the user's first and last names separately, 
** then greet the user with their full name.
*/

let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");

console.log(`Hello, ${firstName + ' ' + lastName}!`)