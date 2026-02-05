"use client";
import { useInquiry } from "@/context/InquiryContext";
import Image from "next/image";

const Featured = () => {
  const { openInquiry } = useInquiry();
  return (
    <section className="px-4 lg:px-16">
      <div className="max-w-[980px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-[160px]">
        <div className="space-y-10 max-w-[420px]">
          <h3 className="text-3xl lg:text-[40px]">
            Private cliffside living with uninterrupted sea views.
          </h3>
          <p className="text-base">
            The Residence is a private world set above the ocean where
            architecture, light, and landscape move in quiet harmony. Open
            layouts, natural textures, and panoramic views create an atmosphere
            that feels expansive yet deeply personal.
          </p>
          <button
            onClick={openInquiry}
            className="px-8 py-3 bg-secondary text-foreground hover:text-white tracking-widest text-base hover:bg-primary transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            Enquire
          </button>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="/images/residence/middle.png"
            alt="Cliffside living"
            height={720}
            width={380}
            className="h-[470px] w-[340px] aspect-4/3"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
