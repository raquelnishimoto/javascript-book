/*
** Create a function that creates and returns a copy of an object.
** The function takes two arguments: the object to copy and an array of the keys that you want to copy. 
** You can omit the array of keys, in which case you should copy all the keys of the object.
*/

let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(object, keys) {
  let fullCopy = Object.create(object);
  let partialCopy = {};
  if (!keys) {
    return fullCopy;
  } else {
    keys.map(key => partialCopy[key] = fullCopy[key]);
    return partialCopy;
  }
}

// let newObj = copyObj(objToCopy);
// console.log(newObj.foo);    // => 1
// console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined