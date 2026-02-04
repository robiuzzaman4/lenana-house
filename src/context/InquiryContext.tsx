"use client";

import React, { createContext, useContext, useState } from "react";

interface InquiryContextType {
  isOpen: boolean;
  openInquiry: () => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openInquiry = () => setIsOpen(true);
  const closeInquiry = () => setIsOpen(false);

  return (
    <InquiryContext.Provider value={{ isOpen, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
};
