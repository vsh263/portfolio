import { FloatingNav } from "./components/menu";
import { navItems } from "@/data";
import { AboutSection } from "./sections/about";
import { MainSection } from "./sections/main";
import { ExperienceSection } from "./sections/experience";
import { ProjectsSection } from "./sections/projects";
import { ContactSection } from "./sections/contact";
import { FooterSection } from "./sections/footer";

export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto mt-20 container">
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col gap-4 p-8 mt-20 justify-center">
        <MainSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
