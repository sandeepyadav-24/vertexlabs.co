import Image from "next/image";
import { Hero } from "@/components/Hero";
import Working from "@/components/Working";
import FeaturedCompany from "@/components/FeaturedCompany";
import Testimonials from "@/components/Testimonials";
import UpcomingHacks from "@/components/UpcomingHacks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Working />
      {/**<FeaturedCompany />
      <UpcomingHacks /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
