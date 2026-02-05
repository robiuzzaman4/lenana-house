import { useInquiry } from "@/context/InquiryContext";

const CTA = () => {
  const { openInquiry } = useInquiry();
  return (
    <section className="py-[148px] px-4 lg:px-16">
      <div className="max-w-[1072px] mx-auto bg-[#253940] py-[72px] text-center space-y-6">
        <h2 className="text-3xl lg:text-5xl uppercase max-w-[640px] text-white mx-auto italic">
          Ready to experience the ultimate villa retreat?
        </h2>
        <button
          onClick={openInquiry}
          className="inline-block px-12 py-4 bg-[#BFA58A] hover:bg-white hover:text-dark transition-all duration-300 font-serif cursor-pointer"
        >
          Enquire
        </button>
      </div>
    </section>
  );
};

export default CTA;
