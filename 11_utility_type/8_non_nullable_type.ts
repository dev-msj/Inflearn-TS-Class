/**
 * Non Nullable type
 * 
 * null에 해당하지 않는 타입을 추출한 타입을 생성할 수 있다.
 */

// null과 undefined를 제외한 타입들로 구성된 타입이 생성된다.
type NonNull = NonNullable<string | number | boolean | null | undefined | object>; // string | number | boolean | object
