import { PostTabs } from "@/components/pages/forum/PostTabs";
import type { Post } from "@/components/pages/forum/types";

const posts: Post[] = [
  {
    id: "1",
    body: "Ada yang tau ini error kenapa?",
    images: ["/assets/post-8.png"],
    createdAt: "5 mnt",
    count: {
      likes: 61,
      comments: 22,
      reposts: 3,
    },
    user: {
      id: "1",
      username: "christovelvallen",
      avatar: "/assets/user.jpeg",
    },
  },
  {
    id: "1115",
    body: "Selamat siang bagi siapa yg merasa kehilangan HP, lokasi ditemukan di seputaran kantin UNSRIT, ada orang yg menemukan dan menitip untuk diinfokan, HP sekarang ada ruangan bidang akademik gedung Rektorat 🙏",
    images: ["/assets/post-9.jpeg"],
    createdAt: "30 mnt",
    count: {
      likes: 12,
      comments: 4,
      reposts: 1,
    },
    user: {
      id: "1",
      username: "marten",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "2",
    body: "Di sini ada yang bisa intergrasi claude code ke vscode?",
    createdAt: "1 jam",
    count: {
      likes: 32,
      comments: 18,
      reposts: 5,
    },
    user: {
      id: "1",
      username: "zuckerberg",
      avatar: "/assets/user-2.jpg",
    },
  },
  {
    id: "3",
    body: "Windows 12 beta sekarang sudah bisa di akses dan di uji coba",
    createdAt: "3 jam",
    count: {
      likes: 40,
      comments: 24,
      reposts: 2,
    },
    user: {
      id: "1",
      username: "billgates",
      avatar: "/assets/user-3.jpg",
    },
  },
  {
    id: "22",
    body: "Turnamen Futsal Antar Mahasiswa UNSRIT CUP SEASON 3",
    images: ["/assets/post-5.jpeg"],
    createdAt: "12 jam",
    count: {
      likes: 8,
      comments: 4,
      reposts: 0,
    },
    user: {
      id: "1",
      username: "yosualambe",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "1222",
    body: "Selaman datang di UNSRIT Connection!",
    createdAt: "1 hari",
    count: {
      likes: 109,
      comments: 36,
      reposts: 7,
    },
    user: {
      id: "1",
      username: "christovelvallen",
      avatar: "/assets/user.jpeg",
    },
  },
];

const myPost: Post[] = [
  {
    id: "1",
    body: "Ada yang tau ini error kenapa?",
    images: ["/assets/post-8.png"],
    createdAt: "5 mnt",
    count: {
      likes: 61,
      comments: 22,
      reposts: 3,
    },
    user: {
      id: "1",
      username: "christovelvallen",
      avatar: "/assets/user.jpeg",
    },
  },
  {
    id: "1222",
    body: "Selaman datang di UNSRIT Connection!",
    createdAt: "1 hari",
    count: {
      likes: 109,
      comments: 36,
      reposts: 7,
    },
    user: {
      id: "1",
      username: "christovelvallen",
      avatar: "/assets/user.jpeg",
    },
  },
];

export default function Page() {
  return (
    <div className="pb-24">
      <div className="px-3 py-1.5">
        <p className="text-3xl font-bold">Forum</p>
      </div>

      <PostTabs allPost={posts} myPost={myPost} />
    </div>
  );
}
