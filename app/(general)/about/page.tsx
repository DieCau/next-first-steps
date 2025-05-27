import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Page about Diego",
  keywords: ["About Page", "Diego"],
};

export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  );
}
