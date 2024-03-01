// export default와는 다르게 export된 모듈의 이름을 괄호 안에 정확하게 입력해줘야 한다.
import { IdolModel, rose, number, ICat } from './2_export';

const iu = new IdolModel('아이유', 32);
console.log(iu);
console.log(rose);
console.log(number);

const cat: ICat = {
    name: '냥냥이',
    age: 12,
}
console.log(cat);