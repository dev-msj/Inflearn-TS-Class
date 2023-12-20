/**
 * Narrowing
 * 
 * Union type에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는 것을 의미한다.
 */
let numberOrString: number | string = 'Code Factory';

// number | string type이지만 입력받은 값이 string이므로 string으로 유추된다.
// 이것이 narrowing의 가장 기본적인 개념이다.
console.log(typeof numberOrString); // string

const decimal = 12.3278;

// toFixed는 number type에만 존재하는 메서드다.
console.log(decimal.toFixed(2)); // 12.33

// 그래서 string으로 유추된 numberOrString에서는 사용할 수 없다.
// numberOrString.toFixed();

/**
 * Narrowing의 종류
 * 
 * 1. Assignment Narrowing
 * 2. Typeof Narrowing
 * 3. Truthiness Narrowing
 * 4. Equality Narrowing
 * 5. In operator Narrowing
 * 6. Instanceof Narrowing
 * 7. Discrimated union Narrowing (차별된 유니언 내로잉)
 * 8. Exhaustiveness checking
 */

// 1. Assignment Narrowing
// 특정 값을 할당해서 유추한다.
let numberOrString2: number | string = '윤하';

// string 값을 할당받았으므로 string type으로 유추한다.
console.log(typeof numberOrString2); // string


// 2. Typeof Narrowing
// typeof로 type을 유추한다.
numberOrString2 = Math.random() > 0.5 ? 1123 : '윤하';

if (typeof numberOrString2 === 'string') {
  numberOrString2; // string type으로 유추됨
} else {
  numberOrString2; // number type으로 유추됨
}


// 3. Truthiness Narrowing
// 조건문에서 null이나 undefined를 false로 인식하는 특징을 활용
let nullOrString: null | string = Math.random() > 0.5 ? null : '윤하';

if (nullOrString) {
  nullOrString; // string으로 유추됨
} else {
  nullOrString; // null로 유추됨
}


// 4. Equality Narrowing
// type을 비교해 유추
let numberOrString3: number | string = Math.random() > 0.5 ? 1123 : '윤하';
let numberOrBoolan: string | boolean = Math.random() > 0.5 ? '뉴진스' : true;

// type 추론이 되지 않은 Union type의 변수를 비교하면 값을 비교하지 않고 type을 비교한다.
if (numberOrString3 === numberOrBoolan) {
  numberOrString3; // string
  numberOrBoolan; // string
} else {
  // 위에서 string type에 대한 AND 조건이기 때문에, 
  // 두 변수가 모두 string type인 경우를 제외하고 본래의 type을 그대로 가진다.
  numberOrString3; // number | string
  numberOrBoolan; // string | boolean
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
    1123 : Math.random() > 0.5 ? '안유진' : null;

// number type에 대한 typeof와 Equality Narrowing이 동시에 이뤄진다.
if (typeof numberOrStringOrNull === 'number') {
  numberOrStringOrNull; // number
} else {
  numberOrStringOrNull; // string | null
}


// 5. In operator Narrowing
// in 연산자를 통해 type을 유추한다.
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
}

let dog: Dog = {
  name: '오리',
  type: '요크셔 테리어',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human); // name property가 human에 존재하는가? true

if ('type' in humanOrDog) {
  humanOrDog; // Dog
} else {
  humanOrDog; // Human
}


// 6. Instanceof Narrowing
// instanceof 연산자를 통해 type을 유추한다.
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : 'dog';

if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}


// 7. Discriminated Union Narrowing
// 하나의 범용 interface로 type을 관리하는 것보다 분리하여 관리하는 것이 정확한 type 유추에 유리하다.
// 인터페이스 분리 원칙(ISP, Interface Segregation Principle)에 해당하는 내용
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? {
  type: 'human',
  height: 177,
} : {
  type: 'dog',
  breed: '진돗개'
};

// 범용적인 interface로는 type 유추가 안됨
if (animal.type === 'human') {
  animal.height; // number | undefined
} else {
  animal.breed; // string | undefined
  animal.height; // number | undefined
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog',
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ? {
  type: 'human',
  height: 177,
} : {
  type: 'dog',
  breed: '요크셔 테리어',
};

// interface가 분리되어 type이 유추됨
if (humanOrDog2.type === 'human') {
  humanOrDog2; // Human2
} else {
  humanOrDog2; // Dog2
}


// 8. Exhuastiveness Checkingg
// 체킹을 하면서 Narrowing
switch(humanOrDog2.type) {
  case 'human':
    humanOrDog2; // Human2
    break;
  case 'dog':
    humanOrDog2; // Dog2
    break;
  default:
    humanOrDog2; // never -> 어떠한 변수도 저장되거나 반환되지 않을 때 사용하는 타입

    // 처음 의도는 존재하지 않는 type은 never를 반환하도록 하는 것을 목적으로 했다.
    // 하지만 새로운 type을 추가했을 때, case처리를 해주지 않을 경우 
    // default는 never가 아닌 신규 type이 되기 때문에 에러가 발생한다.
    // 이를 통해 신규 type 적용에 대한 human mistake를 예방할 수 있다.
    const _check: never = humanOrDog2;
    break;
}