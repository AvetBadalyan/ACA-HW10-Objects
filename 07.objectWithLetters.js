// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
let newObject = {};
let { letter } = newObject;
function letterPairs(arr) {
  for (let lower of arr) {
    letter = lower;
    newObject[letter] = lower.toUpperCase();
  }
  return newObject;
}

console.log(letterPairs(["p", "s"]));
