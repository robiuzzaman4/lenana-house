"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useInquiry } from "@/context/InquiryContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { openInquiry } = useInquiry();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 lg:px-16 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-sm py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1312px] mx-auto w-full flex items-center justify-between">
          {/* Menu Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white hover:opacity-70 transition-opacity focus:outline-none hover:cursor-pointer"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Brand Name (Hidden in mobile header if shown in hero, but usually good to have) */}
          <div className="hidden md:block">
            <Link
              href="/"
              className="text-white font-serif tracking-[0.2em] text-lg uppercase"
            >
              LENANA HOUSE
            </Link>
          </div>

          {/* Enquiry Button */}
          <button
            onClick={openInquiry}
            className="bg-white text-dark px-6 py-3 text-sm tracking-widest hover:bg-opacity-90 transition-all font-serif cursor-pointer shadow-sm"
          >
            Enquiry
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark z-60 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full max-w-[1312px] mx-auto w-full px-4 lg:px-0">
          <header className="flex items-center justify-between py-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-70 transition-opacity focus:outline-none hover:cursor-pointer"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white font-serif tracking-[0.2em] text-sm uppercase"
            >
              LENANA HOUSE
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                openInquiry();
              }}
              className="bg-secondary text-white px-6 py-3 text-xs uppercase tracking-widest cursor-pointer hover:bg-opacity-90 transition-all"
            >
              Enquiry
            </button>
          </header>

          <nav className="flex-1 flex flex-col justify-center space-y-8">
            {["HOME", "RESIDENCE", "ROOMS", "EXPERIENCE", "GALLERY"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-serif text-3xl md:text-5xl tracking-widest hover:opacity-70 transition-opacity uppercase italic"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
