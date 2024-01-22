/**
 * Generic in Method
 * 
 * 메서드에서 활용되는 generic에 대해 알아보자.
 */

class Idol<T>{
  id: T;
  name: string;

  constructor(id: T, name: string) {
      this.id = id;
      this.name = name;
  }

  // method에 Time이라는 generic 타입을 선언해줄 수 있다.
  sayHello<Time>(logTime: Time){
      return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`;
  }
}

const yuJin = new Idol('a999', '안유진');

// 다음과 같이 generic 타입을 지정해 메서드를 호출할 수 있다.
console.log(yuJin.sayHello<string>('2023'));

// TS가 메서드의 generic 타입을 추론해준다.
console.log(yuJin.sayHello(1992));


// 메서드에서 클래스의 generic 타입을 활용할 수도 있다.
class Message<T> {
  sayHello<Time>(logTime: Time, message: T){
      console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이!');


// 클래스와 메서드의 generic 타입이 중복 선언될 경우 메서드가 우선순위를 가져간다.
// 클래스의 generic 타입의 글씨가 메서드보다 흐릿하게 표시되는 것을 확인할 수 있다.
class DuplicatedGenericName<T>{
  sayHello<T>(logTime: T){
      console.log(`logTime: ${typeof logTime}`);
  }
}

// 클래스에서 generic 타입을 string으로 잡아줘도 메서드에서 number로 잡아주면 number가 된다.
const duplicate = new DuplicatedGenericName<string>();
duplicate.sayHello<number>(123);