"use client";

import { useRouter } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/cn";
import { useCarousel } from "@/hooks/useCarousel";

type CategoryKey = "create" | "academic" | "finance" | "news" | "event";

interface CategoryConfig {
  href: string;
  label: string;
  icon?: string;
  colorClass?: string;
}

const CATEGORY_CONFIG: Record<CategoryKey, CategoryConfig> = {
  create: {
    href: "/",
    label: "Buat",
  },
  academic: {
    href: "/posts/academic/stories",
    label: "Akademik",
    icon: "mingcute:mortarboard-fill",
    colorClass: "bg-accent-soft text-accent",
  },
  finance: {
    href: "/posts/finance/stories",
    label: "Keuangan",
    icon: "mingcute:wallet-3-fill",
    colorClass: "bg-success-soft text-success",
  },
  event: {
    href: "/posts/event/stories",
    label: "Event",
    icon: "mingcute:calendar-2-fill",
    colorClass: "bg-warning-soft text-warning",
  },
  news: {
    href: "/posts/news/stories",
    label: "Berita",
    icon: "mingcute:profile-fill",
    colorClass: "bg-danger-soft text-danger",
  },
};

interface PostCategoryItemProps {
  categoryKey: CategoryKey;
  notificationCount?: number;
}

function PostCategoryItem({
  categoryKey,
  notificationCount,
}: PostCategoryItemProps) {
  const router = useRouter();

  const { href, label, icon, colorClass } = CATEGORY_CONFIG[categoryKey];
  const isCreate = categoryKey === "create";

  return (
    <div className="flex flex-col gap-1">
      <Button
        onPress={() => router.push(href)}
        className={cn("relative size-16 rounded-full p-0", colorClass)}
      >
        {isCreate ? (
          <Avatar className="size-full">
            <Avatar.Image alt="User" src="/assets/user.jpeg" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar>
        ) : (
          icon && <Icon icon={icon} className="size-9" />
        )}

        {isCreate && (
          <div className="bg-accent text-accent-foreground ring-surface absolute -right-0.5 -bottom-0.5 flex size-6 items-center justify-center rounded-full ring-2">
            <Icon icon="mingcute:add-fill" className="size-4" />
          </div>
        )}

        {notificationCount && (
          <div className="bg-danger text-danger-foreground absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full">
            <span className="text-xs font-semibold">{notificationCount}</span>
          </div>
        )}
      </Button>
      <span className="text-center text-xs font-medium select-none">
        {label}
      </span>
    </div>
  );
}

export function PostCategory() {
  const { emblaRef } = useCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-3 p-3">
        <PostCategoryItem categoryKey="create" />
        <PostCategoryItem categoryKey="academic" notificationCount={2} />
        <PostCategoryItem categoryKey="finance" notificationCount={1} />
        <PostCategoryItem categoryKey="event" notificationCount={1} />
        <PostCategoryItem categoryKey="news" notificationCount={1} />
        <div className="shrink-0" />
      </div>
    </div>
  );
}
