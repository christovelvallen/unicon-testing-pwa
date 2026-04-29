import type { Viewport } from "next";

import { PostStoryList } from "@/components/pages/info/PostStoryList";
import type { Post } from "@/components/pages/info/types";

export const viewport: Viewport = {
  themeColor: "#DCEEFF",
};

const posts: Post[] = [
  {
    id: "1",
    body: `Selamat siang, di Tujukan Kepada mahasiswa yang belum melaksanakan ujian Proposal. 
    
    Diingatkan lagi untuk konsultasi dengan pembimbing dan proses pengurusan rekom agar secepatnya melaksanakan Ujian Proposal. Mengingat batas pelaksanaan Ujian Proposal hanya sampai Tanggal 30 April 2026. 
    
    Demikian Informasi  atas perhatian disampaikan banyak terima kasih.`,
    category: "Akademik",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Felicia F. Aotama S.I.Kom.,M.I.Kom",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "2",
    images: ["/assets/post-3.jpeg"],
    category: "Akademik",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Felicia F. Aotama S.I.Kom.,M.I.Kom",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "3",
    body: `Selamat sore, ditujukan kepada semua mahasiswa untuk memperhatikan pengumuman diatas dan diharapkan kehadiran semua mahasiswa. Terima kasih. 
    
    Jam 09.30 pagi sudah berada dikampus. Atas perhatian disampaikan Terima Kasih.`,
    images: ["/assets/post-1.jpeg"],
    category: "Akademik",
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
      <PostStoryList colors="accent" posts={posts} />
    </>
  );
}
