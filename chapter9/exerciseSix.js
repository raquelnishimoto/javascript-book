/*
** Write a function that searches an array of strings for every element 
** that matches the regular expression given by its argument. 
** The function should return all matching elements in an array.
*/

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
console.log(allMatches(words, /lab/));

function allMatches(words, regex) {
  let matches = [];
  words.forEach(word => {
    if (regex.test(word)) {
      matches.push(word);
    }
  });
  return matches;
}