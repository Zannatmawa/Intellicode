// import Image from "next/image";
import { FAQAndNewsletter } from "./components/home/Faq";
import FeaturesSection from "./components/home/Features";
import HeroSection from "./components/home/HeroSection";
import ServicesSection from "./components/home/Services";
import { StatsAndPopular } from "./components/home/Stats";
import { TestimonialsSection } from "./components/home/Testimonials";
import Navbar from "./components/layouts/Navbar";

export default function Home() {
  return (
    <div className="">
      <section>
        <HeroSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <StatsAndPopular />
      </section>
      <section>
        <TestimonialsSection />
      </section>
      <section>
        <FAQAndNewsletter />
      </section>

    </div>
  );
}
