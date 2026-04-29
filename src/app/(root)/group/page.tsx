import { GroupTabs } from "@/components/pages/group/GroupTabs";
import type { GroupItem } from "@/components/pages/group/GroupCard";

const items: GroupItem[] = [
  {
    id: "1",
    avatar: "/assets/group-4.png",
    title: "UNSRIT Connection",
    description: "@christovelvallen: Hello World...",
    notification: { time: "10.00", count: 4 },
  },
  {
    id: "2",
    avatar: "/assets/group-1.jpg",
    title: "SAINS DAN TEKNOLOGI",
    description: "@christovelvallen: Hello World...",
    notification: { time: "10.00", count: 4 },
  },
  {
    id: "3",
    avatar: "/assets/group-3.jpeg",
    title: "UNSRIT UNITED",
    description: "@christovelvallen: Hello World...",
    notification: { time: "10.00", count: 4 },
  },
  {
    id: "4",
    avatar: "/assets/group-5.png",
    title: "Teknik Informatika 2020",
    description: "@christovelvallen: Hello World...",
    notification: { time: "10.00", count: 4 },
  },
];

const explore: GroupItem[] = [
  {
    id: "1",
    avatar: "/assets/group-2.jpg",
    title: "BEM UNSRIT",
    description: "50 anggota tergabung",
  },
  {
    id: "2",
    avatar: "/assets/group-1.jpg",
    title: "FKIK 2026",
    description: "50 anggota tergabung",
  },
  {
    id: "3",
    avatar: "/assets/group-1.jpg",
    title: "FMBK 2025",
    description: "50 anggota tergabung",
  },
  {
    id: "6",
    avatar: "/assets/group-1.jpg",
    title: "UKM Kerohanian",
    description: "50 anggota tergabung",
  },
  {
    id: "4",
    avatar: "/assets/group-5.png",
    title: "Kelas: Kalkulus 1",
    description: "50 anggota tergabung",
  },
  {
    id: "5",
    avatar: "/assets/group-5.png",
    title: "Kelas: Kalkulus 2",
    description: "50 anggota tergabung",
  },
];

export default function Page() {
  return (
    <div className="pb-24">
      <div className="px-3 py-1.5">
        <p className="text-3xl font-bold">Grup</p>
      </div>

      <GroupTabs myGroup={items} explore={explore} />
    </div>
  );
}
