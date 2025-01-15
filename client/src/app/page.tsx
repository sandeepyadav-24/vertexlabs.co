import Image from "next/image";
import { Hero } from "@/components/Hero";
import Working from "@/components/Working";
import FeaturedCompany from "@/components/FeaturedCompany";
import Testimonials from "@/components/Testimonials";
import UpcomingHacks from "@/components/UpcomingHacks";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Working />
      {/**<FeaturedCompany />
      <UpcomingHacks /> */}
      <Testimonials />
    </div>
  );
}
