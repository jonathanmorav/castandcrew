
import React from "react";
import { useContentEdit } from "@/context/ContentEditContext";
import { useViewMode } from "@/context/ViewModeContext";
import { useNavigation } from "@/hooks/useNavigation";
import ContentOnlyView from "@/components/ContentOnlyView";
import SingleView from "@/components/SingleView";
import ShowcaseView from "@/components/ShowcaseView";
import { sections } from "./sections/SectionMapping";

// Core Index component logic with content editing and view mode support
const IndexContent = () => {
  const { isContentEditMode } = useContentEdit();
  const { viewMode } = useViewMode();
  const { currentSectionId, onNavigate, onNavigateNext } = useNavigation();

  // If we're in content edit mode, render all sections at once
  if (isContentEditMode) {
    return <ContentOnlyView />;
  }
  
  // If we're in single view mode, render the SingleView component
  if (viewMode === "single") {
    return (
      <SingleView
        currentSectionId={currentSectionId}
        onNavigate={onNavigate}
      />
    );
  }

  // Render showcase view (slide by slide)
  return (
    <ShowcaseView 
      currentSectionId={currentSectionId}
      onNavigate={onNavigate}
      onNavigateNext={onNavigateNext}
    />
  );
};

export default IndexContent;
