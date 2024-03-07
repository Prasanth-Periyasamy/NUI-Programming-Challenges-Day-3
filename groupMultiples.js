// Group multiples from 1 to 10
// const arr1 = [34, 12, 10, 15, 7, 21, 81]
// Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]

const inputArray = [34, 12, 10, 15, 7, 21, 81, 80];
const multiples = 20;
function findGroupOfMultiples(inputarray, multiples) {
  const result = [];
  for (let i = 1; i <= multiples; i++) {
    const divisibles = [];
    for (let j = 0; j < inputarray.length; j++) {
      if (inputarray[j] % i === 0) {
        divisibles.push(inputarray[j]);
      }
    }
    result.push({ [i]: divisibles });
  }
  return result;
}
console.log(findGroupOfMultiples(inputArray, multiples));
