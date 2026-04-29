import type { Viewport } from "next";

import { PostStoryList } from "@/components/pages/info/PostStoryList";
import type { Post } from "@/components/pages/info/types";

export const viewport: Viewport = {
  themeColor: "#D7F5E6",
};

const posts: Post[] = [
  {
    id: "1",
    body: `Hari ini Batas Pembayaran Terakhir BOP  Semester Genap 2025/2026                                                                                     Jumat, 23 Januari 2026. Pembayaran BOP diterima Melalui Loket Pembayaran UNSRIT Dengan Membawa Surat Pernyataan Link Surat Pernyataan: 
    
    https://drive.google.com/file/d/1EmwJC5WK-YPfKvh-6355MTrh1GbV8l50/view?usp=sharing 

    Persyaratan Pembayaran BOP :  
    1.	Tidak Bisa dicicil
    2.	Tidak Menerima Cashback`,
    images: ["/assets/post-6.jpeg"],
    category: "Keuangan",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Admin Bidang Keuangan",
      avatar: "/assets/user-1.png",
    },
  },
];

export default function Page() {
  return (
    <>
      <PostStoryList colors="success" posts={posts} />
    </>
  );
}
