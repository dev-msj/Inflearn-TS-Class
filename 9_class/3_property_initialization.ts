/**
 * Property Initialization
 */

class Person {
  // 일반적인 필수값 선언법
  name: string;

  // 초기값 제공 선언법
  age: number = 29;

  // optional 값 선언법
  pet?: string;

  // type or undefined 선언법
  petAge: number | undefined;

  constructor(name: string, pet?: string) {
    this.name = name;
    this.pet = pet;
  }
}

// 아래와 같이 property 초기화를 constructor가 아닌 initialize를 통해 진행할 경우, 
// TS는 해당 property가 초기화되었는지 알 수 없으므로 에러가 발생한다.
// 이럴 때 연산자 !를 활용해 해당 property가 초기화된다는 것을 보장해줄 수 있다.
class RouteStack {
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}