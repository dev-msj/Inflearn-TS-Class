/**
 * Type Inference
 * 
 * 타입 추론: 타입을 굳이 입력하지 않아도 TS가 알아서 유추하는 것.
 */
// 선언된 변수 위에 커서를 올려두면 TS가 유추한 타입을 보여준다.
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = 'test'; // boolean 타입으로 추론되었기 때문에 다른 타입은 사용이 불가능하다.

// string 타입은 맞지만 'const string' 값만 사용 가능하므로 해당 값을 타입으로 보여준다.
// 이것을 Literal Types이라고 부르며 훨씬 더 구체화된 값이다.
const constStringType = 'const string'; // String Literal Types
const constBooleanType = true; // Boolean Literal Types
const constNumberType = 1; // Numeric Literal Types

let yuJin = {
  name: '안유진',
  age: 2003,
};

// yuJin2에 할당된 객체의 주소값이 Literal Type으로 선언되었을 뿐, 그 안의 property는 변경이 가능하다.
const yuJin2 = {
  name: '안유진',
  age: 2003,
};
yuJin2.name = '강해린';
console.log(yuJin2);
console.log(yuJin2.name); // name의 타입이 'string'으로 추론됨

// 객체 안의 property까지 const 캐스팅하여 Literal Type으로 만들었다.
const yuJin3 = {
  name: '안유진' as const,
  age: 2003 as const,
};
// yuJin3.name = '강해린'; // const로 캐스팅 되어 값 변경이 불가능하다.
console.log(yuJin3.name); // name의 타입이 '안유진'으로 추론됨

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5]; // number[] 추론
let numbersAndString = [1, 2, 3, '4', '5']; // (number | string)[] 추론

numbers.push(7);
// numbers.push('7'); // number[]이므로 string은 에러 발생

numbersAndString.push(7);
numbersAndString.push('7'); // (number | string)[]이므로 가능

const number = numbers[0]; // number 타입 추론
const nos = numbersAndString[0]; // (number | string) 타입 추론
const nos2 = numbersAndString[100]; // undefined 반환 -> Index Out Of Range를 예상할 수 없음.

// tuple 선언
const twoNumbers = [1, 2] as const; // readonly [1, 2] 타입 추론

// twoNumbers[0] = 0; // 에러 발생
// twoNumbers.push(100); // 에러 발생
const first = twoNumbers[0]; // Numeric Literal Type인 1을 추론
// const first2 = twoNumbers[3]; // Index Out Of Range에 해당하므로 에러 발생