import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { EducationSection } from "../components/EducationSection";
import { WorkSection } from "../components/WorkSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />

    <main>
      <HeroSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  </div>;
};
