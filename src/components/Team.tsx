import React from "react";
import TeamHeader from "./team/TeamHeader";
import LeadershipProfiles from "./team/LeadershipProfiles";
import TeamAdvantage from "./team/TeamAdvantage";
import BoardAdvisors from "./team/BoardAdvisors";
import ContactInformation from "./team/ContactInformation";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";

interface TeamProps {
  onNavigateNext: () => void;
}

const Team = ({ onNavigateNext }: TeamProps) => {
  return (
    <section className="relative min-h-screen bg-gray-50 pt-20 pb-24 px-4 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <TeamHeader />
        <LeadershipProfiles />
        <TeamAdvantage />
        <BoardAdvisors />
        <ContactInformation />
        
        <NavigationArrow onClick={onNavigateNext} className="text-gray-700" />
      </div>
      <BottomCornerLogo />
    </section>
  );
};

export default Team;
