import useEmblaCarousel from "embla-carousel-react";

export function useCarousel() {
  const [emblaRef] = useEmblaCarousel({
    axis: "x",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return { emblaRef };
}
