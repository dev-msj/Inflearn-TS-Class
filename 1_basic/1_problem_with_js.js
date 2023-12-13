/**
 * JS의 문제점
 * 
 * dynamically typed을 사용하기 때문에 어떤 타입의 값이 오게 될지 예측할 수 없다.
 * 즉, 코드가 어떤 의도로 만들어졌는지 알기 어렵다는 문제가 발생한다.
 * 만약 규모가 큰 서비스에서 다른 사람이 작성한 코드를 봐야한다면
 * 매우 골치 아픈 일이 될 것이다.
 * 
 * 이런 문제를 해결하기 위해서 우리는 다음과 같은 방법을 시도해볼 수 있다.
 *     1. 코멘트를 작성한다.
 *     2. 함수의 기능이나 매개변수를 설명해줄 수 있는 툴을 사용한다.
 *     3. typeof를 활용해 runtime에서 체크할 수 있다.
 * 
 * 하지만 이러한 시도들 역시 한계가 분명하다.
 *     - 1, 2번의 경우에는 코드가 변경될 때마다 코멘트를 재작성해야 하며,
 *       더 큰 문제는 어차피 아무 값이나 넣어도 코드가 동작한다는 것이다.
 *     - 3번의 경우 type check를 위해 코드의 복잡도가 올라가며,
 *       결국 코드를 실행해보지 에러가 발생할지 알 수 없다.
 */

// 아무 타입이나 넣어도 동작하기 때문에 무엇을 의도한 코드인지 알 수 없다.
function add(var1, var2) {
  return var1 + var2;
}

console.log(add(1, 2)); // 3
console.log(add(1, '2')); // '12' => 1이 string으로 변환됨
console.log(add('1', '2')); // '12'
console.log(add([], 2)); // '2'
console.log(add(undefined, null)); // NaN

// typeof를 활용해 runtime에서 체크할 수 있다.
function addTypeSafe(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    throw new Error('숫자만 파라미터에 입력해주세요.');
  }
}

console.log(addTypeSafe(1, 2)); // 3
console.log(addTypeSafe(1, '2')); // 에러 발생