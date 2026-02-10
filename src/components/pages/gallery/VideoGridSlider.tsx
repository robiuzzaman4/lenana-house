"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const VideoGridSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const videos = [
    { src: "/images/gallery/g3.png", alt: "Gallery story 3" },
    { src: "/images/gallery/g4.png", alt: "Gallery story 4" },
    { src: "/images/gallery/g5.png", alt: "Gallery story 5" },
    { src: "/images/gallery/g3.png", alt: "Gallery story 3" },
    { src: "/images/gallery/g4.png", alt: "Gallery story 4" },
    { src: "/images/gallery/g5.png", alt: "Gallery story 5" },
  ];

  return (
    <section className="px-4 lg:px-16 overflow-hidden">
      <div className="max-w-[1312px] mx-auto space-y-16">
        <h2 className="text-3xl md:text-[40px] text-center">
          Discover the story in videos
        </h2>
        <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
          <div className="flex gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex-[0_0_100%] md:flex-[0_0_calc(33.333%-21.33px)] aspect-4/5 overflow-hidden group",
                  {
                    "ml-8": index === 0,
                  },
                )}
              >
                <Image
                  src={video.src}
                  alt={video.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="size-8 flex items-center justify-center rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-300 hover:cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={scrollNext}
            className="size-8 flex items-center justify-center rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-300 hover:cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoGridSlider;
