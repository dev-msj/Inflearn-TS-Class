/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 * 즉, JS에서는 존재하지 않는 기능이란 말이다.
 */
let codeFactory = 'code factory';
let testNumber = 3;

console.log(codeFactory.toUpperCase()); // CODE FACTORY
// console.log(testNumber.toUpperCase()); // number에는 없는 기능이라 에러

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); // 실제로 존재하지 않지만 any 타입 특성상 일단 이 메서드가 존재하는 것처럼 여김. 실행시 에러
const stringVar = sampleNumber as string; // stringVar의 타입이 string으로 추론됨.
// => Casting을 통해 실제 그 타입이 아니더라도 그 타입이라고 가정하게 할 수 있다.

console.log(typeof (sampleNumber as string)); // number 출력 => casting때문에 string처럼 사용할 수 있지만 실제 타입은 number다.
// => TS 상에서 casting했다고 하더라도 JS상에는 적용되지 않기 때문에 원래 타입인 number가 출력되는 것이다.
//    그래서 마음대로 막 casting하여 사용하면 안된다.

let number = 5;
// console.log((number as any).toUpperCase());
// => 실제 타입과 코드를 쓸 때의 타입을 다르게 가져갈 수 있다.
//    그래서 casting을 활용하는 경우는 상속 상에서 더 구체화된 값으로 casting할 때 사용하는 것이 가장 좋은 형태다.