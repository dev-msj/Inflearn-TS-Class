/**
 * Omit Type
 * 
 * pick와는 반대로 포함하고 싶지 않은 property를 제외한 객체를 만들어주는 타입이다.
 */

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// Post에서 createAt을 제외했으므로 createAt을 직접 만들어줘야 한다.
function createPost(post: Omit<Post, 'createdAt'>): Post {
  return {
      ...post,
      createdAt: new Date(),
  };
}

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});