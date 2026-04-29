"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { PostStory } from "@/components/pages/info/PostStory";
import { POST_COLOR, type PostColor } from "./constants";
import type { Post } from "./types";

interface PostStoryListProps {
  posts: Post[];
  colors: PostColor;
}

export function PostStoryList({ posts, colors }: PostStoryListProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className={`${POST_COLOR[colors].backgroundSoft} relative h-screen overflow-hidden`}
    >
      <div className="absolute top-0 right-0 left-0 z-10 flex gap-1 p-3">
        {posts.map((_, i) => (
          <div
            key={i}
            className="bg-surface h-0.5 flex-1 overflow-hidden rounded"
          >
            <div
              className={`h-full transition-all duration-300 ${
                i <= selectedIndex
                  ? `${POST_COLOR[colors].background} w-full`
                  : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      <div ref={emblaRef} className="mt-3 h-full overflow-hidden">
        <div className="flex h-full">
          {posts.map((post) => (
            <div key={post.id} className="min-h-full min-w-full">
              <PostStory post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
