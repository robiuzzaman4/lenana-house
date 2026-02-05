const InqureForm = () => {
  return (
    <section id="enquiry" className="pt-15 pb-[148px] px-4 lg:px-16">
      <div className="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
        <div className="space-y-4 pt-15">
          <h2 className="text-3xl md:text-[40px]">
            The first step toward arrival
          </h2>
          <p className="text-dark text-base max-w-md leading-relaxed">
            For availability and bookings, or special requests, our team is at
            your side to help you plan your ideal stay at Lenana.
          </p>
        </div>

        <form className="space-y-6 bg-[#F0EFEF] px-12 py-15">
          <FormField label="Name" type="text" placeholder="Enter your name" />
          <FormField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <FormField
            label="Phone number"
            type="tel"
            placeholder="Enter your phone number"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Preferred arrival date" type="date" />
            <FormField label="Departure date" type="date" />
          </div>

          <div className="space-y-2">
            <label className="text-sm tracking-widest text-dark">Message</label>
            <textarea
              className="w-full border border-black/5 px-4 py-3 min-h-[120px] focus:outline-none focus:border-secondary transition-colors text-sm bg-white"
              placeholder="Enter your message"
            />
          </div>

          <button className="w-full md:w-auto px-12 py-4 bg-secondary text-dark tracking-widest text-base hover:bg-dark hover:text-white transition-colors duration-500 hover:cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default InqureForm;

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm tracking-widest text-dark">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-black/5 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm bg-white"
      />
    </div>
  );
}
