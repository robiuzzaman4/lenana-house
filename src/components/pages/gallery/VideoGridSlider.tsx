import Image from "next/image";

const VideoGridSlider = () => {
  return (
    <section className="px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto space-y-16">
        <h2 className="text-3xl md:text-[40px] text-center">
          Discover the story in videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
            <Image
              src="/images/gallery/g3.png"
              alt="Gallery story 3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          </div>
          <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
            <Image
              src="/images/gallery/g4.png"
              alt="Gallery story 4"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          </div>
          <div className="relative aspect-4/5 overflow-hidden group cursor-pointer">
            <Image
              src="/images/gallery/g5.png"
              alt="Gallery story 5"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGridSlider;
