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

        {/* Breadcrumbs - Top Left */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <nav className="flex items-center space-x-2 text-white/80 text-sm md:text-base font-serif">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Rooms</span>
          </nav>
        </div>

        {/* Content - Bottom Left */}
        <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 z-20 max-w-2xl">
          <h1 className="text-3xl md:text-5xl uppercase tracking-widest mb-4 font-serif text-white leading-none italic">
            Rooms
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide text-white/90 font-serif">
            Private, calm spaces designed for couples who value comfort,
            privacy, and connection with nature.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Intro Section - Superior Double Room */}
      <section className="py-12 md:py-24 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-dark">
            Signature Double Room
          </h2>
          <p className="text-dark tracking-wide text-baes">
            Private, calm spaces designed for couples who value comfort,
            privacy, and connection with nature.
          </p>
        </div>
      </section>

      {/* Gallery 1 */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/rooms/r1.png"
                alt="Room detail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/rooms/r2.png"
                alt="Room detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/rooms/r3.png"
              alt="Room view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - A residence shaped */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-start">
          <h3 className="text-3xl md:text-5xl font-serif text-dark leading-tight">
            A residence shaped by its surroundings.
          </h3>
          <p className="text-lg text-dark leading-relaxed font-light">
            Every room at Lenana House is positioned to take advantage of
            natural light, views, and airflow. Materials are kept honest and
            warm, allowing the architecture to stay calm while the surroundings
            do the talking.
          </p>
        </div>
      </section>

      {/* Gallery 2 */}
      <section className="pb-24 md:pb-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/rooms/r4.png"
                alt="Room detail 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/rooms/r5.png"
                alt="Room detail 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/rooms/r6.png"
              alt="Room detail 6"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/rooms/r7.png"
              alt="Room detail 7"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
