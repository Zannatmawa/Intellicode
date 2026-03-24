// import Image from "next/image";
import { FAQAndNewsletter } from "./components/home/Faq";
import HeroSection from "./components/home/HeroSection";
import CourseSection from "./components/home/OurCourses";
import MissionSection from "./components/home/OurMission";
import ServicesSection from "./components/home/Services";
import GlassStatsBar from "./components/home/Stats";
import SuccessSection from "./components/home/SuccessStory";

export default function Home() {
  return (
    <div className="">
      <section>
        <HeroSection />
      </section>
      <section>
        <GlassStatsBar />
      </section>
      <section>
        <CourseSection />
      </section>
      <section>
        <SuccessSection />
      </section>
      <section>
        <MissionSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <FAQAndNewsletter />
      </section>
    </div>
  );
}
