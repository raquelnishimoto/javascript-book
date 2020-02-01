/*
In the following code, what are the final length values for array1, array2, array3, array4, and array5.
*/

let array1 = [1, 2, undefined, 4];
// array1 length is 4.

let array2 = [1];
array2.length = 5;
// array2 final length is 5 - in line 9 the length value is reassigned to 5 and create another 4 elements 'undefined'

let array3 = [];
array3[-1] = [1];
// array3 length is 0 - code in line 13 will create an object {-1: [1]} which is a property (not an element) of the array

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
// length will be 3. Reassignment in line 17 will truncate elements assigned to array4 in line16

let array5 = [];
array5[100] = 3;
//length will be 101 - reassigment in line 21 will create 100 elements(0-99) undefined and element at index 100 wiht a value of 3. 