"use client";

import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import Calendar from "@/components/Calendar";

interface DateRange {
  from: Date | null;
  to: Date | null;
}

const InqureForm = () => {
  const [selectedDates, setSelectedDates] = useState<DateRange>({
    from: null,
    to: null,
  });

  const handleDateSelect = (dates: Date | DateRange | null) => {
    if (dates && typeof dates === "object" && "from" in dates) {
      setSelectedDates(dates as DateRange);
      console.log("Selected date range:", dates);
    }
  };

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

          <div>
            <Calendar
              mode="range"
              selected={selectedDates}
              onSelect={handleDateSelect}
              bookedDates={[
                // Example booked dates - replace with actual data
                new Date(2026, 1, 5),
                new Date(2026, 1, 12),
                new Date(2026, 1, 16),
              ]}
            />
          </div>
        </div>

        <div>
          <InquiryForm selectedDates={selectedDates} />
        </div>
      </div>
    </section>
  );
};

export default InqureForm;
