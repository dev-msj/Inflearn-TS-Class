/**
 * Partial Type
 * 
 * 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
 * 가장 많이 쓰이는 타입.
 */

interface Idol{
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
}

// Idol의 부분 집합(property)를 사용할 수 있도록 Partial 정의
function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
  return {
      ...original,
      ...updates, // update가 후순위로 spread되면서 original을 덮어 쓴다.
  }
}

// 빈 객체를 부분 집합으로 사용할 수 있다.
console.log(updateIdol(yuJin, {}));

// age property만 부분 집합으로 사용할 수 있다.
console.log(updateIdol(yuJin, {
  age: 27,
}));

// 모든 property를 사용하는 것 또한 가능하다.
console.log(updateIdol(yuJin, {
  age: 27,
  name: '코드팩토리',
  groupName: '주식회사 코드팩토리',
}));

// Idol에 존재하지 않는 property는 사용할 수 없다.
console.log(updateIdol(yuJin, {
  // weight: 45, // 에러 발생
}));