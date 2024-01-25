/**
 * Exclude Type
 * 
 * 유니언 타입에서 특정 타입을 제거한 타입을 생성할 수 있다.
 */

// "string | boolean | number" 타입에서 string 타입을 제거한다.
type NoString = Exclude<string | boolean | number, string>; // boolean | number

// "string | boolean | number" 타입에서 "string | boolean" 타입을 제거한다.
type numberOnly = Exclude<string | boolean | number, string | boolean>; // number

// "string | (() => void)" 타입에서 Function 타입을 제거한다.
type NoFunction = Exclude<string | (() => void), Function>; // string