/**
 * Nested Object
 * 
 * 타입을 활용해 더욱 효율적으로 중첩 객체에 대한 에러 트래킹을 할 수 있다.
 */

type NestedPerson = {
  identity: {
    name: string,
    age: number,
  },
  nationality: string, 
}

type TPerson = {
  identity: TPersonIdentity,
  nationality: string, 
}

type TPersonIdentity = {
  name: string,
  age: number,
}

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

// identity의 property 중 하나를 주석처리해보자.
// 그렇다면 identity의 객체가 가진 모든 property를 보여주며, 해당 형태에 맞지 않는다는 에러를 보여준다.
// 만약 이 객체가 가진 property가 매우 많다면 가독성은 매우 떨어질 것이다.
const gildong: NestedPerson = {
  identity: {
    name: '홍길동',
    age: 30,
  },
  nationality: '한국',
}

// 하지만 아래와 같이 identity의 타입을 TPersonIdentity나 IPersonIdentity으로 지정해주면,
// 위와 같은 문제가 발생했을 때, 단순히 타입명을 읽는 것만으로도 무엇을 충족하지 못했는지 금방 파악할 수 있다.
const dongsu: TPerson = {
  identity: {
    name: '김동수',
    age: 31,
  },
  nationality: '한국',
}

const sujung: IPerson = {
  identity: {
    name: '오수정',
    age: 29,
  },
  nationality: '한국',
}