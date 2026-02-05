import Image from "next/image";

const experiences = [
  {
    title: "PRIVATE MASSAGE",
    description:
      "Enjoy a personalized massage session in the privacy of your villa, delivered by a professional in-house therapist. Designed for deep relaxation and stress relief, this experience allows couples to unwind together without shared spaces or interruptions. Sessions are available on request and tailored to your preferences, ensuring a calm, restorative experience in a setting that feels entirely your own.",
    image: "/images/experience/e1.png",
  },
  {
    title: "HOT & COLD PLUNGE",
    description:
      "The villa features a private hot and cold plunge setup designed for physical recovery and relaxation. Guests can use the plunge after workouts, long walks, or simply as part of a daily wellness routine. The contrast between hot and cold helps release tension and refresh the body, while the private setup allows guests to use it freely at their own pace.",
    image: "/images/experience/e2.png",
  },
  {
    title: "SLOW SEA-VIEW MOMENTS",
    description:
      "Beyond structured activities, the villa offers open spaces with uninterrupted sea views where couples can relax, read, talk, or simply enjoy quiet time together. These moments are intentionally unprogrammed allowing guests to slow down, disconnect, and enjoy the setting without schedules or distractions.",
    image: "/images/experience/e3.png",
  },
];

const ExperiencesGrid = () => {
  return (
    <section className="px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col space-y-10 group">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-[32px] italic">{exp.title}</h3>
                <p className="text-base pr-2 line-clamp-6">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesGrid;
