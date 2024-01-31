/**
 * Accessor Decorator
 * 
 * 메서드 데코레이터랑 동일하게 동작하며, 데코레이터를 엑세서 메서드에도 적용할 수 있는 것을 확인할 수 있다.
 */
class Rectangle{
  #height: number;
  #width: number;

  constructor(height: number, width: number){
    this.#height = height;
    this.#width = width;
  }

  @Configurable(false)
  get height(){
    return this.#height;
  }
  
  @Configurable(true)
  get width(){
    return this.#width;
  }
}

function Configurable(configurable: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.configurable = configurable;
  }
}

const rectangle = new Rectangle(100, 200);

// constructor와 height, width의 PropertyDescriptor 출력
// 여기서 Configurable 데코레이터를 통해 height, width의 configurable이 데코레이터의 파라메터값으로 변경되는 것을 확인할 수 있다.
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));