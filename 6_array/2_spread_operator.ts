/**
 * Spread Operator
 */

const onlyStrings = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

// arr1은 string[]으로 유추됨
const arr1 = [
  ...onlyStrings,
]

// arr2는 (string | number)[]으로 유추됨
const arr2 = [
  ...onlyStrings,
  ...onlyNumbers,
]