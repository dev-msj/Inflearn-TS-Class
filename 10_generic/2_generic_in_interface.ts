/**
 * Generic in Interface
 * 
 * interface에 generic을 지정하여 원하는 property의 타입을 지정해줄 수 있다.
 */

interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

// interface의 generic 타입 선언으로 인해 data의 타입이 string[]가 된다.
const cache1: Cache<string> = {
  data: ['data1', 'data2'],
  lastUpdate: new Date(),
}

// 함수와는 다르게 generic 타입 추론은 불가능하다.
// const cach2: Cache = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }


// generic 타입의 기본 타입을 지정해줄 수 있다.
interface DefaultGeneric<T = string>{
  data:T[];
}

// 기본 타입이 string인데 number를 입력해서 에러 발생
// const cache3: DefaultGeneric = {
//     data: [123, 456],
// }

// 기본 타입에 맞게 입력하면 정상적으로 동작되는 것을 확인할 수 있다.
const cache4: DefaultGeneric = {
    data: ['123', '456'],
}