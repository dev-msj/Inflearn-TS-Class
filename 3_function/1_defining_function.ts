/**
 * Defining Function
 */

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 연인 사이입니다.`;
}

console.log(returnTwoCouples('여자1', '남자2'));


/**
 * Optional Parameter
 */

function multiplyOrReturn(x: number, y?: number) { // y는 undefined일 수 있다.
  if (y) {
    return x * y;
  }

  return x;
}

console.log(multiplyOrReturn(10, 20)); // 200
console.log(multiplyOrReturn(10)); // 10

function multiplyOrReturn2(x: number, y: number = 20) { // y의 기본값은 20이다.
  return x * y;
}

console.log(multiplyOrReturn2(10)); // 200
console.log(multiplyOrReturn2(10, 30)); // 300


/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `test - ${x}`);
}

console.log(getInfiniteParameters('뉴진스', '르세라핌', '아이브'));


/**
 * Retrun Type
 */

function addTwoNumbers(x: number, y: number): number {
  return x + y;
}

addTwoNumbers(10, 20); // number를 return type으로 추론

function randomNumber() {
  return Math.random() > 0.5 ?
      10 : '랜덤';
}

randomNumber(); // (10 | '랜덤')을 return type으로 추론

function subtractTwoNumbers(x: number, y: number): number {
  // return '이게 반환이 되나?'; // string type은 에러 발생
  return x - y;
}

// arrow function 선언
const subtracTwoNumbersArrow = (x: number, y: number) : number => {
  return x - y;
}


/**
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn(): void {
  console.log('저는 반환을 하지 않습니다.');
}

function doNotReturn2(): void {
  console.log('저는 반환을 하지 않습니다.');

  return;
}

doNotReturn();
doNotReturn2();

// 반환 type이 never일 경우에는 return이 발생할 수 없는 구조를 만들어야 한다.
// 무한 루프에 빠지거나, 에러를 던지거나 하는 경우가 여기에 해당한다.
function neverEndingLoop(): never {
  while(true){

  }
}

function throwErro2(): never{
  throw Error();
}