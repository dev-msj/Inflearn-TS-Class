/**
 * Export
 * 
 * ECMAScript부터는 namespace 대신 export와 import 키워드를 사용한다.
 * export default는 import 시에 해당 모듈이 기본으로 사용되도록 한다.
 */

// export default class IdolModel {
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number){
      this.name = name;
      this.age = age;
  }
}

// export default number;
const number = 12;

// 인터페이스도 export default 시킬 수 있다.
// export default interface ICat {
interface ICat {
  name: string;
  breed: string;
}

// 여러 개의 값들을 객체로 묶어서 export default 할 수 있다.
// 하지만 객체 형태이므로 interface는 포함시킬 수 없다.
export default {
  IdolModel,
  number,
}