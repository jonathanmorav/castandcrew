
import React, { createContext, useContext, useState } from "react";

type ContentEditContextType = {
  isContentEditMode: boolean;
  toggleContentEditMode: () => void;
};

const ContentEditContext = createContext<ContentEditContextType | undefined>(undefined);

export function ContentEditProvider({ children }: { children: React.ReactNode }) {
  const [isContentEditMode, setIsContentEditMode] = useState(false);

  const toggleContentEditMode = () => {
    setIsContentEditMode(prev => !prev);
  };

  return (
    <ContentEditContext.Provider value={{ isContentEditMode, toggleContentEditMode }}>
      {children}
    </ContentEditContext.Provider>
  );
}

export function useContentEdit() {
  const context = useContext(ContentEditContext);
  if (context === undefined) {
    throw new Error("useContentEdit must be used within a ContentEditProvider");
  }
  return context;
}
