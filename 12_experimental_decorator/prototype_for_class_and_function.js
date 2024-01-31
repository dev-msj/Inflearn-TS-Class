class CIdol {
  name;

  constructor(name){
      this.name = name;
  }

  dance(){
      return `${this.name}가 춤을 춥니다.`;
  }
}


function FIdol1(name) {
  this.name = name;

  this.dance = function (){
      return `${this.name}가 춤을 춥니다.`;
  }
}


function FIdol2(name) {
  this.name = name;
}
FIdol2.prototype.dance = () => {
  return `${this.name}가 춤을 춥니다.`;
}

// 공통: name은 constructor에 속한다.
console.dir(CIdol.prototype, {showHidden: true}); // CIdol의 prototype에는 constructor와 dance가 존재한다.
console.dir(FIdol1.prototype, {showHidden: true}); // FIdol1의 prototype에는 constructor만 존재한다.
console.dir(FIdol2.prototype, {showHidden: true}); // FIol2의 prototype에는 constructor와 dance가 존재한다.

// 즉, 클래스에 정의된 메서드는 함수의 프로토타입에 메서드를 정의한 것과 같은 형태이다.