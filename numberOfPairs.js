// Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// // Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2

const inputArray = [5, 8, 5, 6, 8, 1, 9];
const sum = 16;
function findNoOfPairs(inputarray, sum) {
  let count = 0;
  if (inputarray.length < 2 || Math.max(...inputarray) * 2 < sum) {
    return count;
  }
  for (let i = 0; i < inputarray.length - 1; i++) {
    for (let j = i + 1; j < inputarray.length; j++) {
      if (sum === inputarray[i] + inputarray[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(findNoOfPairs(inputArray, sum));
