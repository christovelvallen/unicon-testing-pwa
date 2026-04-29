"use client";

import { cn } from "@/lib/cn";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarTabsItem {
  href: string;
  label: string;
  icon: { line: string; fill: string };
}

interface NavbarTabsProps {
  items: NavbarTabsItem[];
}

export function NavbarTabs({ items }: NavbarTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-surface border-default fixed right-0 bottom-0 left-0 flex h-16 border-t px-3">
      {items.map((item) => (
        <Button
          key={item.href}
          onPress={() => router.push(item.href)}
          className="h-full flex-1 flex-col gap-0 rounded-none bg-transparent px-3 py-1.5"
        >
          <div
            className={cn(
              "flex size-full items-center justify-center rounded-full",
              pathname === item.href
                ? "bg-accent-soft text-accent"
                : "text-muted",
            )}
          >
            <Icon
              icon={pathname === item.href ? item.icon.fill : item.icon.line}
              className="size-7"
            />
          </div>
          <span
            className={cn(
              "text-xs",
              pathname === item.href ? "text-foreground" : "text-muted",
            )}
          >
            {item.label}
          </span>
        </Button>
      ))}
    </div>
  );
}
