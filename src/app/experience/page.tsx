import ExperiencesGrid from "@/components/pages/experience/ExperiencesGrid";
import GallerySlider from "@/components/pages/experience/GallerySlider";
import Intro from "@/components/pages/experience/Intro";
import SummaryIntro from "@/components/pages/experience/SummaryIntro";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/experience/hero.png"
          alt="Lenana House Experiences Hero"
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
                <span className="text-white">Experience</span>
              </nav>
            </div>

            {/* Content - Bottom Left of container */}
            <div className="mt-auto mb-12 md:mb-24 max-w-2xl">
              <h1 className="text-3xl md:text-5xl uppercase tracking-widest mb-4 font-serif text-white leading-none italic">
                Experiences
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide text-white/90 font-serif">
                Discover the beauty of cape town
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
      <Intro />

      {/* Experiences Grid */}
      <ExperiencesGrid />

      {/* Summary Intro */}
      <SummaryIntro />

      {/* Gallery Slider */}
      <GallerySlider />
    </div>
  );
};

export default Experience;
