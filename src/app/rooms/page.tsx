import Gallery1 from "@/components/pages/rooms/Gallery1";
import Gallery2 from "@/components/pages/rooms/Gallery2";
import Intro from "@/components/pages/rooms/Intro";
import ResidenceShaped from "@/components/pages/rooms/ResidenceShaped";
import Image from "next/image";
import Link from "next/link";

const Rooms = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/rooms/hero.png"
          alt="Lenana House Rooms Hero"
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
              <nav className="flex items-center space-x-2 text-white/80 text-lg font-sans">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Rooms</span>
              </nav>
            </div>

            {/* Content - Bottom Left of container */}
            <div className="mt-auto mb-12 md:mb-24 max-w-2xl">
              <h1 className="text-3xl lg:text-5xl uppercase mb-2 text-white italic">
                Rooms
              </h1>
              <p className="text-base text-white tracking-wider">
                Luxurious rooms
              </p>
            </div>

            {/* Scroll Indicator - Bottom Right of container */}
            {/* <div className="absolute bottom-10 right-0 hidden md:flex flex-col items-center gap-2">
              <span className="text-white/60 text-xs uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12">
                Scroll
              </span>
              <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Intro Section - Superior Double Room */}
      <Intro />

      {/* Gallery 1 */}
      <Gallery1 />

      {/* Section 2 - A residence shaped */}
      <ResidenceShaped />

      {/* Gallery 2 */}
      <Gallery2 />
    </div>
  );
};

export default Rooms;
