
import React from "react";
import { ContentEditProvider } from "@/context/ContentEditContext";
import { ViewModeProvider } from "@/context/ViewModeContext";
import IndexContent from "@/components/IndexContent";
import ContentEditToggle from "@/components/ContentEditToggle";
import ViewModeToggle from "@/components/ViewModeToggle";

// Export sections for external use (like in App.tsx)
export { sections } from "@/components/sections/SectionMapping";

// Wrapper component that provides ContentEditContext and ViewModeContext
const Index = () => {
  return (
    <ContentEditProvider>
      <ViewModeProvider>
        <IndexContent />
        <ContentEditToggle />
        <ViewModeToggle />
      </ViewModeProvider>
    </ContentEditProvider>
  );
};

export default Index;
