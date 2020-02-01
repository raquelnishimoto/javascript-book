/*
** This code will print out Product2', 'Product2' and 'Product not found!' as well.
** in line 19 the function is called and passed '113' as an argument
** the function will be executed and because serial variable has a truthy value
** the block starting from line 9 to 18 is executed from top to bottom
** starting in line 11 the case evaluates to a falsy value 
** in line 14 case '113' evaluates to a truthy value and 
** the following lines will be executed because there is no break statement
*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');