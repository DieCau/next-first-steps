import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Page for Pricing Information.",
  keywords: ["Pricing Page", "Information", "Price"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
