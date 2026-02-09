// "use client";

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface CardProps {
//   i: number;
//   title: string;
//   link: string;
//   imageSrc: string;
// }

// const Card: React.FC<CardProps> = ({ i, title, link, imageSrc }) => {
//   const container = useRef(null);
//   return (
//     <div
//       ref={container}
//       className={cn("h-[800px] flex items-center justify-center sticky top-0", {
//         "border-t border-white": i !== 0,
//       })}
//     >
//       <motion.div className="flex flex-col relative h-[800px] w-full overflow-hidden origin-top">
//         {/* Background Image with Parallax */}
//         <motion.div
//           className="absolute inset-0 w-full h-full"
//           style={{
//             scale: 1,
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Centered Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 z-10 space-y-2">
//           <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight uppercase">
//             {title}
//           </h2>
//           <Link
//             href={link}
//             className="text-sm uppercase font-sans tracking-widest border-b border-white group-hover:opacity-70 transition-opacity"
//           >
//             Discover
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const cards = [
//   {
//     title: "RESIDENCE",
//     link: "/residence",
//     imageSrc: "/images/home/residence.png",
//   },
//   {
//     title: "ROOMS",
//     link: "/rooms",
//     imageSrc: "/images/home/rooms.png",
//   },
//   {
//     title: "EXPERIENCE",
//     link: "/experience",
//     imageSrc: "/images/home/experience.png",
//   },
//   {
//     title: "GALLERY",
//     link: "/gallery",
//     imageSrc: "/images/home/gallery.png",
//   },
// ];

// export default function ParallaxGallery() {
//   const container = useRef(null);
//   return (
//     <main ref={container}>
//       <section className="w-full">
//         {cards.map((card, i) => {
//           return (
//             <Card
//               key={`card_${i}`}
//               i={i}
//               title={card.title}
//               link={card.link}
//               imageSrc={card.imageSrc}
//             />
//           );
//         })}
//       </section>
//     </main>
//   );
// }

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  index: number;
  title: string;
  link: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ index, title, link, imageSrc }) => {
  const container = useRef(null);

  // We track the card from when it enters the bottom (start end)
  // to when it leaves the top (end start)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // 1. BACKGROUND PARALLAX
  // The image moves slightly upward as you scroll down
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // 2. CONTENT DROP ANIMATION
  // 0.0 -> Card enters bottom
  // 0.5 -> Card is perfectly centered in viewport
  // 1.0 -> Card leaves top
  // We want the text to move from 0 (middle) to 400px (bottom of card)
  // as the card moves from center to exit.
  const contentY = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.8], // Timing: start early, stay middle at 0.5, drop by 1.0
    ["-100px", "0px", "450px"],
  );

  // 3. FADE OUT
  // Fade out the text as it nears the bottom edge of the card
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={container}
      className={cn("relative h-[800px] w-full overflow-hidden", {
        "border-t-[0.5px] border-white": index !== 0,
      })}
    >
      {/* Background Layer */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      />

      {/* Content Layer (Title & Action) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          style={{ y: contentY, opacity: opacity }}
          className="flex flex-col items-center space-y-2 px-6 text-center"
        >
          <h2 className="text-5xl text-white font-serif tracking-[0.5%] uppercase italic">
            {title}
          </h2>
          <Link
            href={link}
            className="text-sm font-medium uppercase font-sans text-white underline underline-offset-4 tracking-widest"
          >
            Discover
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default function ParallaxGallery() {
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

  return (
    <main className="w-full">
      {cards.map((card, i) => (
        <Card
          key={i}
          index={i}
          title={card.title}
          link={card.link}
          imageSrc={card.imageSrc}
        />
      ))}
    </main>
  );
}
