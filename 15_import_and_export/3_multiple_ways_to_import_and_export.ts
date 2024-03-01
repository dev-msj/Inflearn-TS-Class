/**
 * Multiple Ways to Import and Export
 * 
 * import & export를 사용할 수 있는 다양한 방법
 */

// export된 모듈의 이름을 바꾸고 싶다면 as 키워드를 사용하여 변경해줄 수 있다.
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";

// console.log(new IM('아이유', 32));

// as로 이름을 변경하면 기존에 사용하던 이름은 사용할 수 없다.
// console.log(new IdolModel('아이유', 32)); // 에러 발생!

// wild card를 사용해 2_export_1에서 export된 모든 모듈을 한 번에 가져올 수 있다.
// import * as allTogether from './2_export_1';

// console.log(allTogether.number);
// console.log(allTogether.rose);

// export default는 괄호 없이 원하는 네이밍을 해주면 사용할 수 있다.
// import cf, {rose, number} from './2_export_1';

// export default된 객체가 정상적으로 동작하는 것을 확인할 수 있다.
// console.log(cf);

// import 경로는 기본적으로는 현재 파일을 기준으로 하는 상대 경로를 사용한다.
// tsconfig.json에서 baseUrl의 주석을 풀어주면 이 기준을 프로젝트 경로로 변경할 수 있다.
import { IdolModel } from "15_import_and_export/2_export";