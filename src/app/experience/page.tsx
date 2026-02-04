import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const experiences = [
    {
      title: "PRIVATE MASSAGE",
      description:
        "Enjoy a personalized massage session in the privacy of your villa, delivered by a professional in-house therapist. Designed for deep relaxation and stress relief, this experience allows couples to unwind together without shared spaces or interruptions. Sessions are available on request and tailored to your preferences, ensuring a calm, restorative experience in a setting that feels entirely your own.",
      image: "/images/experience/e1.png",
    },
    {
      title: "HOT & COLD PLUNGE",
      description:
        "The villa features a private hot and cold plunge setup designed for physical recovery and relaxation. Guests can use the plunge after workouts, long walks, or simply as part of a daily wellness routine. The contrast between hot and cold helps release tension and refresh the body, while the private setup allows guests to use it freely at their own pace.",
      image: "/images/experience/e2.png",
    },
    {
      title: "SLOW SEA-VIEW MOMENTS",
      description:
        "Beyond structured activities, the villa offers open spaces with uninterrupted sea views where couples can relax, read, talk, or simply enjoy quiet time together. These moments are intentionally unprogrammed allowing guests to slow down, disconnect, and enjoy the setting without schedules or distractions.",
      image: "/images/experience/e3.png",
    },
  ];

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

        {/* Breadcrumbs - Top Left */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <nav className="flex items-center space-x-2 text-white/80 text-sm md:text-base font-serif">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Experience</span>
          </nav>
        </div>

        {/* Content - Bottom Left */}
        <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 z-20 max-w-2xl">
          <h1 className="text-3xl md:text-5xl uppercase tracking-widest mb-4 font-serif text-white leading-none italic">
            Experiences
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide text-white/90 font-serif">
            Discover the beauty of cape town
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

      {/* Intro Section */}
      <section className="pt-12 md:pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl leading-[1.6] font-serif text-dark text-start">
            Every experience at Lenana House is available within the villa.
            Guests do not need to leave the property or share facilities. Each
            space is designed to support rest, wellness, and quiet moments
            together throughout the stay.
          </h2>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col space-y-6 group">
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-dark tracking-wide italic">
                    {exp.title}
                  </h3>
                  <p className="text-dark/80 font-light leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 (Summary Intro) */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl leading-[1.6] font-serif text-dark text-start">
            Private, in-villa experiences designed for couples to relax, reset,
            and enjoy uninterrupted time together with open sea views.
          </h2>
        </div>
      </section>

      {/* Bottom Gallery */}
      <section className="pb-24 md:pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/experience/e4.png"
                alt="Lenana experience gallery 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/experience/e5.png"
                alt="Lenana experience gallery 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/experience/e6.png"
                alt="Lenana experience gallery 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
