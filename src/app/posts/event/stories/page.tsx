import type { Viewport } from "next";

import { PostStoryList } from "@/components/pages/info/PostStoryList";
import type { Post } from "@/components/pages/info/types";

export const viewport: Viewport = {
  themeColor: "#FFF4D6",
};

const posts: Post[] = [
  {
    id: "1",
    images: ["/assets/post-7.jpeg"],
    category: "Event",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Felicia F. Aotama S.I.Kom.,M.I.Kom",
      avatar: "/assets/user-1.png",
    },
  },
];

export default function Page() {
  return (
    <>
      <PostStoryList colors="warning" posts={posts} />
    </>
  );
}
