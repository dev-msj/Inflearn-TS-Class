/**
 * Generic in Type
 * 
 * type에 generic을 활용하여 유연한 타입 사용할 수 있다.
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';
// const genericString2: GenericSimpleType = '코드팩토리'; // generic 타입 추론은 불가능하다.

interface DoneState<T>{
    data: T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

// generic에 기본 타입을 지정해줄 수 있다.
type State<T = number> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123', '456'],
}

// LoadingState
state = {
    requestedAt: new Date()
}

// ErrorState
state = {error: 'error'};

// 기본 타입이 잘 동작하는 것을 확인할 수 있다.
let state2: State = {
    data: [123, 456]
}