// Add a qux property with value 3 to the myObj object we created in the previous exercise. 

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

console.log(myObj);