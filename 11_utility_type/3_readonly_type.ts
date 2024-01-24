/**
 * Readonly Type
 * 
 * 일반 객체가 읽기만 가능한 객체가 되도록 설정하는 타입이다.
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: '냐옹이',
  age: 8
};

// 일반 객체에서는 property 수정이 가능하다.
nyaong.name = '코드팩토리';

const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
}

// Readonly 타입이 되어 property 수정이 불가능하다.
// bori.name = '아이유';

// readonly는 TS에만 있는 개념이다. JS에서는 다음과 같이 freeze를 활용해야 한다.
Object.freeze(bori);