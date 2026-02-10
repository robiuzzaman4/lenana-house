"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GallerySlider = () => {
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

  const images = [
    { src: "/images/experience/e4.png", alt: "Lenana experience gallery 4" },
    { src: "/images/experience/e5.png", alt: "Lenana experience gallery 5" },
    { src: "/images/experience/e6.png", alt: "Lenana experience gallery 6" },
    { src: "/images/experience/e4.png", alt: "Lenana experience gallery 4" },
    { src: "/images/experience/e5.png", alt: "Lenana experience gallery 5" },
    { src: "/images/experience/e6.png", alt: "Lenana experience gallery 6" },
  ];

  return (
    <section className="pb-[148px] px-4 lg:px-16 overflow-hidden">
      <div className="max-w-[1312px] mx-auto space-y-8">
        <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
          <div className="flex gap-8">
            {images.map((image, index) => (
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
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
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

export default GallerySlider;
