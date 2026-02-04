import Image from "next/image";

const OurPartner = () => {
  return (
    <section className="py-[140px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-[40px] italic">OUR PARTNERS</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-10 md:gap-20">
          {/* The partner.png contains multiple logos, usually shown as a strip */}
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src="/images/home/partner.png"
              alt="Partners"
              width={1000}
              height={100}
              className="object-contain max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
