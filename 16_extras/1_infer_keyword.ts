/**
 * Infer Keyword
 * 
 * Generic의 Conditional Type에서 extend 한 대상에서 타입을 추론한다.
 * 
 * Infer Keyword는 "추론한다"는 뜻으로 Conditional Type에서만 사용 가능한 키워드다.
 * (Inferring Type in Conditional Type. 공식 문서 설명)
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을한다.
 */

// 1) Array 구성 요소 추론
// 가장 많이 사용하는 예제로 Flattening이라고 한다.
// string[] -> string
// string[][] -> string[]

// Type이 Array에 해당하면 추론(infer)된 ElementType을 반환하고 아니면 Type을 반환해라.
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type; // Array를 []로 작성한 것으로 Flatten과 동일한 표현이다.

type StringArray = Flatten2<string[]>; // string
type NumberArray = Flatten2<number[]>; // number
type TwoDArray = Flatten2<boolean[][]>; // boolean[]

// 2) Return Type 추론

// Type이 function이면 추론된 ReturnType을 반환하고 아니면 Type을 반환해라.
type InferReturnType<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;

type StringFunc = InferReturnType<()=> string>; // string
type NumberFunc = InferReturnType<()=> number>; // number

// function type이 아니므로 generic으로 선언된 타입을 반환
type NumberArray2 = InferReturnType<number[]>; // number[]