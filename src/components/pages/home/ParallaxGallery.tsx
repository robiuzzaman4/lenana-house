"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  i: number;
  title: string;
  link: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ i, title, link, imageSrc }) => {
  const container = useRef(null);
  return (
    <div
      ref={container}
      className={cn("h-[800px] flex items-center justify-center sticky top-0", {
        "border-t border-white": i !== 0,
      })}
    >
      <motion.div className="flex flex-col relative h-[800px] w-full overflow-hidden origin-top">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            scale: 1,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 z-10 space-y-2">
          <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight uppercase">
            {title}
          </h2>
          <Link
            href={link}
            className="text-sm uppercase font-sans tracking-widest border-b border-white group-hover:opacity-70 transition-opacity"
          >
            Discover
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const cards = [
  {
    title: "RESIDENCE",
    link: "/residence",
    imageSrc: "/images/home/residence.png",
  },
  {
    title: "ROOMS",
    link: "/rooms",
    imageSrc: "/images/home/rooms.png",
  },
  {
    title: "EXPERIENCE",
    link: "/experience",
    imageSrc: "/images/home/experience.png",
  },
  {
    title: "GALLERY",
    link: "/gallery",
    imageSrc: "/images/home/gallery.png",
  },
];

export default function ParallaxGallery() {
  const container = useRef(null);
  return (
    <main ref={container}>
      <section className="w-full">
        {cards.map((card, i) => {
          return (
            <Card
              key={`card_${i}`}
              i={i}
              title={card.title}
              link={card.link}
              imageSrc={card.imageSrc}
            />
          );
        })}
      </section>
    </main>
  );
}
