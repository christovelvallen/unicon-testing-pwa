export interface Post {
  id: string;
  body?: string;
  images?: string[];
  category: string;
  createdAt: string;
  user: {
    id: string;
    fullName: string;
    avatar: string;
  };
}
