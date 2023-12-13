/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;
type NewNumberType = number;
type NewNullType = null;
type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

/**
 * 기본적으로 JS는 모든 파일을 합쳐서 하나의 파일로 인식한다.
 * 그래서 각 파일들마다 다르게 변수를 관리하고 싶으면
 * tsconfig.json 파일에서 "moduleDetection" 옵션을
 * "auto"가 아닌 "force"로 변경해주면 된다.
 * 그러면 "module" 옵션을 "commenjs"를 사용해 모듈을 구성하라는 뜻이 된다.
 * 
 * 1. 웹 브라우저 환경에서 사용 - auto(모든 파일을 하나의 스코프로 인식)
 * 2. 서버 사이드 환경에서 사용 - force(각 파일별로 스코프 인식)
 */

type IodlType = {
  name: string;
  year: number;
}
const yuJin: IodlType = {
  name: '안유진',
  year: 2002,
}


/**
 * Interface
 * 
 * 기본적으로는 Type과 비슷한 기능을 한다.
 * Type이 할 수 없는 몇가지 문제점들을 해결하기 위해 나왔다.
 * 그래서 Type과 다르게 Interface만 가능한 기능들이 존재한다.
 * 
 * Interface는 기본적으로 객체의 형태로 선언하기 때문에
 * 변수/함수/객체를 선언해줄 수 있다.
 * 하지만 Type처럼 primitive 타입을 지정해줄 수는 없다.
 */
interface IdolInterface {
  name: string;
  year: number;
}
const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2002,
};

interface IdolInterface2 {
  name: NewStringType;
  year: NewNumberType;
}
const yuJin3: IdolInterface2 = {
  name: '안유진',
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}
const yuJin4: IdolOptional = {
  name: '안유진',
  // year: 2002, // optional이므로 입력하지 않아도 된다.
};