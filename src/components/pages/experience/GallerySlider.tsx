"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const GallerySlider = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

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
      <div className="max-w-[1312px] mx-auto">
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
      </div>
    </section>
  );
};

export default GallerySlider;
