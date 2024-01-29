/**
 * Class Decorator
 * 
 * 데코레이터를 통해 클래스가 생성될 때, 원하는 동작을 하도록 정의할 수 있다.
 */

@Test
// @TestNoArg() // 에러 발생
@Frozen
@LogTest('PROD')
@ChangeClass
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Idol 클래스의 객체를 선언할 때, 클래스 위에 선언된 데코레이터를 통해 Test 메서드를 실행하는 것을 확인할 수 있다.
// 클래스 데코레이터로 사용하기 위해서는 constructor를 파라미터로 넘겨줘야 한다.
function Test(constructor: Function) {
  console.log(constructor);
}

// 파라미터가 없는 데코레이터를 넘겨줄 경우 위와 같이 에러가 발생하는 것을 확인할 수 있다.
function TestNoArg() {
  console.log('no...')
}

// 데코레이터에 전달된 constructor를 조회하거나 freeze할 수 있다.
function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 23);

console.log(Object.isFrozen(yuJin.constructor)); // true
console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); // true

// decorator factory: 데코레이터가 실행될 때 파라미터를 넘겨줄 수 있다.
// 아래의 LogTest는 env를 인자로 받지만 constructor를 파라미터로 받는 function을 반환하므로 데코레이터가 될 수 있다.
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  }
}

// 데코레이터는 맨 처음 클래스가 읽힐 때만 동작한다.
// 그래서 아래의 wonToung에 객체를 생성할 때는 데코레이터가 동작하지 않는다.
const wonYoung = new Idol('장원영', 22);
console.log(wonYoung);

// 데코레이터를 통해 객체의 property를 조작할 수 있다.
// ChangeClass은 class generic으로 new 키워드를 활용해 파라미터를 받는 생성자 타입만 인자로 받을 수 있도록 제한한다.
// 파라미터로 받는 생성자의 타입은 generic 타입을 받고
// 내부의 function은 constructor를 상속받은 class를 정의하여 반환한다.
// 즉, 데코레이터를 선언한 클래스의 생성자를 파라미터로 받고, 그 생성자를 상속한 자식 클래스로 재정의하는 것이다.
function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor{
    groupName = '아이브'; // groupName이 property로 추가된다.
    name = '레이'; // name에 할당된 값이 '레이'로 변경된다.

    constructor(...params: any[]){
      super(...params);

      console.log('constructor instantiated');
    }
  }
}