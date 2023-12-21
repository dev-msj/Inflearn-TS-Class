/**
 * Type VS Interface
 */

// Object를 선언할 때
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
}

// function을 선언할 때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만 interface에서는 할 수 없는 것들
 */

// 1. primitive type 선언하기
type Name = string;

// 2. union type 선언하기
type UnionType = string | number;

// 3. primitive list or tuple type 선언하기
type TupleType = [number, string]; // 첫번째는 number, 두번째는 string 값이 들어가는 list


/**
 * Interface는 할 수 있고 Type은 못하는 것
 */

// interface merging - combine property
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

// interface는 중복 선언을 하게 되면 자동으로 property가 합쳐진다.
// 만약 type으로 하게 된다면 동일한 type명을 선언하는 것부터 에러가 발생한다.
let rectangle: IRectangle = {
  height: 200,
  width: 100,
}

// interface merging - overloading
class Review {
  // property => instance에 귀속
  getY = (x: number) => { return x };

  // method => prototype에 귀속
  getX(x: number) {
    return x;
  }

  // 함수를 statement로 선언하면 method, expression으로 선언하면 property가 됨
}

interface GetXandY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXandY {
  getX: (x: number) => number;
  // getY: (y: string) => number; // property는 overloading이 안되므로 에러 발생
}

interface GetXandY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXandY2 {
  getX(x: number): number;
  getY(y: string): number; // method는 overloading이 가능함
}

const testMethod: GetXandY2 = {
  getX: function (x: number): number {
    return x;
  },
  getY: function (y: number | string): number {
    // return y; // y는 string일 수도 있으므로 에러 발생
    return 1;
  }
}