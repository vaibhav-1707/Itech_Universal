import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import { Divide } from "lucide-react";
import Image from "next/image";
import BlogSection from "@/components/BlogSection";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar />
      <div className="">
        <HomeSection className="z-20" />

        <AboutSection />
        
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  );
}
