/**
 * Object를 선언하는 기본적인 방법
 */

// name, age property를 가진 key/value 형식의 object literal 선언 방식
const codeFactory = {
  name: '코드 팩토리',
  age: 32,
}

// name, age property를 가진 interface의 객체 선언 방식
interface IPerson {
  name: string;
  age: number;
}
const iPerson: IPerson = {
  name: '박보영',
  age: 30,
}

// name, age property를 가진 type의 객체 선언 방식
type TPerson = {
  name: string;
  age: number;
}
const tPerson: TPerson = {
  name: '박소담',
  age: 28,
}