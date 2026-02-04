"use client";

import Image from "next/image";
import Link from "next/link";
import { useInquiry } from "@/context/InquiryContext";

const Gallery = () => {
  const { openInquiry } = useInquiry();
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/hero.png"
          alt="Lenana House Gallery Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Layout Container */}
        <div className="absolute inset-0 z-20 px-4 lg:px-16">
          <div className="max-w-[1312px] mx-auto w-full h-full flex flex-col relative">
            {/* Breadcrumbs - Top Left of container */}
            <div className="pt-28">
              <nav className="flex items-center space-x-2 text-white/80 text-sm md:text-base font-serif">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Gallery</span>
              </nav>
            </div>

            {/* Content - Bottom Left of container */}
            <div className="mt-auto mb-12 md:mb-24 max-w-2xl">
              <h1 className="text-3xl md:text-5xl uppercase tracking-widest mb-4 font-serif text-white leading-none italic">
                Gallery
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide text-white/90 font-serif">
                Lenana House villa
              </p>
            </div>

            {/* Scroll Indicator - Bottom Right of container */}
            <div className="absolute bottom-10 right-0 hidden md:flex flex-col items-center gap-2">
              <span className="text-white/60 text-xs uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12">
                Scroll
              </span>
              <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Large Images */}
      <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="relative aspect-video w-full overflow-hidden shadow-sm">
            <Image
              src="/images/gallery/g1.png"
              alt="Gallery view 1"
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
          <div className="relative aspect-video w-full overflow-hidden shadow-sm">
            <Image
              src="/images/gallery/g2.png"
              alt="Gallery view 2"
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Video Grid Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-dark italic">
            Discover the story in videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
              <Image
                src="/images/gallery/g3.png"
                alt="Gallery story 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
              <Image
                src="/images/gallery/g4.png"
                alt="Gallery story 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
              <Image
                src="/images/gallery/g5.png"
                alt="Gallery story 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - CTA Block */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto bg-[#253940] py-20 px-10 text-center space-y-8 rounded-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-widest leading-tight uppercase">
            Ready to experience the <br /> ultimate villa retreat?
          </h2>
          <button
            onClick={openInquiry}
            className="inline-block px-12 py-4 bg-[#BFA58A] text-white uppercase tracking-widest text-sm hover:bg-white hover:text-dark transition-all duration-300 font-serif cursor-pointer"
          >
            Enquire
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
