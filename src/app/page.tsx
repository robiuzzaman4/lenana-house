import About from "@/components/pages/home/About";
import OurPartner from "@/components/pages/home/OurPartner";
import InqureForm from "@/components/pages/home/InqureForm";
import Hero from "@/components/pages/home/Hero";
import Gallary from "@/components/pages/home/Gallary";
import ParallaxGallery from "@/components/pages/home/ParallaxGallery";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <div className="hidden lg:block">
        <Gallary />
      </div>
      <div className="lg:hidden">
        <ParallaxGallery />
      </div>
      <OurPartner />
      <InqureForm />
    </div>
  );
}
