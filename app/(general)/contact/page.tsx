import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Page for Contact Us",
  keywords: ["Contact Page", "Information"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
