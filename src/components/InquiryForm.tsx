"use client";

import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => (
  <div className="space-y-2">
    <label className="text-sm tracking-widest text-dark block">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full border border-black/5 px-4 py-4 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-dark placeholder:text-dark/30"
    />
  </div>
);

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface InquiryFormProps {
  selectedDates?: DateRange;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ selectedDates }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that dates are selected
    if (!selectedDates?.from || !selectedDates?.to) {
      alert("Please select check-in and check-out dates before submitting.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Include selected dates in submission
    const submissionData = {
      ...data,
      checkIn: selectedDates.from.toLocaleDateString(),
      checkOut: selectedDates.to.toLocaleDateString(),
    };

    console.log("Form Submitted:", submissionData);
  };

  // const formatDate = (date: Date | null) => {
  //   if (!date) return "";
  //   return date.toLocaleDateString("en-US", {
  //     month: "short",
  //     day: "numeric",
  //     year: "numeric",
  //   });
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#F0EFEF] px-4 lg:px-12 py-4 lg:py-12"
    >
      <FormField label="Name" name="name" placeholder="Full name" required />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <FormField
        label="Phone number"
        name="phone"
        type="tel"
        placeholder="+1 | 901 6543 7464"
        required
      />

      {/* Date Range Display */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm tracking-widest text-dark block">
            Check-in
          </label>
          <input
            type="text"
            name="checkIn"
            value={formatDate(selectedDates?.from || null)}
            readOnly
            placeholder="Select dates"
            className="w-full border border-black/5 px-4 py-4 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-dark placeholder:text-dark/30"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm tracking-widest text-dark block">
            Check-out
          </label>
          <input
            type="text"
            name="checkOut"
            value={formatDate(selectedDates?.to || null)}
            readOnly
            placeholder="Select dates"
            className="w-full border border-black/5 px-4 py-4 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-dark placeholder:text-dark/30"
          />
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm tracking-widest text-dark block">
            Number of Guests
          </label>
          <div className="relative">
            <select
              name="guests"
              className="w-full border border-black/5 px-4 py-4 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-dark appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm tracking-widest text-dark block">
            How did you hear about us
          </label>
          <div className="relative">
            <select
              name="source"
              className="w-full border border-black/5 px-4 py-4 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-dark appearance-none cursor-pointer"
            >
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-16 py-4 bg-secondary text-dark tracking-widest text-base hover:bg-dark hover:text-white transition-colors duration-500 hover:cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default InquiryForm;
