/**
 * Reflection and Decorator
 * 
 * Decorator와 Reflection을 활용해 런타임 상에서도 Parameter를 Validate 할 수 있다.
 */
import 'reflect-metadata';

const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T>{
  index: number;
  restrictedValues: T[];
}

// 데코레이터가 선언된 파라미터에서 검증할 값을 메타 데이터로 저장한다.
function RestrictParamValue<T>(restrictedValues: T[]){
  return (target: any, propertyKey: string, index: number) => {
    // restrictParamValueKey를 메타데이터의 키로 하여,
    // 인스턴스의 prototype(target)에 parameter 이름(propertyKey)에 있는 메타데이터를 가져온다.
    // 없으면 빈 리스트를 가져온다.
    const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    // 데코레이터가 선언된 파라미터의 순서와 검증할 값을 메타데이터 값으로 생성한다.
    const info: RestrictionInfo<T> = {
        index,
        restrictedValues,
    }

    // 기존의 메타데이터에 신규 생성된 메타데이터를 추가한다.
    Reflect.defineMetadata(restrictParamValueKey, [
        ...prevMeta,
        info,
    ], target, propertyKey);

    console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
  }
}

// 메타 데이터에 저장된 값에 실제 전달받은 값이 속하는지 검증한다.
function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
  // restrictParamValueKey를 메타데이터의 키로 하여,
  // 인스턴스의 prototype(target)에 parameter 이름(propertyKey)에 있는 메타데이터를 가져온다.
  // 없으면 빈 리스트를 가져온다.
  const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, 
    target, propertyKey) ?? [];

  // 기존의 메서드의 로직을 original에 저장한다.
  const original = descriptor.value;

  // 메타 데이터 검증한 후에 기존 메서드의 로직을 수행하도록 한다.
  descriptor.value = function(...args: any){
    // 메타데이터에 저장된 값들 중 실제 전달받은 파라미터 값을 가지지 않은 것들을 추출한다.
    const invalids = metas.filter(
        (x) => !x.restrictedValues.includes(args[x.index])
    );

    // 메타데이터에 속하지 않은 파라미터들이 존재하면 에러를 던지고 해당 정보를 표시한다.
    if(invalids.length > 0){
        throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`)
    }

    return original.apply(this, args);
  }
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * 2.
   * 1의 문제점을 해결할 수 있는 대안으로 데코레이터와 메타 데이터를 활용할 수 있다.
   * 메서드의 파라미터를 메타 데이터로 등록한 후, 해당 메서드를 실행할 때
   * 메타 데이터에 저장된 파라미터와 실제 전달받은 파라미터를 비교하여 검증할 수 있다.
   * 이 후에 파라미터 검증값이나 검증 대상이 추가되면, 단순히 값을 변경하고 데코레이터를 추가하는 것으로
   * 해결할 수 있게 된다.
   */
  @ValidateMethod    
  // style에는 '신나게' | '열정적으로'
  sing(@RestrictParamValue(['신나게', '열정적으로']) style: string, 
  @RestrictParamValue([1,2,3]) ranking: number) {
    /**
     * 1.
     * string의 type을 union 타입으로 지정해도 런타임 상에서는 결국 JS이므로 그냥 string 타입이 된다.
     * 그래서 런타임 상에서 파라미터를 검증하기 위해 if문이 필요해진다.
     * 하지만 이러한 형태는 파라미터로 받아야 할 값이 변경되거나 검증해야 할 파라미터가 생길 때마다
     * if문을 계속 작성해야 한다.
     * 결국 가독성 뿐만 아니라 확장성, 유지보수성이 떨어지게 된다.
     */
    // if(style !== '신나게' && style !== '열정적으로') {
    //     throw Error('안됨');
    // }

    return `${this.name}이 ${style} 노래를 부릅니다.`
  }
}

const yuJin = new Idol('안유진', 23);

console.log('--- sing ---');
console.log(yuJin.sing('신나게', 1));
console.log(yuJin.sing('열정적으로', 2));
console.log(yuJin.sing('기분 나쁘게', 3)); // 에러 발생!