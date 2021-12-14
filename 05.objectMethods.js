// NEED TO FIX BUGS
/* Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be +

printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64

Write object.keys, object.values and object.entries methods using for..in

*/
let count = 0;
function sum(object) {
  let { operator, array } = object;
  if ((operator = "+" || operator === undefined)) {
    count = array.reduce((acc, current) => acc + current);
  } else if ((operator = "*")) {
    count = array.reduce((acc, current) => acc * current);
  } else if ((operator = "-")) {
    count = array.reduce((acc, current) => acc - current);
  }
  return count;
}

console.log(sum({ operator: "+", array: [1, 2, 3, 4, 5] }));
console.log(sum({ operator: "*", array: [1, 2, 3] }));
console.log(sum({ operator: "-", array: [1, 2, 3, 6, 7] }));
