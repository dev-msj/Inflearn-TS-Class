/**
 * Object Intersection
 */

// 기존 primitive 타입은 never 타입을 뱉어낸다.
type PrimitiveIntersection = string & number;

type TPerson = {
  name: string;
  age: number;
}

type TCompany = {
  company: string;
  companyRegistrationNumber: number;
}

type TPersonAndCompany = TPerson & TCompany;

// 객체를 인터섹션하면 proeprty들의 합집합이 된다.
const booyoung: TPersonAndCompany = {
  name: '박보영',
  age: 32,
  company: '조흔 소속사',
  companyRegistrationNumber: 1,
};

// TPet을 만들어 아래와 같이 intersection과 union을 같이 해보자.
type TPet = {
  petName: string;
  petAge: number;
}

type TCompanyOrPet = TPerson & (TCompany | TPet);

// 다음과 같이 TPerson에 TCompany과 TPet이 or조건으로 붙는 것을 확인할 수 있다.
const seulgi: TCompanyOrPet = {
  // TPerson
  name: '김슬기',
  age: 30,

  // TCompany
  company: '좋은 소속사',
  companyRegistrationNumber: 2,

  // TPet
  petName: '강아지',
  petAge: 5,
}

const seulgi2: TCompanyOrPet = {
  // TPerson
  name: '김슬기',
  age: 30,

  // TCompany
  company: '좋은 소속사',
  companyRegistrationNumber: 2,
}

const seulgi3: TCompanyOrPet = {
  // TPerson
  name: '김슬기',
  age: 30,

  // TPet
  petName: '강아지',
  petAge: 5,
}