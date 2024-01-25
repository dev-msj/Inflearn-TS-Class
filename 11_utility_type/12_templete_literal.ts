/**
 * Template Literal
 * 
 * string 타입을 조작한 타입을 생성할 수 있다.
 */
type CodeFactory = 'Code Factory';

// Uppercase: 전부 대문자로 변환
type CodeFactoryUpper = Uppercase<CodeFactory>; // "CODE FACTORY"

// Lowercase: 전부 소문자로 변환
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // "code factory"

// Capitalize: 첫글자만 대문자로 변환
type CodeFactoryCapital = Capitalize<CodeFactoryLower>; // "Code factory"

// Uncapitalize: 첫글자를 소문자로 변환
type CodeFactoryUnCapital = Uncapitalize<"Code Factory Capital">; // "code Factory Capital"