
import React, { useEffect, useRef } from "react";
import { sections } from "@/components/sections/SectionMapping";
import { cn } from "@/lib/utils";
import PageNavigation from "@/components/PageNavigation";

// Importing all the components that will be displayed in single view mode
import CoverScreen from "@/components/CoverScreen";
import ProblemStatement from "@/components/ProblemStatement";
import WhyBenefitsMatter from "@/components/WhyBenefitsMatter";
import BenefitsBarrier from "@/components/benefits-barrier/BenefitsBarrier";
import SolutionOverview from "@/components/SolutionOverview";
import CakewalkModel from "@/components/CakewalkModel";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import CakewalkExperience from "@/components/CakewalkExperience";
import { MultiChannelDistribution } from "@/components/distribution";
import UnitEconomics from "@/components/UnitEconomics";
import UseOfFunds from "@/components/UseOfFunds";
import Team from "@/components/Team";

const SingleView = ({ currentSectionId, onNavigate }) => {
  // Function to handle dummy navigation since we're showing all content in scrollable form
  const dummyNavigate = () => {};
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Watch for currentSectionId changes and scroll to that section
  useEffect(() => {
    scrollToSection(currentSectionId);
  }, [currentSectionId]);

  // Reference to section components
  const sectionComponents: { [key: string]: React.ComponentType<any> } = {
    "cover": CoverScreen,
    "problem": ProblemStatement,
    "why": WhyBenefitsMatter,
    "barriers": BenefitsBarrier,
    "solution": SolutionOverview,
    "cakewalk-model": CakewalkModel,
    "competitive-edge": CompetitiveEdge,
    "cakewalk-experience": CakewalkExperience,
    "distribution": MultiChannelDistribution,
    "unit-economics": UnitEconomics,
    "use-of-funds": UseOfFunds,
    "team": Team,
  };

  return (
    <div className="single-view-container">
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.id];
        
        return (
          <div 
            key={section.id} 
            id={`section-${section.id}`}
            ref={el => sectionRefs.current[section.id] = el}
            className={cn(
              "section-wrapper min-h-screen",
              "border-b border-gray-100"
            )}
          >
            {/* The actual component rendered with dummy navigation */}
            <SectionComponent onNavigateNext={dummyNavigate} />
          </div>
        );
      })}
      
      {/* Add the page navigation */}
      <PageNavigation
        sections={sections}
        currentSectionId={currentSectionId}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default SingleView;
