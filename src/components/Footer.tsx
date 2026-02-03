import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-dark text-white pt-20 pb-10 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] uppercase">
              LENANA
            </h2>
            <p className="text-white/60 text-xs leading-relaxed uppercase tracking-wider max-w-[200px] ">
              A private villa for seasonal living and quiet stays.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-6">
              Residence
            </h3>
            <ul className="space-y-2 text-sm tracking-wide ">
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
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-secondary transition-colors"
                >
                  Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-6">
              Follow
            </h3>
            <ul className="space-y-2 text-sm tracking-wide ">
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
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-6 ">
              Location
            </h3>
            <p className="text-sm leading-relaxed tracking-wide  text-white/80">
              The Lenana villa
              <br />
              18 Via della Collina
              <br />
              20123, Milan
              <br />
              Italy
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs tracking-widest text-white/30 ">
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
