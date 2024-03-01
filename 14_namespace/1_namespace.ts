/**
 * Namespace
 * 
 * 특정 관련 있는 코드들을 하나의 모듈로 묶을 수 있는 방법이다.
 * ECMAScript가 나오기 이전에 사용되었으며, 현재는 deprecate되었다.
 */

namespace Home {
  class Idol {
      name: string;
      age: number;

      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
  }

  // 다른 namespace에서 yujin에 저장된 객체를 사용할 수 있도록 export 할 수 있다.
  export const yuJin = new Idol(
      '안유진',
      23,
  );
}

namespace Post {
  class User {
    email: string;
    name: string;
    
    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }
  
  // Home 키워드를 사용해 export된 yujin 객체에 접근할 수 있다.
  const admin = new User('admin@codefactory.ai', Home.yuJin.name);

  // Idol class는 export 되어 있지 않아 객체를 생성할 수 없다.
  // const idol = new Home.Idol('haerin', 3); // 에러 발생

  console.log(admin);
}

// 중첩된 형태로 namespace를 선언할 수도 있다.
// 중첩 namespace는 scope와 동일한 원리로 동작한다.
namespace Comment {
  const name = 'comment';

  namespace Detail {
      const page = 'detail';

      // 내부에서는 상위 namespace에 접근할 수 있다.
      console.log(name);
      console.log(page);
  }

  console.log('----------');
  console.log(name);
  // 상위 namespace에서는 하위 namespace애 접근할 수 없다.
  // console.log(page); // 에러 발생
}