/**
 * Optional and Undefined Property
 * 
 * optional하게 property를 선언하는 것과 undefined 타입을 지정해주는 것의 차이
 */

interface Dog {
  name: string,
  age: number,
  // 종을 모를 경우 undefined
  breed?: string,
}

const sugar: Dog = {
  name: '설탕이',
  age: 2,
  breed: '말티즈',
}

// breed property를 생략하면 생략된 property는 자동으로 undefined가 된다.
const salt: Dog = {
  name: '소금이',
  age: 1,
}

interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

// breed property를 생략하면 에러가 발생한다.
// 그래서 breed property를 만들고 직접 undefined를 지정해줘야 한다.
const butterfly: Cat = {
  name: '나비',
  age: 3,
  breed: undefined,
}


// 실제 서비스에서는 동일한 의미의 객체임에도 비즈니스적인 이슈로 값이 존재할 수도 있고 하지 않을 수도 있는 property가 존재한다.
// 이러한 문제를 해결하기 위해 optional한 property를 제공함으로써 불필요하게 동일한 class를 2개 작성하지 않을 수 있도록 할 수 있다.