
import React, { useEffect, useRef } from "react";
import { sections, sectionComponents } from "@/components/sections/SectionMapping";
import { cn } from "@/lib/utils";
import PageNavigation from "@/components/PageNavigation";

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

  return (
    <div className="single-view-container">
      {sections.map((section) => {
        const SectionComponent =
          sectionComponents[section.id as keyof typeof sectionComponents];

        if (!SectionComponent) {
          return null;
        }
        
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
