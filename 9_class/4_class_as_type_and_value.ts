/**
 * Class as Type and Value
 * 
 * Class는 타입으로 사용할 수 있지만 값으로도 사용할 수 있다.
 */

class Dog {
  name: string;

  constructor(name: string){
      this.name = name;
  }

  bark(){
      return `${this.name}가 짖습니다`;
  }
}

// class 형태로 값을 선언함과 동시에 타입이 된다.
let ori = new Dog('오리'); // ori는 Dog 타입이다.
console.log(ori.bark());

// ori = '오리'; // Dog 타입이므로 string 타입을 넣을 수 없다.

// 객체 리터럴 형식으로도 Dog 타입 선언을 할 수 있다. class는 곧 객체이기 때문.
ori = {
  name: '별이',
  bark(){
      return `${this.name}가 짖습니다.`;
  }
}

console.log(ori);