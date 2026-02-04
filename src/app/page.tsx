import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/home/hero_day.png"
          alt="Lenana House Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-[0.2em] mb-8 italic">
            LENANA HOUSE
          </h1>
          <div className="flex justify-center space-x-2">
            <span className="w-10 h-px bg-white translate-y-3"></span>
            <span className="text-xs tracking-[0.4em]">Villa</span>
            <span className="w-10 h-px bg-white translate-y-3"></span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-16 bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-dark tracking-widest">
            About us
          </h2>
          <p className="text-dark/70 text-base md:text-base leading-relaxed max-w-xl mx-auto">
            This villa was created as a private residence not a commercial
            property. Every space is thoughtfully designed for comfort, privacy,
            and ease, so it never feels like you’re away from home
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="px-6 md:px-12 py-12 space-y-6 max-w-[1400px] mx-auto w-full">
        {/* Residence and Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            title="RESIDENCE"
            image="/images/home/residence.png"
            link="/residence"
            small
          />
          <CategoryCard
            title="ROOMS"
            image="/images/home/rooms.png"
            link="/rooms"
            small
          />
        </div>

        {/* Experience */}
        <CategoryCard
          title="EXPERIENCE"
          image="/images/home/experience.png"
          link="/experience"
        />

        {/* Gallery */}
        <CategoryCard
          title="GALLERY"
          image="/images/home/gellary.png"
          link="/gallery"
        />
      </section>

      {/* Partners Section */}
      <section className="py-12 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl text-dark mb-12 italic">
            OUR PARTNERS
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-12 md:gap-24 opacity-60">
            {/* The partner.png contains multiple logos, usually shown as a strip */}
            {[...Array(8)].map((_, i) => (
              <Image
                key={i}
                src="/images/home/partner.png"
                alt="Partners"
                width={1000}
                height={100}
                className="object-contain max-w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight tracking-widest">
              The first step <br /> toward arrival
            </h2>
            <p className="text-dark text-base max-w-md leading-relaxed">
              For availability and bookings, or special requests, our team is at
              your side to help you plan your ideal stay at Lenana.
            </p>
          </div>

          <form className="space-y-6">
            <FormField
              label="First name"
              type="text"
              placeholder="First name"
            />
            <FormField label="Email" type="email" placeholder="Email" />
            <FormField
              label="Phone number"
              type="tel"
              placeholder="+ (242) 234 4567"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Preferred arrival date" type="date" />
              <FormField label="Departure date" type="date" />
            </div>

            <div className="space-y-2">
              <label className="text-sm tracking-widest text-dark">
                Message
              </label>
              <textarea
                className="w-full bg-white border border-black/5 px-4 py-3 min-h-[120px] focus:outline-none focus:border-secondary transition-colors text-sm"
                placeholder="How can we help?"
              />
            </div>

            <button className="w-full md:w-auto px-12 py-4 bg-secondary text-white tracking-widest text-xs hover:bg-dark transition-colors duration-500">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm tracking-widest text-dark">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-black/5 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm"
      />
    </div>
  );
}
