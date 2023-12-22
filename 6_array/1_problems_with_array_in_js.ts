/**
 * JS Array의 문제점
 * 
 * 가장 근본적인 문제는 아무 값이나 막 넣을 수 있다는 것이다.
 */

// JS는 아래와 같이 그냥 마음대로 아무 type이나 넣을 수 있다.
const numbers = [1, '2', 3, '4', 5];

// 하지만 TS는 type이 다른 값을 넣는 것을 방지한다.
let strings: string[] = ['1', '2', '3'];
// strings.push(1);

// 다른 type을 같이 넣기 위해서는 괄호를 활용해 type을 아래와 같이 정의해줘야 한다.
let stringsOrNumbersArray: (string | number)[] = [1, '2', 3, '4'];

// 다음은 string[]만 넣거나 number[]만 넣을 수 있는 type이다.
let stringArrNumberArr: string[] | number[] = [1, 2, 3]; // number[]
stringArrNumberArr = ['1', '2', '3']; // string[]

// 다음은 string만 넣거나 number[]만 넣을 수 있는 type이다.
let stringOrNumberArr: string | number[] = [1, 2, 3]; // number[]
stringOrNumberArr = 'test'; // string

// boolean[]로 유추된다.
let boolsArr = [true, false, true];

// 유추된 boolean type은 push가 되지만, 다른 type을 push하면 에러 발생
boolsArr.push(false);
// boolsArr.push(1); // 에러

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i = 0; i < onlyString.length; i++){
    let item = onlyString[i];
    item; // string
}

for(let item of onlyNumbers){
  item; // number
}

let number3 = onlyNumbers[0]; // number

// tuple이 아닌 이상, index의 길이를 벗어나도 에러가 발생하지 않는다.
let number4 = onlyNumbers[9999]; // number