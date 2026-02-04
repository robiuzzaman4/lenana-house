import type { Metadata } from "next";
import { Linden_Hill } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const linden = Linden_Hill({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "LENANA HOUSE",
  description: "LENANA HOUSE",
};

import { InquiryProvider } from "@/context/InquiryContext";
import { InquireDialog } from "@/components/InqureDialog";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${linden.variable} antialiased selection:bg-secondary selection:text-white`}
      >
        <InquiryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <InquireDialog />
        </InquiryProvider>
      </body>
    </html>
  );
}
