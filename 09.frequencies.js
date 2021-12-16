// Create a function that returns the frequency distribution of an array. This function should return an object,
//where the keys are the unique elements and the values are the frequency in which those elements occur.
let array = ["A", "B", "A", "A", "A"];
function getFrequencies(arr) {
  let frequencies = {};
  for (let num of arr) {
    if ((frequencies[num] = frequencies[num])) {
      frequencies[num]++;
    } else {
      frequencies[num] = 1;
    }
  }
  return frequencies;
}

console.log(getFrequencies(array));
