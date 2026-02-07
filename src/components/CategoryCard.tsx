"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden w-full group cursor-none h-[300px] lg:h-[730px]",
        className,
      )}
    >
      <Link href={link} className="block w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

        {/* Title (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
          <h3 className="text-3xl md:text-5xl font-serif tracking-[0.5%] uppercase italic">
            {title}
          </h3>
        </div>

        {/* Discover Link (Bottom Left) */}
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-lg lg:text-[32px] tracking-widest border-b border-white pb-1 group-hover:opacity-70 transition-opacity">
            Discover
          </span>
        </div>
      </Link>

      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              left: cursorX,
              top: cursorY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute pointer-events-none z-50 flex items-center justify-center size-16 bg-[#BFA58A]/90 rounded-full backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-white">
              <ArrowUpRight size={16} />
              <span className="text-xs uppercase mt-1">View</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryCard;
