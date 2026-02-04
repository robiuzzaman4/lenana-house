"use client";

import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Day Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isDay ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/images/home/hero_day.png"
          alt="Lenana House Hero Day"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Night Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${!isDay ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/images/home/hero_night.png"
          alt="Lenana House Hero Night"
          fill
          priority={!isDay}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col px-4 lg:px-16">
        <div className="max-w-[1312px] mx-auto w-full h-full flex flex-col relative">
          {/* Centered Title */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-serif tracking-[0.2em] uppercase italic">
                LENANA HOUSE
              </h1>
            </div>
          </div>

          {/* Day/Night Switcher - Bottom Left of container */}
          <div className="pb-10">
            <div className="bg-[#FCF8EE] p-1.5 flex items-center shadow-2xl w-fit pointer-events-auto">
              <button
                onClick={() => setIsDay(true)}
                className={`px-4 py-[6px] text-sm font-serif tracking-widest transition-all duration-500 cursor-pointer ${
                  isDay
                    ? "bg-[#253940] text-white"
                    : "text-[#253940] hover:bg-black/5"
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setIsDay(false)}
                className={`px-4 py-[6px] text-sm font-serif tracking-widest transition-all duration-500 cursor-pointer ${
                  !isDay
                    ? "bg-[#253940] text-white"
                    : "text-[#253940] hover:bg-black/5"
                }`}
              >
                Night
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Stays absolute screen center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-20">
        <div className="w-px h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
