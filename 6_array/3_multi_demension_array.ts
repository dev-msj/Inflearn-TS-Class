/**
 * Multiple Demension Array
 */

const number2DArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// string[][] type 유추
const string2DArray = [
  ['t', 'e'],
  ['s', 't'],
];

const stringAndNumberArray: (number | string)[][] = [
  [1, 't', 2, 3],
  ['e', 's', 't', 4],
];

let strArrOrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
strArrOrNumbArr = [
  ['1', '2', '3'],
];

for(let arr of number2DArray){
  arr; // number[] 유추
  for(let item of arr){
      item; // number 유추
  }
}