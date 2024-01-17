/**
 * Generic 함수에서 사용하기
 * 
 * generic을 통해 파라미터와 리턴 타입을 원하는 형태로 지정해줄 수 있다.
 * 
 * 일반적인 OOP에서는 다음과 같이 Generic 네이밍 규칙을 사용한다.
 * 
 * <T>	        타입(Type)
 * <E>	        요소(Element)  예를 들어 List
 * <K>	        키(Key) 예를 들어 Map<K, V>
 * <V>	        리턴 값 또는 매핑된 값(Variable)
 * <N>	        숫자(Number)
 * <S, U, V>	  2, 3, 4번째 선언된 타입
 */

// 기존에는 any 타입을 활용해 자유롭게 값을 주고 받았다.
// 하지만 any 타입은 "1_basic/1_problem_with_js.js"에 설명된 내용처럼 문제가 많다.
function whatValue(value: any) {
  return value;
}

const value = whatValue('test');

// generic을 활용하면 상황에 맞게 원하는 타입을 활용하면서도 any의 문제점을 해결해줄 수 있다.
// 지정된 타입만 주고 받을 수 있기 때문에 예측이 가능해진다.
function genericWhatValue<T>(value: T): T {
  return value;
}

// <type>을 통해 어떤 타입을 generic으로 활용할 것인지 선언
const genericResult1 = genericWhatValue<number>(123);

// 값을 통해 generic 타입이 추론되는 것도 가능하다.
let genericResult2 = genericWhatValue('123') // string


// 여러개의 파라미터의 타입을 generic 타입을 지정할 수도 있다.
// return 타입이 자동으로 추론된다.
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
      x,
      y,
      z,
  }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  '123',
);

// 파라미터 값에 의해 generic 타입이 추론되는 것을 확인할 수 있다.
const multipleGenericResult2 = multipleGenerics(
  123,
  true,
  '123',
); // <number, boolean, string>


// generic을 활용해 tuple의 타입을 지정해줄 수 있다.
function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const;
}

// 값에 의해 tuple의 generic 타입이 추론되는 것 역시 가능하다.
const tuple = getTuple(true, 100);


// generic 타입인 T는 생성자 함수를 상속받고 있다.
// 이를 통해 generic 타입은 "어떤 타입이든 상관없이 받고 싶은만큼 파라미터를 받으며, 빈 객체를 반환하는 생성자 함수"에
// 해당하거나, 이를 상속받은 생성자만 generic 타입의 파라미터로 받을 수 있다.
// 즉, 특정 조건에 부합하는 타입만 generic 타입으로 사용할 수 있도록 제한할 수 있다.
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
  ...args: any[]) {
  return new constructor(...args);
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
      this.brand = brand;
      this.codeName = codeName;
  }
}

// Idol, Car의 생성자들은 instantiator의 generic 타입에 지정된 조건에 부합하는 생성자들이다.
console.log(instantiator(Idol, '김슬기', 22));
console.log(instantiator(Car, '현다이', 1111));