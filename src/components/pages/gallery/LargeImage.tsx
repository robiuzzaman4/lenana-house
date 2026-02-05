import Image from "next/image";

const LargeImage = () => {
  return (
    <section className="py-[148px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto space-y-15">
        <div className="relative aspect-video w-full overflow-hidden shadow-sm">
          <Image
            src="/images/gallery/g1.png"
            alt="Gallery view 1"
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-1000"
          />
        </div>
        <div className="relative aspect-video w-full overflow-hidden shadow-sm">
          <Image
            src="/images/gallery/g2.png"
            alt="Gallery view 2"
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default LargeImage;
