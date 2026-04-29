"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";

import type { Post } from "./types";

function PostImages({ images }: { images: string[] }) {
  const isCarousel = images.length > 1;

  const [emblaRef] = useEmblaCarousel(
    isCarousel
      ? {
          dragFree: true,
        }
      : undefined,
  );

  return (
    <div ref={isCarousel ? emblaRef : undefined} className="overflow-hidden">
      <div className="flex gap-3 px-3 pl-16">
        {images.map((img) => (
          <Image
            key={img}
            src={img}
            alt="post"
            width={400}
            height={400}
            className="pointer-events-none h-auto w-full rounded-2xl select-none"
          />
        ))}
        {isCarousel && <div className="shrink-0" />}
      </div>
    </div>
  );
}

function PostCardAction({ post }: PostCardProps) {
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-1 gap-6">
        <button
          onClick={() => setIsLike(!isLike)}
          className="flex items-center gap-1.5"
        >
          <Icon
            icon={isLike ? "mingcute:heart-fill" : "mingcute:heart-line"}
            className={`${isLike ? "text-danger" : "text-muted"} size-5`}
          />
          <span className="text-muted text-sm font-medium">
            {post.count.likes}
          </span>
        </button>
        <button className="flex items-center gap-1.5">
          <Icon icon={"mingcute:chat-3-line"} className="text-muted size-5" />
          <span className="text-muted text-sm font-medium">
            {post.count.comments}
          </span>
        </button>
        <button className="flex items-center gap-1.5">
          <Icon icon={"mingcute:repeat-line"} className="text-muted size-5" />
          <span className="text-muted text-sm font-medium">
            {post.count.reposts}
          </span>
        </button>
      </div>
      <button>
        <Icon
          icon={"mingcute:share-forward-line"}
          className="text-muted size-5"
        />
      </button>
    </>
  );
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col gap-1.5 py-3">
      <div className="flex gap-3 px-3">
        <div>
          <Avatar>
            <Avatar.Image alt={post.user.username} src={post.user.avatar} />
            <Avatar.Fallback>{post.user.username.at(0)}</Avatar.Fallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <div className="flex">
            <div className="flex flex-1 items-center gap-3">
              <p className="font-semibold">{post.user.username}</p>
              <p className="text-muted text-sm">{post.createdAt}</p>
            </div>
            <button>
              <Icon icon={"mingcute:more-1-fill"} />
            </button>
          </div>
          {post.body && (
            <p className="wrap-anywhere whitespace-pre-line">{post.body}</p>
          )}
        </div>
      </div>

      {post.images && post.images.length > 0 && (
        <PostImages images={post.images} />
      )}

      <div className="flex px-3 pl-16">
        <PostCardAction post={post} />
      </div>
    </div>
  );
}
