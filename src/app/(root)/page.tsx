import { PostCard } from "@/components/pages/info/PostCard";
import { PostCategory } from "@/components/pages/info/PostCategory";
import type { Post } from "@/components/pages/info/types";

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
    images: ["/assets/post-3.jpeg", "/assets/post-2.jpeg"],
    category: "Akademik",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Felicia F. Aotama S.I.Kom.,M.I.Kom",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "22",
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
  {
    id: "33",
    images: ["/assets/post-7.jpeg"],
    category: "Event",
    createdAt: "1 jam",
    user: {
      id: "1",
      fullName: "Felicia F. Aotama S.I.Kom.,M.I.Kom",
      avatar: "/assets/user-1.png",
    },
  },
  {
    id: "3",
    body: `Selamat sore, ditujukan kepada semua mahasiswa untuk memperhatikan pengumuman dan diharapkan kehadiran semua mahasiswa. Terima kasih. 
    
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
    <div>
      <div className="px-3 py-1.5">
        <p className="text-3xl font-bold">Pusat Informasi</p>
      </div>

      <div>
        <PostCategory />
      </div>

      <div className="flex flex-col pb-24">
        {posts.map((post) => (
          <div key={post.id} className="border-default border-t">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
