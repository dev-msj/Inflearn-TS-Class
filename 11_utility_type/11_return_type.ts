/**
 * Return Type
 * 
 * 함수 형태 expression의 반환 타입을 타입으로 생성할 수 있다.
 */

// string을 반환하는 expression을 받아 string 타입을 반환한다.
type ReturnTypeSample = ReturnType< ()=> string>; // string

// number를 반환하는 expression을 가진 FunctionSign을 받아 number 타입을 반환한다. 
type FunctionSign = (x: number, y: number) => number;
type ReturnTypes = ReturnType<FunctionSign>;

// expression을 받아 return 타이을 반환하므로 선언된 함수는 사용할 수 없다.
const FunctionSign2 = (x: number, y: number): number => { return 0 };
// type ReturnTypes2 = ReturnType<FunctionSign2>; // 에러 발생