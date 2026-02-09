"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  className?: string;
}

const CategoryMobileCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden w-full group cursor-none h-[600px] lg:h-[730px] aspect-4/3",
        className,
      )}
    >
      <Link
        href={link}
        className="grid place-items-center w-full h-full relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
          backgroundSize: "105%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition:
            "background-size 1000ms ease, background-image 500ms ease",
        }}
      >
        {/* Title (Centered) */}
        <div className="flex items-center justify-center text-white pointer-events-none">
          <h3 className="text-3xl tracking-[0.5%] uppercase italic">{title}</h3>
        </div>

        {/* Discover Link (Bottom Left) */}
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-lg lg:text-[32px] tracking-widest border-b border-white pb-1 group-hover:opacity-70 transition-opacity">
            Discover
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryMobileCard;
