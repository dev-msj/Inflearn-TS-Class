/**
 * Required Type
 * 
 * 모든 property들이 필수가 되도록 설정하는 타입이다.
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

// age, country는 optional이지만 Required에 의해 값을 주지 않으면 에러가 발생한다.
const requiredDog: Required<Dog> = {
  name: '모찌',
  age: 7,
  country: '한국'
}