/**
 * Function Type
 */

const runner = () => {
  return ['강해린', '하니', '킴민지'].map(
    (x) => `뉴진스 멤버: ${x}`,
  );
}
console.log(runner());

type Mapper = (x: string) => string; // 함수 시그니처를 type으로 선언

const runner2 = (callback: Mapper) => {
  return ['강해린', '하니', '킴민지'].map(callback);
}
console.log(runner2((x) => `뉴진스 멤버: ${x}`)); // 시그니처를 전달
// console.log(runner2((x) => 1)); // string을 반환한다고 했는데 1을 반환하므로 에러 발생

type MultiplyTwoNumbers = (x: number, y: number) => number;

// MultiplyTwoNumbers 시그니처로 인해 parameter/return type을 정의해주지 않아도 유추 가능
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
}


/**
 * Interface로 함수 type 선언하기
 */

interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

// IMultiplyTwoNumbers로 인해 parameter/return type을 정의해주지 않아도 유추 가능
const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y) => {
  return x + y;
}