/**
 * Generic in Inheritance
 * 
 * 상속에서 generic 활용하는 다양한 방법.
 */
class BaseCache<T>{
  data: T[] = [];
}

// 부모 클래스의 generic을 string 타입으로 하여 상속받는다.
class StringCache extends BaseCache<string>{ }

const stringCache = new StringCache();
stringCache.data; // string[]

// 부모 클래스의 generic을 자식 클래스에서 활용할 수 있다.
class GenericChild<T, Message> extends BaseCache<T>{
  message?: Message;

  constructor(message?: Message) {
      super();
      this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data; // string[]
genericChild.message; // string | undefined


/**
 * 제너릭의 inheritance
 * 
 * generic 타입이 부모 클래스를 상속받도록 하는 것이다.
 * 이를 통해 부모 클래스이거나 부모 클래스를 상속받지 않은 형태는
 * generic으로 사용할 수 없도록 제한할 수 있다.
 * 
 * => 1_generic_in_method에서 다룬 생성자 내용 참조.
 */
interface BaseGeneric {
  name: string;
}

interface TestGeneric extends BaseGeneric {
  age: number;
}

// generic 타입인 T는 BaseGeneric의 형태를 가진 타입만 받을 수 있다.
class Idol<T extends BaseGeneric>{
  information: T;

  constructor(information: T) {
      this.information = information;
  }
}

// age만 있게 된다면 BaseGeneric 타입을 벗어나므로 에러가 발생한다.
// name만 있거나, name을 포함하고 있어야 한다.
const yuJin = new Idol({
  name: '안유진',
  age: 23,
});


/**
 * keyof 함께 사용하기
 * 
 * generic에서 keyof 키워드를 활용해 객체가 가진 키값들만 접근할 수 있도록 제한할 수 있다.
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
}

// "keyof Obj"를 상속받은 generic 타입인 K는 generic 타입인 Obj가 가진 key값들만 받을 수 있다고 제한한다.
// 이를 통해 Obj에 어떤 타입이 지정될지 몰라도 obj[key]가 문제없이 동작할 수 있도록 할 수 있다.
function objectParser<Obj, K extends keyof Obj>(obj: Obj, key: K) {
  return obj[key];
}

const val = objectParser(testObj, 'c'); // 3


/**
 * Ternary(삼항 연산자)
 * 1 === 2 ? true : false
 * 
 * 삼항 연산자를 활용해 generic 타입을 특정 타입으로 변환시켜줄 수 있다.
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

// generic 타입인 T는 Idol2이거나 Idol2를 상속받은 클래스만 사용할 수 있다.
// 만약 T에 선언된 타입이 MaleIdol이라면 MaleIdol 타입을 반환하고, 아니면 FemaleIdol 타입을 반환한다.(삼항 연산자)
type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol(); // idol2는 SpecificIdol<MaleIdol>이 아니라 MaleIdol이다.
const idol3: SpecificIdol<FemaleIdol> = new FemaleIdol(); // idol3는 SpecificIdol<FemaleIdol>이 아니라 FemaleIdol이다.