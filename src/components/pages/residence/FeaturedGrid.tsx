const features = [
  {
    title: "Cliffside Sea Views",
    description:
      "The villa is positioned on a private cliff, offering uninterrupted ocean views from living areas, bedrooms, and outdoor spaces.",
  },
  {
    title: "Open Living Spaces",
    description:
      "Spacious interiors with floor-to-ceiling glass create a seamless transition between indoor comfort and the natural surroundings.",
  },
  {
    title: "Private & Secluded",
    description:
      "No shared spaces, no crowds. The residence is fully private, designed for guests who value discretion and calm.",
  },
  {
    title: "Luxury Materials & Finishes",
    description:
      "High-quality natural materials, refined textures, and minimalist detailing define the interior experience.",
  },
  {
    title: "Natural Light Architecture",
    description:
      "Carefully planned layouts allow daylight to flow through the villa throughout the day without compromising privacy.",
  },
  {
    title: "Indoor–Outdoor Living",
    description:
      "Living and dining areas open directly to outdoor spaces, allowing guests to enjoy the sea breeze and views effortlessly.",
  },
];

const FeaturedGrid = () => {
  return (
    <section className="pt-[148px] pb-[180px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[72px]">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-3xl lg:text-[32px]">{feature.title}</h4>
              <p className="text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
