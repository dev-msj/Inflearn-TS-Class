/**
 * Key Value Mapping
 * 
 * TS에서 key와 value를 mapping하는 다양한 방법들에 대해서 알아보자.
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUser: State | undefined;
  banUser: State | null;
  getPosts: State;
}

type UserApiStatus = {
  getUser: State;
  paginateUser: State | undefined;
  banUser: State | null;
}

type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginateUser: GlobalApiStatus['paginateUser'];
  banUser: GlobalApiStatus['banUser'];
}

// in을 활용하여 원하는 값들을 loop를 돌며 순서대로 k에 담고, k를 key로 활용하여 GlobalApiStatus에서 꺼내올 수 있다.
type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUser' | 'banUser']: GlobalApiStatus[k]
}

// Pick를 활용해 GlobalApiStatus에서 원하는 property들을 가져올 수 있다.
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'paginateUser' | 'banUser'>;

// Omit을 활용해 GlobalApiStatus에서 원하지 않는 property를 제외하고 나머지 proeprty들을 모두 가져올 수 있다.
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

// 모든 property의 key를 가져오는 keyof를 활용한 방법
type AllKeys = keyof GlobalApiStatus;

// const key: AllKeys = 'test'; // key를 제외한 값을 입력하면 에러가 나는 것을 확인할 수 있다.

// GlobalApiStatus의 모든 property를 가져오기 때문에 getPosts를 제외하려는 목적에 맞지 않는다.
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// Exclude를 통해 getPosts를 제외할 수 있다.
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

// 가져온 모든 property들을 optional하게 만들 수 있다.
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

// type은 LoadingStatus와 ErrorStatus의 공통된 property다.
// 그래서 StatusType은 'loading' | 'error' 타입이 된다.
type StatusType = FetchStatus['type'];