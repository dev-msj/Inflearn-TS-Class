/**
 * Object Union
 * 
 * type이 객체 타입 유니언을 다룰 때 주는 장점
 */

// 다음과 같이 객체 리터럴로 Dog이거나 Cat인 값을 받는다고 해보자.
// 그럼 다음과 같이 TS는 Dog나 Cat에 존재하지 않는 property는 optional로 지정해버린다.
// {
//   name: string;
//   age: number;
//   breed?: undefined;
// } | {
//   name: string;
//   breed: string;
//   age?: undefined;
// }
const dogOrCat = Math.random() > 0.5 ? 
{
  // 강아지
  name: '설탕이',
  age: 3,
} : {
  // 고양이
  name: '소금이',
  breed: '코리안 길냥이',
};

// 그래서 dog인지 cat인지 알 수 없어도 optional하기 때문에 age와 breed를 호출하는데 문제가 없다.
dogOrCat.name; // string
dogOrCat.age; // number | undefined
dogOrCat.breed; // string | undefined

// 하지만 아래와 같이 Dog와 Cat을 유니언한 타입을 지정하면 결과는 다르다.
interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? 
{
  // 강아지
  name: '설탕이',
  age: 3,
} : {
  // 고양이
  name: '소금이',
  breed: '코리안 길냥이',
};

// Math.random을 통해 얻은 결과값의 타입이 Dog인지 Cat인지 알 수 없기 때문에
// 특정 타입에 종속적인 property들을 호출하려고 하면 에러를 던진다.
dogOrCat2.name; // string
// dogOrCat2.age; // Dog인지 Cat type인지 알 수 없기 때문에 에러 발생
// dogOrCat2.breed; // Dog인지 Cat type인지 알 수 없기 때문에 에러 발생

// 그래서 다음과 같이 타입 내로잉을 하여 타입을 명확하게 해줬을 때만 특정 property를 사용할 수 있게 된다.
if ('age' in dogOrCat2) {
  dogOrCat2; // Dog
  dogOrCat2.age;
} else {
  dogOrCat2; // Cat
  dogOrCat2.breed;
}

// 즉, 객체들의 타입을 명확하게 하여 해당 객체들을 마음대로 다룰 수 없도록 강제할 수 있다.