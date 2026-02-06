"use client";

import { useInquiry } from "@/context/InquiryContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InquiryForm from "@/components/InquiryForm";
import Calendar from "@/components/Calendar";
import { X } from "lucide-react";

export const InquireDialog = () => {
  const { isOpen, closeInquiry } = useInquiry();

  return (
    <Dialog open={isOpen} onOpenChange={closeInquiry}>
      <DialogContent className="sm:max-w-[1100px] w-[95vw] bg-white text-dark border-none p-0 overflow-hidden rounded-none data-open:animate-fade-in-up data-open:animate-duration-500 data-closed:animate-fade-out-down data-closed:animate-duration-300">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 h-full max-h-[90vh] overflow-y-auto">
          {/* Left side: Info & Calendar */}
          <div className="flex-1 p-10 overflow-y-auto">
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
                <Calendar />
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="bg-[#F0EFEF] overflow-y-auto">
            <div className="h-full flex flex-col justify-center">
              <InquiryForm />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
