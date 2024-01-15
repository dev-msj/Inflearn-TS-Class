/**
 * Abstract class
 * 
 * 추상 클래스는 그 자체로는 인스턴스화 하여 사용할 일이 없으나, 공유되는 property나 method를 정의하고 싶을 때 사용한다.
 * 그래서 자체적으로는 직접 인스턴스를 생성할 수 없으며, 필요한 클래스들이 상속받아 내용을 추상화된 내용을 구현하여 사용한다.
 * JS에는 없는 개념이다.
 * 
 * 일반적인 OOP에서는 인터페이스를 활용해 전체적인 구조를 짜고, 
 * 그 외에 추가로 객체들 간의 공유되는 내용이 필요할 경우 추상 클래스를 활용하는 것으로 알고 있다...
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
      this.id = id;
  }

  comeOn(): string {
    return '이리와~';
  }
}

// const modelWithId = new ModelWithId(123); // 추상 클래스는 인스턴스를 생성할 수 없으므로 에러 발생

class Product extends ModelWithId{

}

const product = new Product(1);
product.id; // 추상 클래스에 정의된 속성을 사용할 수 있다.
console.log(product.comeOn()); // 추상 클래스에 정의된 구현체를 사용할 수 있다.

abstract class ModelWithAbstractMethod{
  // 메서드를 추상화시킬 수 있다.
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
  // 추상화된 메서드를 구현한다.
  shout(name: string): string {
      return '소리질러~';
  }
}

const person = new Person();
console.log(person.shout('김경호')); // 구현된 메서드를 호출