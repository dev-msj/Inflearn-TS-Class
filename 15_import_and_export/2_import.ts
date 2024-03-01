// export default와는 다르게 export된 모듈의 이름을 괄호 안에 정확하게 입력해줘야 한다.
// export default는 괄호 없이 원하는 네이밍을 사용하면 된다.
import Example, { IdolModel, rose, number, ICat } from './2_export';

const iu = new IdolModel('아이유', 32);
console.log(iu);
console.log(rose);
console.log(number);

const cat: ICat = {
    name: '냥냥이',
    age: 12,
}
console.log(cat);

// export default된 객체가 정상적으로 동작하는 것을 확인할 수 있다.
console.log(Example.name); // 코드팩토리