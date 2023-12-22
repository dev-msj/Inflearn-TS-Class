/**
 * Extension
 */

interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

// 상속을 통해 interface property를 합칠 수 있다.
const idol: IIdol = {
  name: '안유진',
  age: 23,
}

type TName = {
  name: string;
}

type TIdol = TName & {
  age: number;
}

// intersection을 통해 type property끼리 합칠 수 있다.
const idol2: TIdol = {
  name: '아이돌',
  age: 25,
}

interface IIdol2 extends TName {
  age: number;
}

// interface에 type을 extends해서 property를 합칠 수 있다.
const idol3: IIdol2 = {
  name: '아이돌',
  age: 25,
}

type TIdol2 = IName & {
  age: number;
}

// intersection을 통해 interface와 custom 객체의 prorperty를 합친 type을 만들 수 있다.
const idol4: TIdol = {
  name: '아이돌',
  age: 25,
}

/**
 * multiple extending
 */
type DogName = {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

// 다중 intersection으로 여러개의 property를 합칠 수 있다.
type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: '코드팩토리',
  age: 32,
  breed: 'Poodl',
}

interface CatName{
  name: string;
}

interface CatAge{
  age: number;
}

// 다중 상속을 통해 property들을 합칠 수 있다.
interface Cat extends CatName, CatAge{
  breed: string;
}

const cat: Cat = {
  name: '오리',
  age: 7,
  breed: '코리안 냥냥이',
}


/**
 * Overriding
 * 
 * 강의에서는 overriding이라고 표현하지만
 * 실제 내용은 overriding보다는 type intersection 및 interface extension을 활용한
 * type narrowing에 대한 내용인 것 같다.
 */

type THeight = {
  height: number;
}

type TRectangle = THeight & {
  height: string;
  width: number;
}

// TRectangle의 height는 THeight와 intersection이 되면서 "number | string" type이 된다.
// primitive의 type이 intersection된 값을 만드는 것은 불가능하므로 height는 never가 된다.
// const rectangle: TRectangle = {
//   width: 100,
//   height:, // never
// }

type TWidth = {
  width: number | string;
}

type TRectangle2 = TWidth & {
  height: number;
  width: number;
}

// 기존에 존재하던 TWidth의 width에 TRectangle2를 만들면서 새로운 width와 합쳐지게 된다.
// 그래서 TWidth의 width이 number type으로 narrowing이 되어 TRectangle2가 생성된다.
const rectangle: TRectangle2 = {
  width: 100, // number
  height: 200,
}

// 위를 통해 다음과 같은 사실을 알 수 있다.
// 1. type이 전혀 다른 property가 intersection되면 never type이 된다.
// 2. union type에 속한 type이 intersection되면 narrowing이 된다.

interface IHeight {
  height: number;
}

// interface는 상속을 받기 때문에 type이 다르면 에러가 발생한다.
interface IRectangle extends IHeight {
  // height: string; // 에러 발생
  height: number;
  width: number;
}

interface IWidth {
  width: number | string;
}

// 부모 interface의 union type property와 동일한 type은 역시 가능하다.
// 또한 더 상세한 type은 narrowing이 된다.
interface IRectangle extends IWidth {
  height: number;
  width: number;
}