export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface PostRequest {
  id: string;
  title: string;
  description: string;
  views: number;
}

interface Reactions {
  likes: number;
  dislikes: number;
}
