import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-dark text-white pt-20 pb-[10] px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 lg:mb-[180px]">
          {/* Brand Info */}
          <div className="space-y-7">
            {/* <h2 className="text-2xl font-serif tracking-[0.2em] uppercase italic">
              LENANA
            </h2> */}
            <Image
              src={"/images/brand.png"}
              alt="lenana house"
              width={1080}
              height={720}
              className="w-fit h-[20px] object-contain"
            />
            <p className="text-white text-base leading-relaxed tracking-wider max-w-[200px]">
              A private villa for seasonal living and quiet stays.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-[150px]">
            {/* Quick Links */}
            <ul className="space-y-5 text-base tracking-wide text-white/50">
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
            <ul className="space-y-5 text-base tracking-wide text-white/50">
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
              <p className="text-base leading-relaxed tracking-wide text-white/50 max-w-[160px] ">
                The Lenana villa 18 Via della Collina 20123, Milan Italy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-base tracking-widest text-white/30 pb-4">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          <Link
            href="https://dribbble.com/tajul2"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Design by Tajul
          </Link>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="absolute inset-x-0 -bottom-20 pointer-events-none opacity-[0.03] flex justify-center overflow-hidden h-[70%] items-end translate-y-1/4 max-w-7xl mx-auto">
        <span className="text-[18vw] font-serif leading-none tracking-tighter select-none">
          LENANA
        </span>
      </div>
    </footer>
  );
};

export default Footer;
