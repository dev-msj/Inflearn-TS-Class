/**
 * Type Predicate
 * 
 * type을 알 수 없는 변수의 type을 체크하고,
 * 그 조건을 충족하면 해당 type으로 narrowing해주는 함수.
 */
function isNumberReturnBoolean(input: any): boolean {
  return typeof input === 'number';
}

function isNumber(input: any): input is number {
  return typeof input === 'number';
}

let value: any = 5;

// value의 type은 체크할 수 있으나 조건문에서도 여전히 any type이다.
if (isNumberReturnBoolean(value)) {
  value; // any
}

// value의 type을 체크하고 조건문에서 체크한 type으로 변경된다.
// 일종의 narrowing으로 생각할 수 있다.
if (isNumber(value)) {
  value; // number
}

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

function isDog(animal: DogOrCat): animal is Dog {
  return (animal as Dog).age !== undefined;
}

const dogValue: DogOrCat = {
  name: '개',
  age: 3,
}

if (isDog(dogValue)) {
  dogValue; // Dog
} else {
  // dogValue의 값은 Cat type 객체를 만들 수 없기 때문에 never가 된다.
  dogValue; // never
}

// else문에서 Cat type으로 narrowing하기 위해서는
// 다음과 같이 Cat type 객체를 생성할 수 있도록 해주면 된다.
const doge: DogOrCat = Math.random() > 0.5 ? {
  name: '도지',
  age: 32,
} : {
  name: '오리',
  breed: '코리안 길냥이'
}