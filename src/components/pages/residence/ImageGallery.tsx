import Image from "next/image";

const ImageGallery = () => {
  const galleryImages = [
    "/images/residence/r1.png",
    "/images/residence/r2.png",
    "/images/residence/r3.png",
    "/images/residence/r4.png",
    "/images/residence/r5.png",
    "/images/residence/r6.png",
  ];

  return (
    <section className="px-4 lg:px-16 pb-[148px]">
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${
                index === 2 || index === 5
                  ? "md:col-span-2 aspect-video"
                  : "md:col-span-1 aspect-4/5"
              }`}
            >
              <Image
                src={img}
                alt={`Residence gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
