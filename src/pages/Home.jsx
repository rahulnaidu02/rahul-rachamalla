import { useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import TabNav from "../components/profile/TabNav";
import AboutTab from "../components/tabs/AboutTab";
import ExperienceTab from "../components/tabs/ExperienceTab";
import ProjectsTab from "../components/tabs/ProjectsTab";
import IronmanTab from "../components/tabs/IronmanTab";
import MountainsTab from "../components/tabs/MountainsTab";
import HardwareTab from "../components/tabs/HardwareTab";
import GitHubTab from "../components/tabs/GitHubTab";
import ContactTab from "../components/tabs/ContactTab";

const PROFILE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/f2a0b5939_generated_image.png";

const TAB_COMPONENTS = {
  about: <AboutTab />,
  experience: <ExperienceTab />,
  projects: <ProjectsTab />,
  ironman: <IronmanTab />,
  mountains: <MountainsTab />,
  hardware: <HardwareTab />,
  github: <GitHubTab />,
  contact: <ContactTab />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-foreground font-inter">
      {/* Centered content column — Deedy-style */}
      <div className="max-w-2xl mx-auto px-5 py-12 sm:py-16">
        <ProfileHeader profileImage={PROFILE_IMAGE} />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        <div key={activeTab}>
          {TAB_COMPONENTS[activeTab]}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-inter text-xs text-[#A0A0A0] text-center">
            Built with ☕ and way too much solder —{" "}
            <span className="text-primary">Your Name</span> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}