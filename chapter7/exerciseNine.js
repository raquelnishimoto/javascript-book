// Write some code to extract the word 'mem' from the following nested array:


let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

// returns array and where 'mem' is not found it returns an empty array
arr.map( array => array.filter( element => element === 'mem' ));


// return 'mem' whenever it finds it
let extractMem= [];

arr.map( array => {
  if (array.includes('mem')) {
    extractMem.push('men');
  };
});

console.log(extractMem);

//returns 'mem' based on index
console.log(arr[1][2]);