
import React from "react";
import { useContentEdit } from "@/context/ContentEditContext";
import { useNavigation } from "@/hooks/useNavigation";
import ContentOnlyView from "@/components/ContentOnlyView";
import ShowcaseView from "@/components/ShowcaseView";
import { sections } from "./sections/SectionMapping";

// Core Index component logic with content editing and view mode support
const IndexContent = () => {
  const { isContentEditMode } = useContentEdit();
  const { currentSectionId, onNavigate, onNavigateNext } = useNavigation();

  // If we're in content edit mode, render all sections at once
  if (isContentEditMode) {
    return <ContentOnlyView />;
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
