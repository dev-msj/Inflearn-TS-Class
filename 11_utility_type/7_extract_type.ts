/**
 * Extract Type
 * 
 * exclude와 반대로 유니언 타입에서 특정 타입만 추출하여 타입을 생성할 수 있다.
 */

// "string | boolean | number" 타입에서 string 타입을 추출한다.
type stringOnly = Extract<string | boolean | number, string>; // string

// "string | boolean | number" 타입에서 "string | boolean" 타입을 추출한다.
type stringAndBoolean = Extract<string | boolean | number, string | boolean>; // string | boolean

// "string | (() => void)" 타입에서 Function 타입을 추출한다.
type functionOnly = Extract<string | (() => void), Function>; // () => void