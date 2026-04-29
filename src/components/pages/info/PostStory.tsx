"use client";

import Image from "next/image";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

import type { Post } from "./types";

interface PostStoryProps {
  post: Post;
}

export function PostStory({ post }: PostStoryProps) {
  return (
    <div className="flex h-full flex-col gap-1.5 overflow-hidden py-3">
      <div className="flex gap-3 px-3">
        <div>
          <Avatar>
            <Avatar.Image alt={post.user.fullName} src={post.user.avatar} />
            <Avatar.Fallback>{post.user.fullName.at(0)}</Avatar.Fallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <div className="flex">
            <div className="flex flex-1 items-center gap-3">
              <p className="font-semibold">{post.category}</p>
              <p className="text-muted text-sm">{post.createdAt}</p>
            </div>
            <button>
              <Icon icon={"mingcute:more-1-fill"} />
            </button>
          </div>
          <div className="flex gap-1">
            <Icon
              icon={"mingcute:corner-down-right-line"}
              className="text-muted size-3 pt-px"
            />
            <p className="text-muted text-xs">{post.user.fullName}</p>
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 pb-12">
        {post.images && post.images.length > 0 && (
          <div className="mt-1.5 flex flex-col gap-3">
            {post.images.map((img) => (
              <Image
                key={img}
                src={img}
                alt="post"
                width={400}
                height={400}
                className="pointer-events-none h-auto w-full select-none"
              />
            ))}
          </div>
        )}
        {post.body && <p className="whitespace-pre-line">{post.body}</p>}
      </div>
    </div>
  );
}
