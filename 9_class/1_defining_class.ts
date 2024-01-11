/**
 * Defining Class
 * 
 * TS에서 class를 선언하는 기본적인 방법
 */

class SampleClass {}

// TS는 단순히 property만 선언하면 에러가 발생하며, 값을 할당해주거나 생성자를 통해 초기화를 해줘야 한다.
class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduce(){
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
  }
}

const starcraft = new Game(
  'Star Craft',
  'USA',
  10000000,
);

const retVal = starcraft.introduce();

// starcraft.changeGame(); // 존재하지 않는 함수는 에러를 던진다.