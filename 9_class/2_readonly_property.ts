/**
 * readonly property
 * 
 * readonly를 통해 특정 property가 읽기만 가능하도록 만들 수 있다.
 */

class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32; // 일반 property이므로 값을 수정할 수 있음.
// yuJin.name = '홍길동'; // readonly property이므로 값을 수정할 수 없음.

// readonly는 dto와 같이 immutable한 객체를 만들 때 활용할 수 있다.