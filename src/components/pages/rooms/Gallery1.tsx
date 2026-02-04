import Image from "next/image";

const Gallery1 = () => {
  return (
    <section className="px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/rooms/r1.png"
              alt="Room detail 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/rooms/r2.png"
              alt="Room detail 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/images/rooms/r3.png"
            alt="Room view"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery1;
