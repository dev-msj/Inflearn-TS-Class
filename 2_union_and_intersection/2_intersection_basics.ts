/**
 * Intersection
 * 
 * Union이 "OR"에 해당한다면 Intersection은 "AND"에 해당하는 기능이다.
 * And 기호(&)를 활용해 사용하며, Union과 혼합하여 사용할 수도 있다.
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

// Intersection Type은 병합된 Type들을 모두 충족해야 한다.
let humanAndContacts: HumanAndContacts = {
  name: '홍길동',
  age: 32,
  phone: '01012341234',
  address: '서울시',
};

// Human을 충족하지 못해 에러 발생
// humanAndContacts = {
//   // name: '홍길동',
//   age: 32,
//   phone: '01012341234',
//   address: '서울시',
// };

// primitive type을 interscetion한 값은 논리적으로 존재가 불가능하다.
// 그래서 TS는 이런 type을 never로 추론해버린다.
type NumberAndString = number & string;

// never type이기 때문에 어떤 값을 넣어도 에러 발생
// let numberAndString: NumberAndString = 'string';