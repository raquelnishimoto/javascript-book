// Create an array named names that contains a list of pet names. 

let pets = [ 'Frida', 'Tina', 'Sparkle' ];

// Create an object named pets that contains a list of pet names and the type of animal.

let petTypes = { 
  asta: 'dog', 
  butterscotch: 'cat', 
  pudding: 'cat', 
  neptune: 'fish', 
  darwin: 'lizard' 
}

// What value does the following expression evaluate to?
'foo' === 'Foo'
/*
** expression evaluates false. Although they are of the same datatype, 
** they have different values
*/

// What value does the following expression evaluate to?
parseInt('3.1415')
/*
** The expression evaluates to data of type Number with a value of 3.
** This is because parseInt will stop converting the string char
** once it finds an invalid char.
*/

// What value does the following expression evaluate to?
'12' < '9'
/*
** The expression will evaluate to true when these datatypes are strings
** Javascript will evaluate each char from left to right
** and since '1' is less than '9' it will return true.
*/
