import { useState } from "react";
import HeroSection from "../components/profile/HeroSection";
import TabNav from "../components/profile/TabNav";
import AboutTab from "../components/tabs/AboutTab";
import ExperienceTab from "../components/tabs/ExperienceTab";
import ProjectsTab from "../components/tabs/ProjectsTab";
import IronmanTab from "../components/tabs/IronmanTab";
import MountainsTab from "../components/tabs/MountainsTab";
import HardwareTab from "../components/tabs/HardwareTab";
import GitHubTab from "../components/tabs/GitHubTab";
import ContactTab from "../components/tabs/ContactTab";
import MMATab from "../components/tabs/MMATab";

const DEFAULT_PROFILE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/d2e2a7bd6_LinkedIn.png";

const TAB_COMPONENTS = {
  about: <AboutTab />,
  experience: <ExperienceTab />,
  projects: <ProjectsTab />,
  ironman: <IronmanTab />,
  mountains: <MountainsTab />,
  hardware: <HardwareTab />,
  github: <GitHubTab />,
  mma: <MMATab />,
  contact: <ContactTab />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);

  return (
    <div className="min-h-screen bg-[#080A0E] text-foreground font-inter">
      {/* Hero with colorful background + profile */}
      <HeroSection profileImage={profileImage} onImageChange={setProfileImage} />

      {/* Content area */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        <div key={activeTab}>
          {TAB_COMPONENTS[activeTab]}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-inter text-xs text-[#A0A0A0] text-center">
            Built with ☕ and way too much solder —{" "}
            <span className="text-primary">Rahul Rachamalla</span> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}