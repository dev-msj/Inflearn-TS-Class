/**
 * Non Nullable type
 * 
 * null에 해당하지 않는 타입을 추출한 타입을 생성할 수 있다.
 */

// null과 undefined를 제외한 타입들로 구성된 타입이 생성된다.
type NonNull = NonNullable<string | number | boolean | null | undefined | object>; // string | number | boolean | object

// null이 반환될 가능성이 있는 상황에서 null을 제외하고 싶을 때 혹은 null이 없는 타입을 만들고 싶을 때 사용할 수 있을 것 같다.