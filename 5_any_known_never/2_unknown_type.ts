/**
 * Unknown Type
 * 
 * any보다는 조금 더 덜 관대한 type
 */

// any에 어떤 type이든 상관없이 값을 할당받을 수 있다.
let anyValue: any;
anyValue = 24;
anyValue = 'test';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

// unknown에 어떤 type이든 상관없이 값을 할당받을 수 있다.
let unknownValue: unknown;
unknownValue = 24;
unknownValue = 'test';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 어떤 type이든 상관없이 any 값을 할당해줄 수 있다.
let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let objectType: {} = anyValue;
let nullType: null = anyValue;
let undefinedType: undefined = anyValue;

// any|unknown을 제외한 나머지 type에는 unknown 값을 할당해줄 수 없다.
let anyType2: any = unknownValue;
let unknownType2: unknown = unknownValue;
// let booleanType2: boolean = unknownValue;
// let arrayType2: string[] = unknownValue;
// let objectType2: {} = unknownValue;
// let nullType2: null = unknownValue;
// let undefinedType2: undefined = unknownValue;

// runtime에서는 에러가 발생하지만 컴파일 레벨에서는 에러를 발생하지 않음.
// 타언어의 Unchecked Exception에 해당
anyValue.toUpperCase();
anyValue.name;
new anyValue();

// 알 수 없는 값이기 때문에, 해당값을 활용한 다른 행위를 제한하므로 에러 발생.
// any보다 더 타이트한 타입으로 버그가 발생할 여지를 줄인다.
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

// type predicate를 통한 narrowing도 가능하다.
function isString(target: unknown): target is string {
  return typeof target === 'string';
}

let testVal: unknown;
if (isString(testVal)) {
  testVal; // string
}

// 위 내용들로 봤을 때, type을 알 수 없다면, any보다는 unknown을 사용하는 것이 더 좋을 것 같다.


/**
 * Union Type
 */

// unknown과 일반적인 type을 union하면 그냥 unknown type으로 된다.
type unknownOrString = unknown | string; // unknown
type unknownOrBoolean = unknown | boolean; // unknown
type unknownOrNumber = unknown | number; // unknown

// unknown과 any type을 union하면 그냥 any type이 된다.
type unknownOrAny = unknown | any; // any
type anyOrUnknown = any | unknown; // any


/**
 * Intersection Type
 */

// unknown과 일반적인 type을 intersection하면 일반적인 type으로 된다.
type unknownAndString = unknown & string; // string
type unknownAndBoolean = unknown & boolean; // boolean
type unknownAndNumber = unknown & number; // number

// unknown과 any type을 intersection하면 그냥 any type이 된다.
type unknownAndAny = unknown & any; // any
type anyAndUnknown = any & unknown; // any


/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// 알 수 없는 값이므로 사칙 연산이 불가능하다.
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

// 알 수 없는 값이지만 비교 연산은 가능하다.
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;