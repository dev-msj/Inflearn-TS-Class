/**
 * Tuple
 * 
 * JS에는 존재하지 않지만 TS에서 type을 지정하여 tuple을 만들 수 있다.
 */

let humanList: string[] = ['최유진', '고애신'];

// 길이가 2이고 첫번째는 number, 두번째는 string 값을 가진 list 생성
let numberAndStringTuple: [number, string] = [
  // 'first', // 첫번째는 number type이므로 에러 발생
  23,
  'test',
  // 30, // 길이가 2로 정해져 있으므로 에러 발생
];

// 하지만 tuple을 생성한 후에 push하는 것은 에러가 발생하지 않는다.
numberAndStringTuple.push('more?');

// 또한 JS에는 tuple이 없기 때문에 runtime에서는 일반 array이므로 잘 동작하는 것을 확인할 수 있다.
console.log(numberAndStringTuple); // [23, 'test', 'more?']

let unmodifiableTuple: readonly [number, string] = [23, 'test'];

// readolny를 통해 TS에서 push를 막아줄 수 있다.
// unmodifiableTuple.push('more?');


/**
 * Tuple 유추하기
 */

let actresses = ['박소담', '박보영', '김태리'];

// literal list로 생성
let actressesTuple = ['박소담', '박보영', '김태리'] as const; // readonly ["박소담", "박보영", "김태리"]

let stringArray: string[] = [
  ...actresses,
  ...actressesTuple,
  // ...[1, 2, 3] // string[]이므로 spread number list는 에러 발생
];


/**
 * Named Tuple
 * 
 * Tuple의 각 요소에 이름을 지정해줄 수 있다.
 * 그냥 Tuple과 기능적으로는 큰 차이가 없으며,
 * 커서를 tuple 위에 올려놨을 때 나오는 설명을 통해
 * 각 요소가 어떤 의미를 가지는지 알 수 있다.
 */

const namedTuple: [name: string, age: number] = ['test', 30];


/**
 * Assigning Tuple tu Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */

const tuple1: [string, string] = ['test', 'more'];
const tuple2: [number, number] = [1, 2];

// type이 다른 튜플이므로 에러 발생
// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

// type이 동일하므로 할당 가능
let tuple5: [number, number] = tuple2;


/**
 * Tuple과 Array의 관계
 */

let newjeans: [string, string] = [
  '강해린',
  '김민지',
];

// tuple을 array에 할당할 수 있음
let stringArr: string[] = newjeans;

// array를 tuple에 할당할 수 없음
// let newjeans2: [string, string] = stringArr;


/**
 * Multi Dimesional Tuple
 * 
 * tuple로 이뤄진 array를 만들 수 있다.
 */

const tuple2D : [string, number][] = [
  ['test', 30],
  ['박보영', 32],
  ['김태리', 31],
]
