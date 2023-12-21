/**
 * Statement and Expression
 */

// statement (문장)으로 함수 선언
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}

// expression (표현식)으로 함수 선언
const addTwoNumbersExp = (x: number, y: number): number => {
  return x + y;
}

/**
 * Statement
 * 
 * 파라미터 타입과 리턴 타입을 매번 작성해야 한다.
 */
function add(x: number, y: number): number {
  return x + y;
}

function sub(x: number, y: number): number {
  return x - y;
}

function multi(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 * 
 * 함수 시그니처를 활용하여 Expression으로 선언된 함수의 type으로 지정하여
 * 파라미터 타입과 리턴 타입을 생략할 수 있다.
 */
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = (x, y) => {
  return x + y;
}

const sub2: CalculationType = (x, y) => {
  return x - y;
}

const multi2: CalculationType = (x, y) => {
  return x * y;
}

const div2: CalculationType = (x, y) => {
  return x / y;
}