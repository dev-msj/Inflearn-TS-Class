/**
 * Parameter Decorator
 * 
 * 파라메터에 데코레이터를 지정하여 간단한 정보를 조회할 수 있다.
 */
class Cat {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  dance(@LogParam adj: string){
    console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
  }
}

const cat = new Cat('냥이');
cat.dance('신나게');

// target - static method의 parameter에 데코레이팅을 할 경우 생성자 함수 => [class Cat]
//        - instance method의 parameter에 데코레이팅 할경우 인스턴스의 prototype => {}
// propertyKey - parameter의 이름
// paramIndex - 데코레이터가 지정된 parameter의 순서
function LogParam(target: any, propertyKey: string, paramIndex: number){
  console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 입력됐습니다.`); // 0번째 파라미터인 dance가 입력됐습니다.
}

// property 데코레이터와 동일하게 property descriptor가 없으므로 값 변경은 불가능하다.