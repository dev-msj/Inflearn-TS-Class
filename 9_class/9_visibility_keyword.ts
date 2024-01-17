/**
 * Visibility Keyword
 * 
 * 클래스의 property나 method에 접근할 수 있는 권한을 설정한다.
 * OOP 언어에서는 접근 제어자(Access Modifier)라고 불린다.
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스 내부에서만 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent{
  public publicProperty = 'public property';
  protected protectedProperty = 'protected property';
  private privateProperty = 'private property';
  #jsPrivateProperty = 'js private property';

  test(){
      this.publicProperty;
      this.protectedProperty;
      this.privateProperty;
      this.#jsPrivateProperty
  }
}

class PropertyTestChild extends PropertyTestParent{
  test(){
      this.publicProperty;
      this.protectedProperty;

      // private property는 자식 클래스에서도 접근할 수 없다.
      // this.privateProperty;
      // this.#jsPrivateProperty
  }
}

const instance = new PropertyTestChild();

instance.publicProperty;
// instance.protectedProperty // 자식 클래스 안에서만 접근할 수 있을 뿐 외부 접근은 불가능하다.
// instance.privateProperty // 부모 클래스 안에서만 접근할 수 있으니 당연히 접근이 불가능하다.