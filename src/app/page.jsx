

import HeroSection from "../components/home/HeroSection";
import GlassStatsBar from "../components/home/Stats";
import CourseSection from "../components/home/OurCourses";
import MissionSection from "../components/home/OurMission";
import ServicesSection from "../components/home/Services";
import SuccessSection from "../components/home/SuccessStory";
import { FAQAndNewsletter } from "../components/home/Faq";
import HomeCourses from "../components/home/HomeCourses";

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
        <HomeCourses />
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
      {/* <section>
        <FAQAndNewsletter />
      </section> */}
    </div>
  );
}
