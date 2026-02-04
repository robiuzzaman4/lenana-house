import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-dark text-white pt-20 pb-10 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-7">
            <h2 className="text-2xl font-serif tracking-[0.2em] uppercase italic">
              LENANA
            </h2>
            <p className="text-white text-sm leading-relaxed tracking-wider max-w-[200px]">
              A private villa for seasonal living and quiet stays.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-[160px]">
            {/* Quick Links */}
            <ul className="space-y-5 text-sm tracking-wide text-white/50">
              <li>
                <Link
                  href="/residence"
                  className="hover:text-secondary transition-colors"
                >
                  Residence
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-secondary transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-secondary transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-secondary transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>

            {/* More Links */}
            <ul className="space-y-5 text-sm tracking-wide text-white/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>

            {/* Address */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed tracking-wide text-white/50 max-w-[140px] ">
                The Lenana villa 18 Via della Collina 20123, Milan Italy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs tracking-widest text-white/30 ">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          <p>Design by Tajul</p>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="absolute inset-x-0 -bottom-16 pointer-events-none opacity-[0.03] flex justify-center overflow-hidden h-[70%] items-end translate-y-1/4 max-w-7xl mx-auto">
        <span className="text-[18vw] font-serif leading-none tracking-tighter select-none">
          LENANA
        </span>
      </div>
    </footer>
  );
};

export default Footer;
