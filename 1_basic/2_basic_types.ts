/**
 * Types
 */

// 타입을 정의하여 강제할 수 있다.
let helloText: string = 'Hello';
// helloText = true; // 에러 발생

/**
 * JS에 존재하는 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입 [any | unknown | never]
 */
// any: 아무 타입이나 입력할 수 있는 타입. 하지만 남용하면 TS를 쓰는 이유가 없어짐.
let anyVar: any;
anyVar = 100;
anyVar = '팩토리';
anyVar = true;

// any 변수를 아무 타입에나 저장하는 것도 가능하다.
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown: 알 수 없는 타입.
let unknownType: unknown;
unknownType = 100;
unknownType = '팩토리';
unknownType = true;

// unknown 변수를 any/unknown을 제외한 다른 타입의 변수에 저장할 수 없다.
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;

// never: 어떠한 변수도 저장되거나 반환되지 않을 때 사용하는 타입. 아래 코드는 에러가 발생한다.
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';

/**
 * List 타입
 */
const koreanGirlGroup: string[] = ['아이브', '뉴진스', '르세라핌'];
const booleanList: boolean[] = [true, false, true];