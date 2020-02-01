/*
** What does this code log to the console? 
** Does executing the foo function affect the output? Why or why not?
*/

// the global variable 'bar' is initialised and assigned a value 1 of type Number
let bar = 1;

// function foo is declared and inside the block, the local variable bar is assined a value 2 of type Number
function foo() {
  let bar = 2;
}

// line 15 invokes the function foo() where a local variable is initialised with value 2.
// The funtion return 'undefined' as its default value
foo();

// the functions method .log() will output the value which is assigned to the global variable 'bar', which is 1.
console.log(bar);