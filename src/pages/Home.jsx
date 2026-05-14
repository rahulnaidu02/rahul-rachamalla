import NavBar from "../components/dossier/NavBar";
import AltitudeLine from "../components/dossier/AltitudeLine";
import HeroSection from "../components/sections/HeroSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import EnduranceSection from "../components/sections/EnduranceSection";
import ContactSection from "../components/sections/ContactSection";

// Image imports
const IMAGES = {
  heroClimbing: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1a0cdaf7d_generated_e6be3dfa.png",
  hardwareHero: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/c4efa968a_generated_78eb8c30.png",
  ironmanDetail: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/a3e0fb2de_generated_a89d371c.png",
  mountainLandscape: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/9b838dae9_generated_29e50a8a.png",
  climbingGrip: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1f79e2013_generated_6391aa44.png",
  hardwareWorkspace: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/034300e81_generated_d1ea916b.png",
  swimAction: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/47f3a945f_generated_be378480.png",
  codeScreen: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2c1d18e6d_generated_155fef02.png",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-inter">
      <AltitudeLine />
      <NavBar />

      <HeroSection
        heroImage={IMAGES.heroClimbing}
        hardwareImage={IMAGES.hardwareHero}
      />

      <ExperienceSection />

      <ProjectsSection
        hardwareImage={IMAGES.hardwareWorkspace}
        codeImage={IMAGES.codeScreen}
      />

      <EnduranceSection
        ironmanImage={IMAGES.ironmanDetail}
        climbImage={IMAGES.climbingGrip}
        swimImage={IMAGES.swimAction}
        mountainImage={IMAGES.mountainLandscape}
      />

      <ContactSection />
    </div>
  );
}