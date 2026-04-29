export interface Post {
  id: string;
  body?: string;
  images?: string[];
  category?: string;
  createdAt: string;
  count: {
    likes: number;
    comments: number;
    reposts: number;
  };
  user: {
    id: string;
    username: string;
    avatar: string;
  };
}
