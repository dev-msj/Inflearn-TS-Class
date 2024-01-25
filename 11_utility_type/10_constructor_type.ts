/**
 * Constructor Parameter
 * 
 * 클래스 생성자의 파라미터들을 타입으로 생성한다.
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

// Idol 클래스의 생성자의 파라미터들을 타입으로 생성한다.
type ConstructorParamType = ConstructorParameters<typeof Idol>; // [name: string, age: number]