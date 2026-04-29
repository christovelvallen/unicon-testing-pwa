"use client";

import { Tabs } from "@heroui/react";
import { GroupCard, type GroupItem } from "./GroupCard";

interface GroupTabsProps {
  myGroup: GroupItem[];
  explore: GroupItem[];
}

export function GroupTabs({ myGroup, explore }: GroupTabsProps) {
  return (
    <Tabs variant="secondary" className="w-full gap-0">
      <Tabs.ListContainer>
        <Tabs.List aria-label="GroupTabs" className="px-3">
          <Tabs.Tab id="myGroup" className="h-auto p-0 pb-1.5 text-base">
            Grup saya
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="explore" className="h-auto p-0 pb-1.5 text-base">
            Jelajahi lainnya
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>

      <Tabs.Panel id="myGroup" className="p-0">
        {myGroup.map((item) => (
          <GroupCard key={item.id} item={item} />
        ))}
      </Tabs.Panel>

      <Tabs.Panel id="explore" className="p-0">
        {explore.map((item) => (
          <GroupCard key={item.id} item={item} hasJoinButton />
        ))}
      </Tabs.Panel>
    </Tabs>
  );
}
