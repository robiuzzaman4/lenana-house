import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  small?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  small = false,
}) => {
  return (
    <Link
      href={link}
      className={`group relative overflow-hidden ${
        small ? "h-[400px] md:h-[500px]" : "h-[500px] md:h-[600px]"
      } w-full block`}
    >
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
        <h3 className="text-3xl md:text-5xl font-serif tracking-[0.2em] uppercase">
          {title}
        </h3>
      </div>

      {/* Discover Link (Bottom Left) */}
      <div className="absolute bottom-10 left-10 text-white">
        <span className="text-lg tracking-widest border-b border-white pb-1 group-hover:opacity-70 transition-opacity">
          Discover
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
