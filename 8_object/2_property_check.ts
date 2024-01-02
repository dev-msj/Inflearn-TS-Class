/**
 * Property Check
 * 
 * 초과 속성 검사
 */

type TName = {
  name: string;
}

type TAge = {
  age: number;
}

// type이 지정된 객체 리터럴을 생성하면, 해당 type과 동일한 property들을 가지는지 check를 한다.
// 만약 초과되는 속성이 존재할 경우 에러가 발생한다.
// 그래서 아래 객체에 TName이나 TAge type을 지정할 수 없다. 
const boyoung = {
  name: '박보영',
  age: 30,
}

// 하지만 이미 선언이 되어 있는 type이 지정되지 않은 객체 리터럴의 경우
// type이 지정된 변수에 할당할 때는 type narrowing이 발생한다.
// 그래서 초과 속성이 존재해도 에러가 발생하지 않는다.
const testName: TName = boyoung;
const testAge: TAge = boyoung;

// 즉, 초과 속성 검사는 객체 리터럴을 직접 입력할 때만 작동한다는 것을 알 수 있다.