// 기본으로 import될 이름은 export default된 모듈의 이름을 따를 필요없이
// 마음대로 네이밍 할 수 있다.
import Example from './1_export_default';

// Example을 export default 시켰을 경우
// const iu = new Example('아이유', 23);
// console.log(iu);

// number를 export default 시켰을 경우
// console.log(Example);

// ICat을 export default 시켰을 경우
// const cat: Example = {
//     name: '냥냥이',
//     breed: '스코티시폴드',
// };

// 객체 형태로 export default 시켰을 경우
// Example은 객체이므로 사용할 property를 선택해야 한다.
const yuJin = new Example.IdolModel('안유진', 23);

console.log(yuJin);
console.log(Example.number);