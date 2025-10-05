
import React from "react";

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useViewMode() {
  return { viewMode: "showcase", toggleViewMode: () => {}, setViewMode: () => {} };
}
