
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Browser detection for debugging navigation issues
const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  let browserName;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "Chrome";
  } else if(userAgent.match(/firefox|fxios/i)){
    browserName = "Firefox";
  } else if(userAgent.match(/safari/i)){
    browserName = "Safari";
  } else if(userAgent.match(/opr\//i)){
    browserName = "Opera";
  } else if(userAgent.match(/edg/i)){
    browserName = "Edge";
  } else {
    browserName = "Unknown";
  }
  
  return browserName;
};

// Log browser and platform for debugging
console.log(`[Browser] Running on: ${detectBrowser()} | Platform: ${navigator.platform}`);

// Log any changes to the URL hash
window.addEventListener('hashchange', (event) => {
  console.log('[HashChange Event]', {
    oldURL: event.oldURL,
    newURL: event.newURL
  });
});

createRoot(document.getElementById("root")!).render(<App />);
