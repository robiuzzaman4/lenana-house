import CategoryCard from "@/components/CategoryCard";

const Gallary = () => {
  return (
    <section className="">
      <div className="space-y-8 w-full">
        {/* Residence and Rooms */}
        <div className="grid gap-0">
          <div className="grid lg:grid-cols-2">
            <CategoryCard
              title="RESIDENCE"
              image="/images/home/residence.png"
              link="/residence"
              className="lg:h-[1080px] aspect-4/3!"
            />
            <CategoryCard
              title="ROOMS"
              image="/images/home/rooms.png"
              link="/rooms"
              className="lg:h-[1080px] aspect-4/3!"
            />
          </div>
          {/* Experience */}
          <CategoryCard
            title="EXPERIENCE"
            image="/images/home/experience.png"
            link="/experience"
          />

          {/* Gallery */}
          <CategoryCard
            title="GALLERY"
            image="/images/home/gellary.png"
            link="/gallery"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
