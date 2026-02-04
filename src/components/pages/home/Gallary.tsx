import CategoryCard from "@/components/CategoryCard";

const Gallary = () => {
  return (
    <section className="px-4 lg:px-16">
      <div className="space-y-8 max-w-[1312px] mx-auto w-full">
        {/* Residence and Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="RESIDENCE"
            image="/images/home/residence.png"
            link="/residence"
            small
          />
          <CategoryCard
            title="ROOMS"
            image="/images/home/rooms.png"
            link="/rooms"
            small
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
    </section>
  );
};

export default Gallary;
