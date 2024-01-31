/**
 * Property Decorator
 * 
 * 속성에 데코레이터를 지정하여 간단한 정보를 조회할 수 있다.
 */
class UserModel{
  @PropertyLogger
  id: string;
  name: string;

  constructor(id: string, name: string){
      this.id = id;
      this.name = name;
  }
}

// target - static property에 데코레이팅을 할 경우 생성자 함수 => [class Idol]
//        - instance property에 데코레이팅 할경우 인스턴스의 prototype => {}
// propertyKey - property의 이름
function PropertyLogger(target: any, propertyKey: string){
  console.log(`${propertyKey} 값이 정의 됐습니다.`);
}

// property descripter가 없으므로 값 변경은 불가능하다.