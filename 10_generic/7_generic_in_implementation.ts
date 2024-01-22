/**
 * Generic in Implementation
 * 
 * 구현에서 generic을 활용하는 방법
 */

interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

// T, V를 string, number로 잡아서 구현을 한다.
// 그래서 자동으로 name과 sing도 string, number로 잡힌다.
class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  sing(year: number): void {
      console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

const yuJin = new Idol('강해린');
yuJin.sing(2003);

// Singer 인터페이스의 generic을 그대로 받아서 클래스를 구현하는 경우.
// name과 sing은 generic 타입인 T와 V를 활용하게 된다.
class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
      this.name = name;
  }

  sing(year: V): void {
      console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

// 클래스를 생성할 때 generic 타입을 정의해줘야 한다.
const wonYoung = new Idol2<string, number>('장원영');
wonYoung.sing(2003);