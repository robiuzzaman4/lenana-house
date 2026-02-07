"use client";

import { useState } from "react";
import { useInquiry } from "@/context/InquiryContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import InquiryForm from "@/components/InquiryForm";
import Calendar from "@/components/Calendar";

interface DateRange {
  from: Date | null;
  to: Date | null;
}

export const InquireDialog = () => {
  const { isOpen, closeInquiry } = useInquiry();
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
    <Dialog open={isOpen} onOpenChange={closeInquiry}>
      <DialogContent className="sm:max-w-[1100px] w-[95vw] bg-white text-dark border-none p-0 overflow-hidden rounded-none data-open:animate-fade-in-up data-open:animate-duration-500 data-closed:animate-fade-out-down data-closed:animate-duration-300">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 h-full max-h-[90vh] overflow-y-auto">
          {/* Left side: Info & Calendar */}
          <div className="flex-1 py-10  pr-4 pl-4 lg:pl-10 overflow-y-auto">
            <div className="space-y-12 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[40px] font-serif">
                  The first step toward arrival
                </h2>
                <p className="text-dark text-base max-w-md leading-relaxed">
                  For availability, seasonal stays, or general questions, you're
                  welcome to reach out. Each enquiry is reviewed personally to
                  ensure the villa is the right fit for your stay.
                </p>
              </div>

              <div className="pt-4">
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
          </div>

          {/* Right side: Form */}
          <div className="overflow-y-auto py-10 pr-4 pl-4 lg:pr-10">
            <div className="h-full flex flex-col justify-center">
              <InquiryForm selectedDates={selectedDates} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
