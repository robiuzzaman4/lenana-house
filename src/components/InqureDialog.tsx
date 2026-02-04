"use client";

import { useInquiry } from "@/context/InquiryContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const InquireDialog = () => {
  const { isOpen, closeInquiry } = useInquiry();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Inquiry Form Submitted:", data);
    closeInquiry();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeInquiry}>
      <DialogContent className="sm:max-w-[600px] bg-white text-dark border-none p-8 data-open:animate-fade-in-up data-open:animate-duration-500 data-closed:animate-fade-out-down data-closed:animate-duration-300">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl font-serif tracking-[0.3em] text-center text-dark italic">
            ENQUIRY
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="First name"
            name="firstName"
            type="text"
            placeholder="Your first name"
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />
          <FormField
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="+ (242) 234 4567"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Preferred arrival date"
              name="arrivalDate"
              type="date"
              required
            />
            <FormField
              label="Departure date"
              name="departureDate"
              type="date"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm tracking-[0.2em] text-dark font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="w-full bg-gray-50 border border-black/5 px-4 py-3 min-h-[120px] focus:outline-none focus:border-secondary transition-colors text-sm text-dark placeholder:text-dark/30"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-secondary text-white tracking-[0.2em] text-sm hover:bg-dark transition-all duration-500 font-serif hover:cursor-pointer"
          >
            Send Enquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

function FormField({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm tracking-[0.2em] text-dark font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-gray-50 border border-black/5 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm text-dark placeholder:text-dark/30"
      />
    </div>
  );
}
