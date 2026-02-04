import Image from "next/image";

const Gallery2 = () => {
  return (
    <section className="px-4 lg:px-16 pb-[148px]">
      <div className="max-w-[1312px] mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/rooms/r4.png"
              alt="Room detail 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/rooms/r5.png"
              alt="Room detail 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/images/rooms/r6.png"
            alt="Room detail 6"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/images/rooms/r7.png"
            alt="Room detail 7"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
