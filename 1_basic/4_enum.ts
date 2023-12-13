/**
 * Enum
 */

/**
 * 작업 상태를 반환하는 API를 구현한다고 하자.
 * 
 * DONE: 요청 완료 상태
 * ERROR: 에러가 생긴 상태
 * LOADING: 로딩 상태
 * INITIAL: 초기 상태
 */
function runWork() {
  let state = 'INITIAL';

  try {
    state = 'LOADING';

    // 작업을 한다.

    state = 'DONE';
  } catch (e) {
    state = 'ERROR';
  } finally {
     return state;
  }
}

// string으로 관리하기 때문에 오타가 있으면 바로 false를 반환할 것이다.
// 한정된 값들을 표현하고 비교를 해야할 때 발생하는 문제점이다.
console.log(runWork() === 'DONE'); // ture

// JS에서는 다음과 같은 방법을 활용하여 해결했을 것이다.
const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWorkJS() {
  let state = initialState;

  try {
    state = loadingState;

    // 작업을 한다.

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
     return state;
  }
}

console.log(runWorkJS() === doneState); // ture

// Enum을 활용한 상태 관리
// 기본값은 0부터 순차적으로 증가하며, 다음과 값을 지정해줄 수 있다.
enum State {
  DONE = 'DONE',
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
  ERROR = 'ERROR',
}

function runWorkEnum() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;

    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
     return state;
  }
}

console.log(runWorkEnum() === State.DONE, runWorkEnum()); // ture