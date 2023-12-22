/**
 * Never Type
 * 
 * 일어날 수 없는 상황이다라는 의미를 가진다.
 */

// 1. 함수에서 에러만 던질 때 => return이 발생할 수 없다.
function throwError(): never {
  throw Error();
}

// 2. 무한 루프 => return이 발생할 수 없다.
function infiniteLoop(): never {
  while(true) {}
}

// 3. 존재할 수 없는 intersection => 값이 존재할 수 없다.
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;