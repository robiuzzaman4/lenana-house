import Image from "next/image";

const GallerySlider = () => {
  return (
    <section className="pb-[148px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/experience/e4.png"
              alt="Lenana experience gallery 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/experience/e5.png"
              alt="Lenana experience gallery 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/experience/e6.png"
              alt="Lenana experience gallery 6"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
