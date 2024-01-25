/**
 * Parameter Type
 * 
 * 함수의 파라미터들을 가져와 타입으로 만들 수 있다.
 */

function sampleFunction(x: number, y: string, z: boolean){}

// sampleFunction의 파라미터들을 타입으로 만든다.
// typeof 키워드를 사용하는 이유는 sampleFunction는 선언된 함수로 타입이 아니기 때문이다.
type Params = Parameters<typeof sampleFunction>; // [x: number, y: string, z: boolean]

// Function 타입의 파라미터들을 타입으로 만든다.
// 위와 다르게 이 함수는 Function의 형태를 타입으로 넘기는 것. 즉, Function 타입에 해당한다.
// 그러므로 keyof 키워드를 사용하지 않아도 된다.
// 또한 함수"의" 파라미터들을 가져오는 목적이므로 Function 타입 자체가 것이 아닌 Function의 파라미터를 타입으로 반환한다.
type Params2 = Parameters<(one: number) => void>; // [one: number]