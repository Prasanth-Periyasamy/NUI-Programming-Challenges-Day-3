// Find the common numbers in two arrays
// const arr1 = [3, 45, 42, 11, 34,45];
// const arr2 = [35, -7, 87, 11, 1, 45]
// findCommon(arr1, arr2)
// Output = [11, 45]

const inputArray1 = [3, 45, 42, 11, 34];
const inputArray2 = [35, -7, 87, 11, 1, 45];
function findCommonNumbers(inputarray1, inputarray2) {
  const commonElements = [];
  if (inputarray1.length === 0 || inputarray2.length === 0) {
    return commonElements;
  }
  for (let i = 0; i < inputarray1.length; i++) {
    if (inputarray2.includes(inputarray1[i])) {
      if (!commonElements.includes(inputarray1[i])) {
        commonElements.push(inputarray1[i]);
      }
    }
  }
  return commonElements;
}
console.log(findCommonNumbers(inputArray1, inputArray2));
