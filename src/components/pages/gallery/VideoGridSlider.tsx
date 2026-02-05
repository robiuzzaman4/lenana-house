"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const VideoGridSlider = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

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
                  "relative flex-[0_0_100%] md:flex-[0_0_calc(33.333%-21.33px)] aspect-4/5 overflow-hidden group cursor-pointer",
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
      </div>
    </section>
  );
};

export default VideoGridSlider;
