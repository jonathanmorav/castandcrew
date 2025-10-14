import { motion } from "framer-motion";
import { useRef } from "react";
import NavigationArrow from "./navigation/NavigationArrow";
import VantaAnimation from "./cover/VantaAnimation";
interface CoverScreenProps {
  onNavigateNext: () => void;
}
const CoverScreen = ({
  onNavigateNext
}: CoverScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <section ref={containerRef} aria-labelledby="cover-title" className="min-h-screen w-full flex flex-col items-center justify-center relative py-[15vh] overflow-hidden">
      {/* Custom animated background */}
      <VantaAnimation />
      
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center relative z-10">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-grotesk font-bold uppercase tracking-wide text-white"
            style={{ fontSize: "clamp(28px, 6vw, 56px)", textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}
          >
            Cast & Crew
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(24px, 4.5vw, 42px)",
              lineHeight: 1.25,
              textShadow: "0 2px 10px rgba(0,0,0,0.15)"
            }}
            className="font-semibold mt-4 md:mt-6 text-white max-w-[900px] mx-auto"
          >
            Cast & Crew Overview Session
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: "clamp(18px, 3vw, 26px)",
              lineHeight: 1.3
            }}
            className="mt-3 md:mt-4 text-white/90 max-w-[900px] mx-auto font-medium"
          >
            October 15, 2025
          </motion.p>
        </div>
      </div>
      
      <NavigationArrow onClick={onNavigateNext} className="text-white hover:text-brand-mint transition-colors" />
    </section>;
};
export default CoverScreen;
