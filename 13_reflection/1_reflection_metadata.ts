/**
 * Reflection Metadata
 * 
 * reflect-metadata 패키지를 통해 metadata를 활용할 수 있다.
 */
import 'reflect-metadata';

// 일반적인 방법으로는 변수에 값을 할당할 수 있을 뿐,
// 그 변수를 설명하기 위해서는 추가적인 값을 할당하는 수 밖에 없다.
const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean',
}

console.log(iu); // { name: '아이유', age: 32, nationality: 'korean' }

/**
 * Reflect.defineMetadata 메서드의 파라미터
 * 
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체(object metadata)
 * 4) 메타데이터를 저장할 객체의 프로퍼티(property metadata)
 * 
 * 4번은 필수가 아니다.
 * 
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터. 즉, 데이터를 설명할 수 있는 데이터를 정의한 것이다.
 */
Reflect.defineMetadata('test-meta', 123, iu);

/**
 * Object Metadata 정의하기
 */
// iu 객체에 metadata를 정의했지만, 객체에서 직접 metadata를 확인할 수 없다.
console.log(iu); // { name: '아이유', age: 32, nationality: 'korean' }

// Reflect.getMetadata 메서드를 통해서 정의된 metadata를 확인할 수 있다.
console.log(Reflect.getMetadata('test-meta', iu)); // 123

// key-value 형태로 관리되므로 동일 key라면 value를 덮어쓸 수 있다. 
Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu)); // 456

Reflect.defineMetadata('meta2', 789, iu);
console.log(Reflect.getMetadata('meta2', iu)); // 789
console.log(Reflect.getMetadata('test-meta', iu)); // 456

// 객체 형태의 metadata를 정의할 수 있다.
Reflect.defineMetadata('meta2', {name: '코드팩토리'}, iu);
console.log(Reflect.getMetadata('meta2', iu)); // {name: '코드팩토리'}


/**
 * Property Metadata 정의하기
 */
// 4번째 파라미터를 통해 property에도 metadata를 정의할 수 있다.
Reflect.defineMetadata('meta2', 999, iu, 'name');
console.log(Reflect.getMetadata('meta2', iu, 'name')); // 999

// 저장할 객체에 존재하지 않는 property에도 metadata를 정의할 수 있다.
Reflect.defineMetadata('meta2', 1004, iu, 'newProperty');
console.log(Reflect.getMetadata('meta2', iu, 'newProperty')); // 999

// 역시나 property에 정의한 metadata도 객체에서 직접 확인할 수는 없다.
console.log(iu) // { name: '아이유', age: 32, nationality: 'korean' }

// property metadata는 object metadata의 하위 속성으로 분류된다.
// 그래서 동일한 key를 사용해도 object metadata는 변경되지 않는다.
console.log(Reflect.getMetadata('meta2', iu)); // { name: '코드팩토리' }

// 같은 객체에 다른 key의 metadata를 생성하는 것도 가능하다.
Reflect.defineMetadata('object-meta', {name: 'alex'}, iu);
console.log(Reflect.getMetadata('object-meta', iu)); // {name: 'alex'}
console.log(Reflect.getMetadata('meta2', iu)); // { name: '코드팩토리' }

// 정의한 metadata를 삭제하는 것 역시 가능하다.
Reflect.defineMetadata('object-meta', 930424, iu, 'name');
Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // undefined

// 아래의 key에 해당하는 property metadata는 삭제되었으므로 존재하지 않는다고 나온다.
console.log(Reflect.hasMetadata('object-meta', iu, 'name')); // false

// iu에 정의된 object metadata의 모든 key들을 가져온다.
console.log(Reflect.getMetadataKeys(iu)); // [ 'test-meta', 'meta2', 'object-meta' ]

// iu의 name에 정의된 property metadata의 모든 key들을 가져온다.
console.log(Reflect.getMetadataKeys(iu, 'name')); // meta2


/**
 * Prototype에 Metadata 정의하기
 */
// iu 객체의 prototype에 object metadata를 정의할 수 있다.
Reflect.defineMetadata('prototype-data', '프로토타입 메타예요!', Object.getPrototypeOf(iu));

// getMetadataKeys는 객체에 정의된 metadata와 prototype에 정의된 metadata의 key를 가져온다.
console.log(Reflect.getMetadataKeys(iu)); // [ 'test-meta', 'meta2', 'object-meta', 'prototype-data' ]

// getOwnMetadataKeys은 메서드명처럼 자신의 metadata만 가져오므로 prototype에 정의된 metadata는 제외된다.
console.log(Reflect.getOwnMetadataKeys(iu)); // [ 'test-meta', 'meta2', 'object-meta' ]