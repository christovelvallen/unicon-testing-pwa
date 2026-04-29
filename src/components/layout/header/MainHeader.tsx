"use client";

import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export function MainHeader() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div>
        <Avatar>
          <Avatar.Image alt="User" src="/assets/user.jpeg" />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar>
      </div>

      <div className="flex-1">
        <Button variant="tertiary" fullWidth className="text-muted">
          <Icon icon={"mingcute:search-line"} />
          Search
        </Button>
      </div>

      <div>
        <Button variant="tertiary" isIconOnly className="text-muted">
          <Icon icon={"mingcute:notification-fill"} className="size-6" />
        </Button>
      </div>
    </div>
  );
}
