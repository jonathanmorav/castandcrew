
import React from "react";
import { ContentEditProvider } from "@/context/ContentEditContext";
import { ViewModeProvider } from "@/context/ViewModeContext";
import IndexContent from "@/components/IndexContent";

// Export sections for external use (like in App.tsx)
export { sections } from "@/components/sections/SectionMapping";

// Wrapper component that provides ContentEditContext and ViewModeContext
const Index = () => {
  return (
    <ContentEditProvider>
      <ViewModeProvider>
        <IndexContent />
      </ViewModeProvider>
    </ContentEditProvider>
  );
};

export default Index;
