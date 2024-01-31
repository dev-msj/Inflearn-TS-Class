/**
 * method decorator
 * 
 * 메서드에 데코레이터를 추가하여 메서드 정보를 조회하거나 property descriptor를 조작할 수 있다.
 */
class Idol {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  @TestMethodDecorator
  @Configurable(false)
  @MethodCallLogger('PROD')
  dance(){
    return `${this.name}가 춤을 춥니다.`;
  }
}

// 메서드 데코레이터에 필요한 파라미터들
// target - static method에 데코레이팅을 할 경우 생성자 함수 => [class Idol]
//        - instance method에 데코레이팅 할경우 인스턴스의 prototype => {}
// propertyKey - 메서드의 이름
// descript - property descriptor
function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
  console.log('LogCall');
  console.log('--- target ---');
  console.log(target);
  // console.dir(target, {showHidden: true}); // 숨겨진 항목 출력 => { [constructor], [dance] }
  console.log('--- propertyKey ---');
  console.log(propertyKey);
  console.log('--- descriptor ---');
  console.log(descriptor);
}

const rose = new Idol('로제');
console.log('---- run dance ----');
rose.dance(); // dance를 한 번 더 실행해도 데코레이터가 추가 동작하지 않는 것을 확인할 수 있다.

// factory 함수를 통해 인자를 받을 수 있는 데코레이터로 만들 수 있다.
// 데코레이터를 통해 PropertyDescripter를 자유자재로 바꿀 수 있다는 장점이 있다.
function Configurable(configurable: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.configurable = configurable;
  }
}

// constructor와 dance의 PropertyDescriptor 출력
// 여기서 Configurable 데코레이터를 통해 dance의 configurable이 데코레이터의 파라메터값으로 변경되는 것을 확인할 수 있다.
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

// PropertyDescripter를 조작할 때 value를 변경하는 일이 가장 많다.
function MethodCallLogger(env: string){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // 기존 값을 할당 => 현재 대상은 "dance 메서드"
    const originalMethod = descriptor.value;

    // value에 메서드를 정의하며, 어떤 값이든 받을 수 있도록 "...args"를 파라미터로 받음.
    descriptor.value = function(...args: any[]){
      console.log(`[${env}] running function : ${propertyKey}`);

      // 기존 dance 메서드는 파라미터가 필요없으나 일반화된 형태로 작성하기 위해 "...args"를 넘기는 것으로 보임
      const result = originalMethod.apply(this, ...args);

      // 결과적으로 기존 메서드에서 console.log를 추가로 동작하도록 변경함
      return result;
    }
  }
}

// 데코레이터는 한 번만 동작하지만, 메서드가 재정의되었으므로 console.log를 출력하고 dance 메서드를 실행함
console.log(rose.dance());
