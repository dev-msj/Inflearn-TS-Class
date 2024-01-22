/**
 * Generic in Promise
 * 
 * promise에서도 generic을 활용할 수 있다.
 */
// 기존의 JS에서 Promise를 사용하는 방법
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 2000)
  })
}

// resolve에서 string 타입을 확정적으로 반환하고 있다.
// 하지만 res의 타입은 unknown으로 잡힌다는 문제가 발생한다.
const runner = async function () {
  const res = await afterTwoSeconds(); // unknown
  console.log(res);
}
runner();


// TS에서는 Promise가 반환할 타입을 generic을 통해 지정해줄 수 있다.
const afterOneSecond = function(): Promise<string>{
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
          // resolve(111); // return type을 string이므로 number는 에러 발생.
      }, 1000)
  })
}

// 이를 통해 반환 타입이 string인 것을 알 수 있다.
// res의 타입을 확인하면 string이 나오는 것을 볼 수 있다.
const runner2 = async function () {
  const res = await afterOneSecond(); // string
  console.log(res);
}
runner2();


// string 타입을 반환하는 비동기 함수를 선언하면 TS가 Promise<string> 타입을 추론한다.
const runner3 = async function(){
  return 'string return';
}