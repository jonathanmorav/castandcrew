import { useCallback, useEffect, useState } from "react";

interface FullScreenApi {
  requestFullscreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
}

interface FullScreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
}

export const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const request = useCallback(() => {
    const element = document.documentElement as FullScreenApi;
    if (element.requestFullscreen) return element.requestFullscreen();
    if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
    if (element.msRequestFullscreen) return element.msRequestFullscreen();
    if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
    return Promise.resolve();
  }, []);

  const exit = useCallback(() => {
    const doc = document as FullScreenDocument;
    if (document.exitFullscreen) return document.exitFullscreen();
    if (doc.webkitExitFullscreen) return doc.webkitExitFullscreen();
    if (doc.msExitFullscreen) return doc.msExitFullscreen();
    if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen();
    return Promise.resolve();
  }, []);

  const toggle = useCallback(() => {
    if (isFullScreen) {
      void exit();
    } else {
      void request();
    }
  }, [isFullScreen, exit, request]);

  useEffect(() => {
    const handler = () => {
      const doc = document as FullScreenDocument & { webkitFullscreenElement?: Element; msFullscreenElement?: Element; mozFullScreenElement?: Element };
      const fullscreenElement = document.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement;
      setIsFullScreen(Boolean(fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler as EventListener);
    document.addEventListener("msfullscreenchange", handler as EventListener);
    document.addEventListener("mozfullscreenchange", handler as EventListener);

    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler as EventListener);
      document.removeEventListener("msfullscreenchange", handler as EventListener);
      document.removeEventListener("mozfullscreenchange", handler as EventListener);
    };
  }, []);

  return { isFullScreen, toggleFullScreen: toggle };
};
