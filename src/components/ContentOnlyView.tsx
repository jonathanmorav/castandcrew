
import React from "react";
import { sections } from "@/pages/Index";
import { cn } from "@/lib/utils";

// Importing all the components that will be displayed in content-only mode
import CoverScreen from "@/components/CoverScreen";
import ProblemStatement from "@/components/ProblemStatement";
import WhyBenefitsMatter from "@/components/WhyBenefitsMatter";
import MarketOpportunity from "@/components/MarketOpportunity";
import BenefitsBarrier from "@/components/benefits-barrier/BenefitsBarrier";
import SolutionOverview from "@/components/SolutionOverview";
import CakewalkModel from "@/components/CakewalkModel";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import CakewalkExperience from "@/components/CakewalkExperience";
import { MultiChannelDistribution } from "@/components/distribution";
import UnitEconomics from "@/components/UnitEconomics";
import UseOfFunds from "@/components/UseOfFunds";
import Team from "@/components/Team";

const ContentOnlyView = () => {
  // Function to handle dummy navigation since we're showing all content
  const dummyNavigate = () => {};

  // Reference to section components
  const sectionComponents: { [key: string]: React.ComponentType<any> } = {
    "cover": CoverScreen,
    "problem": ProblemStatement,
    "why": WhyBenefitsMatter,
    "market": MarketOpportunity,
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
    <div className="content-only-view bg-white min-h-screen">
      {/* Quick navigation panel */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto">
          <h1 className="text-lg font-bold mb-2">Content Editor View</h1>
          <div className="flex flex-wrap gap-2 text-sm">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#content-${section.id}`}
                className="text-purple-600 hover:text-purple-800 underline px-2 py-1"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="container mx-auto py-6 px-4">
        {sections.map((section) => {
          const SectionComponent = sectionComponents[section.id];
          
          return (
            <div 
              key={section.id} 
              id={`content-${section.id}`}
              className={cn(
                "mb-16 py-6 border-b-2 border-gray-200",
                "content-section relative" 
              )}
            >
              <div className="content-section-header">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-purple-700">
                  {section.title} <span className="text-gray-500 text-base ml-2">({section.id})</span>
                </h2>
              </div>

              <div className="content-section-body relative">
                {/* The actual component but with custom wrapper styling */}
                <div className="content-component-wrapper p-4 bg-gray-50 rounded-lg">
                  <SectionComponent 
                    onNavigateNext={dummyNavigate} 
                    contentEditMode={true} 
                  />
                </div>
              </div>

              <div className="text-right mt-4">
                <a 
                  href="#" 
                  className="text-sm text-purple-600 hover:text-purple-800"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Back to top
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentOnlyView;
