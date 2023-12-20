/**
 * Overloading
 * 
 * 시그니처 함수는 정의된 구현체 함수명과 동일한 이름을 가져야 하며,
 * 파라미터의 이름은 달라도 되지만 순서와 type, 그리고 return type은 동일해야 한다.
 * 이렇게 시그니처 함수를 작성하여 구현체 함수를 호출할 때 전달할 파라미터들을 제한할 수 있다.
 * 
 * 즉, 구현체는 1개지만 여러 개의 시그니처 함수들을 통해 overloading과 같은 효과를 낸다.
 * 
 * 참고로 추가로 overloading을 하고 싶다면, 기존에 작성된 시그니처 함수들과 구현체 함수 다음에 추가해야 한다.
 * TS가 시그니처 함수들과 구현체 함수를 한 묶음으로 인식해서 사이에 다른 시스니처 함수를 추가하면 에러가 발생한다.
 * 
 * 하지만 JS에는 없고, TS에만 있는 기능이기 때문에, 왠만하면 사용하지 않는 것이 좋다.
 * 그냥 각각의 역할에 맞는 함수들을 개별로 작성하도록 하는 것을 권장.
 */

function stringOrStrings(members: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): number;
// function stringOrStrings(): string; // 구현체 함수에 첫번째 인수는 optional하지 않으므로 에러 발생

/**
 * 파라미터를 1개 또는 3개를 받는 함수
 * 
 * 만약 하나의 파라미터만 입력받으면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약에 3개의 파라미터를 받으면
 * 각각 아이돌을 각가의 파라미터의 값으로 입력받는다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string): string | number {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  }

  return `아이브: ${memberOrMembers}`;
}

console.log(stringOrStrings('안유진, 장원영, 레이')); // 1개의 파라미터를 받음
console.log(stringOrStrings('안유진', '장원영', '레이')); // 3개의 파라미터를 받음
// console.log(stringOrString('안유진', '장원영')); // 파라미터 2개는 정의된 시그니처 함수가 없기 때문에 에러 발생