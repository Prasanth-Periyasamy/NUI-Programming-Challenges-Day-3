// Last Position Change in arrays
// const arr1 = [3, 45, 42, 11, 34];
// changePosition(arr1, 2);
// Output -> [11, 34, 3, 45, 42];
// changePosition(arr1, 3);
// output -> [42, 11, 34, 3, 45]

const inputArray = [3, 45, 42, 11, 34];
const rotationCount = 3;
function rotateLastElement(inputarray, rotationCount) {
  if (rotationCount < 1 || inputarray.length < 2) {
    return inputarray;
  }
  for (let i = 1; i <= rotationCount; i++) {
    inputarray.unshift(inputarray.pop());
  }
  return inputarray;
}
console.log(rotateLastElement(inputArray, rotationCount));
