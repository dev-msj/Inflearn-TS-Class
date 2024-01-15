/**
 * Override
 * 
 * 부모 클래스의 property와 method를 자식 클래스에서 원하는 형태로 재정의할 수 있다.
 */

/**
 * Method Override
 * 
 * Method Override 규칙
 * 1) 부모 메서드와 반환 타입이 일치해야 한다.
 * 2) 부모 메서드에 있는 파라미터들은 필수로 존재해야 한다.
 * 3) 부모 메서드에 없는 파라미터들을 자식 메서드에서 사용하고 싶다면 optional 형태로 추가해야 한다.
 */
class Parent {
  shout(name: string){
      return `${name} 누나 안녕!`;
  }
}

class WrongChild extends Parent{
  // Method Override 규칙이 지켜지지 않아 에러 발생
  // shout() {
      
  // }
}

class Child extends Parent{
  // me는 부모 메서드에 없으므로 optional type으로 지정
  shout(name: string, me?: string): string {
      if(!me){
          return super.shout(name);
      }else{
          return super.shout(name) + ` 내 이름은 ${me}야!`;
      }
  }
}

const child = new Child();
console.log(child.shout('박보영'));
console.log(child.shout('박보영', '홍길동'));


/**
 * Property Override
 * 
 * Property Override 규칙
 * 1) 더 넓은 타입에서 세부 타입으로 재정의가 가능하다.
 */
class PropertyParent{
  name: string;

  constructor(name: string){
      this.name = name;
  }
}

// class PropertyChild extends PropertyParent{
//     name: number; // 부모 속성과 다른 타입이므로 에러 발생

//     constructor(name: number){
//         this.name = name;
//     }
// }

class PropertyParent2 {
  name?: string | number | undefined;

  constructor(name: string | number){
      this.name = name;
  }
}

class PropertyChild2 extends PropertyParent2{
  name: string; // 부모 속성의 세부 타입을 사용

  constructor(name: string){
      super(name);
      this.name = name;
  }
}

const child2 = new PropertyChild2('헬로우 월드')
child2.name; // string