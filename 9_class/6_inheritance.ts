/**
 * Inheritance
 * 
 * extends 키워드를 통해 클래스를 상속할 수 있다.
 */
class Parent {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  dance() {
      console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

// Parent 클래스를 상속
class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
      super(name);

      this.age = age;
  }

  sing() {
      console.log(`child : ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
// codefactory.sing(); // sing은 자식 클래스의 요소이므로 에러 발생

ahri.dance(); // 부모 클래스의 요소는 자식 클래스도 사용할 수 있다.
ahri.sing();

let person: Parent;
person = codefactory;
person = ahri; // 자식 클래스는 부모 클래스 타입에 값을 할당할 수 있다.

let person2: Child;
person2 = ahri;
// person2 = codefactory; // 부모 클래스는 자식 클래스 타입에 값을 할당할 수 없다.

/**
 * optional 프로퍼티를 유의하자.
 * 
 * 원래 OOP라면 자식 클래스 타입에 부모 클래스 값을 할당할 수 없다.
 * 하지만 TS는 Type만 보기 때문에 상속된 클래스라고 하더라도 
 * 강제적으로 값 할당이 가능하게 만들 수 있다는 점에 유의해야 한다.
 */
class Parent2{
  name: string;

  constructor(name: string){
      this.name = name;
  }
}

// age가 optional이므로 age가 존재하지 않을 수도 있다.
class Child2 extends Parent2{
  age?: number;

  constructor(name: string, age?: number){
      super(name);
      this.age = age;
  }
}

const codefactory2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

console.log(codefactory2 instanceof Child2);

let child: Child2;
child = ahri2;

// Parent2는 age가 존재하지 않지만 Child2의 age가 optional이므로 값을 할당할 수 있다.
// 그냥 age가 undefined인 객체를 할당받는 상황이 되는 것이다.
// 결국 TS의 근간은 JS이므로 OOP를 따르려고 하지만 OOP와는 다르다.
child = codefactory2;