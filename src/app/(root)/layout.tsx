import { MainHeader } from "@/components/layout/header/MainHeader";
import { NavbarTabs } from "@/components/ui/NavbarTabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <MainHeader />
      {children}
      <NavbarTabs
        items={[
          {
            href: "/",
            label: "Info",
            icon: {
              line: "mingcute:announcement-line",
              fill: "mingcute:announcement-fill",
            },
          },
          {
            href: "/forum",
            label: "Forum",
            icon: {
              line: "mingcute:comment-line",
              fill: "mingcute:comment-fill",
            },
          },
          {
            href: "/group",
            label: "Grup",
            icon: {
              line: "mingcute:group-3-line",
              fill: "mingcute:group-3-fill",
            },
          },
        ]}
      />
    </div>
  );
}
