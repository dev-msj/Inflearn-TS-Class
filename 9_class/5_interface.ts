/**
 * Interface
 * 
 * 인터페이스를 통해 클래스의 구현 내용을 강제할 수 있게 해준다.
 * OOP 관점에서의 Interface이며, JS에는 존재하지 않는다. 
 */

/**
 * 일반적인 인터페이스 구현
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

// Animal interface가 가진 name, age, jump()를 모두 구현하지 않으면 에러가 발생한다.
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  jump(): string {
      return `${this.name}이 점프를 합니다.`;
  }

  dance() {

  }
}

// type predicate를 활용해 any인 ori가 Animal로 추론될 수 있다.
let ori: any = new Dog('오리', 3);
function instanceOfAnimal(object: any): object is Animal {
  return 'jump' in object; // Animal의 요소인 jump가 존재하는가?
}

if (instanceOfAnimal(ori)) {
  ori; // Animal
}

/**
* 다중 인터페이스 구현
*/
interface Pet {
  legsCount: number;
  bark(): void
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
      this.name = name;
      this.age = age;
      this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
      return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
      console.log('냐옹');
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
      this.name = name;
      this.age = age;
      this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
      return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
      console.log('냐옹');
  }
}

/**
 * 잘못된 인터페이스 활용법
 */
interface WrongInterface1 {
  name: string | number;
}

interface WrongInterface2 {
  name: number;
}

// 인터페이스 구현 시에는 정의된 내용을 그대로 구현해야 한다.
// 그래서 다음과 같이 다중 인터페이스 구현 시에 property명이 동일한데 다른 type을 가질 경우 에러가 발생한다.
// name의 type은 WrongInterface1나 WrongInterface2 둘 중 하나만 충족할 수 있기 때문이다.
// class Person implements WrongInterface1, WrongInterface2{
//   name: number;
//   name: number | string;
// }

/**
 * 생성자를 가진 인터페이스를 통해 객체를 생성하는 법.
 * 
 * Generic에서 활용된다.
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

// interface를 통해 생성자 형태의 메서드를 정의해준다.
interface IdolConstructor {
  new(name: string, age: number): Idol;
}

// constructor 변수는 name과 age를 매개변수로 받으며, Idol을 반환하는 생성자를 가진 객체만 받을 수 있다.
function createIdol(constructor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age); // 아래 코드는 Idol 객체를 생성하는 것과 동일하다.
  return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유', 32)); // Idol 객체가 생성됨.