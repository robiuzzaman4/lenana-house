"use client";

import Image from "next/image";
import Link from "next/link";
import { useInquiry } from "@/context/InquiryContext";

const Residence = () => {
  const { openInquiry } = useInquiry();
  const features = [
    {
      title: "Cliffside Sea Views",
      description:
        "The villa is positioned on a private cliff, offering uninterrupted ocean views from living areas, bedrooms, and outdoor spaces.",
    },
    {
      title: "Open Living Spaces",
      description:
        "Spacious interiors with floor-to-ceiling glass create a seamless transition between indoor comfort and the natural surroundings.",
    },
    {
      title: "Private & Secluded",
      description:
        "No shared spaces, no crowds. The residence is fully private, designed for guests who value discretion and calm.",
    },
    {
      title: "Luxury Materials & Finishes",
      description:
        "High-quality natural materials, refined textures, and minimalist detailing define the interior experience.",
    },
    {
      title: "Natural Light Architecture",
      description:
        "Carefully planned layouts allow daylight to flow through the villa throughout the day without compromising privacy.",
    },
    {
      title: "Indoor–Outdoor Living",
      description:
        "Living and dining areas open directly to outdoor spaces, allowing guests to enjoy the sea breeze and views effortlessly.",
    },
  ];

  const galleryImages = [
    "/images/residence/r1.png",
    "/images/residence/r2.png",
    "/images/residence/r3.png",
    "/images/residence/r4.png",
    "/images/residence/r5.png",
    "/images/residence/r6.png",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/residence/hero.png"
          alt="Lenana House Residence Hero"
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
                <span className="text-white">Residence</span>
              </nav>
            </div>

            {/* Content - Bottom Left of container */}
            <div className="mt-auto mb-12 md:mb-24 max-w-2xl">
              <h1 className="text-3xl md:text-5xl uppercase tracking-widest mb-4 font-serif text-white leading-none italic">
                Residence
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide text-white/90 font-serif">
                5 classic rooms pointed to the Atlantic & cub
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

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl leading-tight font-serif text-primary italic">
            Lenana House is crafted as a full private residence, not a hotel
            experience. Every area is intentionally designed to feel open,
            quiet, and connected to the surrounding sea and landscape.
          </h2>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-6xl text-primary leading-tight font-serif">
              Private cliffside living with uninterrupted sea views.
            </h3>
            <p className="text-lg text-primary/80 leading-relaxed">
              The Residence is a private world set above the ocean where
              architecture, light, and landscape move in quiet harmony. Open
              layouts, natural textures, and panoramic views create an
              atmosphere that feels expansive yet deeply personal.
            </p>
            <button
              onClick={openInquiry}
              className="px-8 py-3 bg-secondary text-white uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-300 pointer-events-auto cursor-pointer"
            >
              Enquire
            </button>
          </div>
          <div className="relative aspect-4/5 w-full overflow-hidden">
            <Image
              src="/images/residence/middle.png"
              alt="Cliffside living"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-3xl font-serif text-dark">
                  {feature.title}
                </h4>
                <p className="text-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-24 md:pb-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  index === 2 || index === 5
                    ? "md:col-span-2 aspect-video"
                    : "md:col-span-1 aspect-4/5"
                }`}
              >
                <Image
                  src={img}
                  alt={`Residence gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residence;
