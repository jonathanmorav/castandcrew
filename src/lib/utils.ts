
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "Safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "Opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "Edge";
  }
  
  return {
    browser: browserName,
    userAgent,
    isMobile: /iPhone|iPad|iPod|Android/i.test(userAgent)
  };
}

// Function to create a content edit wrapper with a label
export function contentEditWrapper(content: React.ReactNode, label: string): React.ReactElement {
  return React.createElement(
    "div", 
    { className: "content-edit-wrapper relative group" },
    React.createElement(
      "div", 
      { className: "content-edit-label absolute -top-3 left-0 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity" },
      label
    ),
    content
  );
}
