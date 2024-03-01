/**
 * Export
 * 
 * 외부에서 사용하고자 할 모듈을 export 할 수 있다.
 */
export class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

export const rose = new IdolModel('로제', 28);

export const number = 999;

export interface ICat{
  name: string;
  age: number;
}

export default {
  name: '코드팩토리',
  age: 23,
}