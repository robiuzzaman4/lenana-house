import About from "@/components/pages/home/About";
import OurPartner from "@/components/pages/home/OurPartner";
import InqureForm from "@/components/pages/home/InqureForm";
import Hero from "@/components/pages/home/Hero";
import Gallary from "@/components/pages/home/Gallary";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Gallary />
      <OurPartner />
      <InqureForm />
    </div>
  );
}
