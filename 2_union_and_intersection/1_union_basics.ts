/**
 * Union Basics
 * 
 * Union은 TS에서 Type을 병합 할 수 있는 수 많은 방법 중 하나이다.
 * 
 * 1. 파이프 기호(|)를 활용
 * 2. Interface를 같이 활용
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // StringOrBooleanType이 아니라서 에러 발생

type StringBooleanNullType = string | boolean | null; // 파이브 기호(|)를 활용하여 원하는만큼 타입들을 병합할 수 있다.

type StateTypes = 'DONE' | 'LOADING' | 'ERROR'; // Literal Type 선언

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // StateTypes에 없는 값이므로 에러 발생

/**
 * List의 Union
 */

// string으로 구성된 List 또는 boolean으로 구성된 List
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
  '카즈하',
  '김고은',
  '박소담',
];

stringListOrBooleanList = [
  true,
  false,
  true,
  false,
];

// stringListOrBooleanList = [true, '카즈하']; // string 또는 boolean List이므로 에러 발생

type StringOrNumberList = (string | number)[]; // 괄호를 사용해 여러 type이 믹스된 List를 만들 수 있다.

let stringOrNumberList: StringOrNumberList = [
  1, 2, 3,
  '윤하',
  '뉴진스',
];

stringOrNumberList = [
  1, 2, 3
];

stringOrNumberList = [
  '윤하',
  '뉴진스',
]

/**
 * Interface로 사용하는 Union
 */
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '홍길동',
  age: 32,
  address: '대한민국',
};

// AnimalOrHuman Type으로 선언했지만 TS가 Human Type으로 추론함.
// 왜냐하면 address가 있기 때문.
console.log(animalOrHuman);

animalOrHuman = {
  name: '오리',
  age: 9,
}

// AnimalOrHuman Type으로 선언했지만 TS가 Animal Type으로 추론함.
// 왜냐하면 address가 없기 때문.
console.log(animalOrHuman);

// 그래서 address를 출력하려고 하면 에러 발생
// console.log(animalOrHuman.address);

// 아래처럼 직접 객체 타입을 지정해줄 수 있으나 가독성이 떨어지고 에러 추적이 어려움.
let animalOrHuman2: {
  name: string;
  age: number;
} | {
  name: string;
  age: number;
  address: string;
} = {
  name: '홍길동',
  age: 32,
  address: '대한민국',
};

console.log(animalOrHuman2.address);

animalOrHuman2 = {
  name: '오리',
  age: 9,
};

// TS가 { name: string; age: number; } Type으로 추론했고
// address가 존재하지 않아 에러 발생
// console.log(animalOrHuman2.address);

// 서로 관계가 없는 Union을 선언
type Person = {
  name: string;
  age: number;
}

type Cat = {
  breed: string;
  country: string;
}

// 기본적으로 Union은 객체의 property들의 합집합이다.
type PersonOrCat = Person | Cat;

// 아래와 같이 Person이나 Cat 중 하나라도 충족하면 된다.
let personOrCat: PersonOrCat = {
  // name: '사람', // Person을 충족하지 못함
  age: 32,
  breed: '코리안 숏헤어', // Cat을 충족함
  country: '한국',
};

// 하지만 Person이나 Cat 중 하나라도 충족하지 못하면 에러가 발생한다.
// personOrCat = {
//   // name: '사람',
//   age: 32,
//   // breed: '코리안 숏헤어',
//   country: '한국',
// };