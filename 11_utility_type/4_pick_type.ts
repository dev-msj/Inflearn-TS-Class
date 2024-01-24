/**
 * Pick Type
 * 
 * 필요한 property들만 찍어서 사용할 수 있도록 설정하는 타입니다.
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// 입력받고 싶은 property들만 골라서 받게 만든다.
// 실무에서 활용한다면 외부에서 전달받은 값들에 특정 값들을 붙여서 원하는 객체를 구성하고 싶을 경우 활용할 수 있을 것 같다.
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
  return {
      ...post,
      createdAt: new Date(),
  };
}

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});