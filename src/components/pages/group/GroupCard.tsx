"use client";

import { Avatar, Button, Chip } from "@heroui/react";

interface GroupItem {
  id: string;
  avatar: string;
  title: string;
  description: string;
  notification?: { time: string; count: number };
}

interface GroupCardProps {
  item: GroupItem;
  hasJoinButton?: boolean;
}

export function GroupCard({ item, hasJoinButton = false }: GroupCardProps) {
  return (
    <div className="flex items-center gap-3 p-3">
      <div>
        <Avatar className="size-12">
          <Avatar.Image alt={item.title} src={item.avatar} />
          <Avatar.Fallback>{item.title.at(0)}</Avatar.Fallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <p className="flex-1 font-semibold">{item.title}</p>
          {item.notification && (
            <p className="text-accent text-xs font-semibold">
              {item.notification.time}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-muted flex-1 text-sm">{item.description}</p>
          {item.notification && (
            <Chip
              variant="primary"
              color="accent"
              size="sm"
              className="px-1.25 font-semibold"
            >
              {item.notification.count}
            </Chip>
          )}
        </div>
      </div>
      {hasJoinButton && (
        <Button variant="secondary" size="sm">
          Gabung
        </Button>
      )}
    </div>
  );
}

export type { GroupItem };
