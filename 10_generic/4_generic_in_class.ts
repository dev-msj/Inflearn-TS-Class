/**
 * Generic in Class
 * 
 * 클래스의 property의 타입을 generic으로 활용할 수 있다.
 */

// 1_generic_in_function의 설명처럼 generic type의 네이밍은 자유롭게 설정할 수 있다.
class Pagination<Data, Message>{
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data; // number[]
pgData.message; // string | undefined
pgData.lastFetchedAt; // Date | undefined

// constructor에서도 generic이 적용된다.
class Pagination2<Data, Message>{
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date){
      this.data = data;
      this.message = message;
      this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2([123, 456]);

// generic 타입 유추가 가능하다.
pagination2.data; // number[]
pagination2.message; // unknown => 파라미터를 주지 않아 타입 유추를 할 수 없어서 unkown이 됨.
pagination2.lastFetchedAt; // Date | undefined

// 기본 타입을 지정해줄 수 있다.
class DefaultGeneric<T= boolean>{
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // boolean[]