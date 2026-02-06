import InquiryForm from "@/components/InquiryForm";
import Calendar from "@/components/Calendar";

const InqureForm = () => {
  return (
    <section id="enquiry" className="pt-15 pb-[148px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
        <div className="space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl md:text-[40px]">
              The first step toward arrival
            </h2>
            <p className="text-dark text-base max-w-md leading-relaxed">
              For availability and bookings, or special requests, our team is at
              your side to help you plan your ideal stay at Lenana.
            </p>
          </div>

          <div className="hidden md:block">
            <Calendar />
          </div>
        </div>

        <div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
};

export default InqureForm;
