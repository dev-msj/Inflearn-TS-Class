/**
 * Loopholes of Any
 */

let number: number;
number = 10;

// number.toUpperCase(); // number type이므로 에러 발생

// (number as any).toUpperCase(); // any type이라서 컴파일 에러는 안나지만 런타임 에러 발생

const multiplyTwo = (x: number, y: number) => {
  return x * y;
}

let args1: any = 'test';
let args2: any = true;

multiplyTwo(args1, args2); // any type을 number type 파라미터 인자로 전달은 가능하지만 런타임 에러 발생
// multiplyTwo('test', true); // 위의 값을 직접 넣으면 원래는 에러가 발생함

let human: any = { name: 'man', age: 30 };
// human. => 원래는 '.'을 입력하면 객체의 property가 자동완성이 되지만, any는 불가능함

const callback = (x: number, y: number) => {
  return x * y;
}

// callback은 x, y를 입력받는 함수인데, any type이기 때문에 잘못된 파라미터를 넘겨도 에러가 발생하지 않는다.
// 이 점은 JS가 가지는 특징이며, 변경에 대한 문제를 예측할 수 없어서 어떤 나비효과를 가져올지 알 수 없다.
// 결국 리팩토링, 에러 픽스 등을 진행할 때, 이슈 해결을 위한 러닝커브가 커지며 생산성이 떨어진다.
// 그래서 any type을 남발하는 것은 매우 위험하며, TS를 사용하는 의미를 퇴색시킨다.
const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x);
}

console.log(callbackRunner(5, 4, callback)); // NaN