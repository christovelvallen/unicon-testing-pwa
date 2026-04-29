"use client";

import { Separator, Tabs } from "@heroui/react";
import { PostCard } from "./PostCard";
import type { Post } from "./types";

interface PostTabsProps {
  allPost: Post[];
  myPost: Post[];
}

export function PostTabs({ allPost, myPost }: PostTabsProps) {
  return (
    <Tabs variant="secondary" className="w-full gap-0">
      <Tabs.ListContainer>
        <Tabs.List aria-label="PostTabs" className="px-3">
          <Tabs.Tab id="all-post" className="h-auto p-0 pb-1.5 text-base">
            Semua orang
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="my-post" className="h-auto p-0 pb-1.5 text-base">
            Postingan saya
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>

      <Tabs.Panel id="all-post" className="p-0">
        {allPost.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
            <Separator />
          </div>
        ))}
      </Tabs.Panel>

      <Tabs.Panel id="my-post" className="p-0">
        {myPost.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
            <Separator />
          </div>
        ))}
      </Tabs.Panel>
    </Tabs>
  );
}
