import { motion } from "framer-motion";
import { useRef } from "react";
import NavigationArrow from "./navigation/NavigationArrow";
import VantaAnimation from "./cover/VantaAnimation";
import cakewalkLogo from "@/assets/cakewalk-logo.png";
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
        <div className="max-w-[800px] mx-auto">
          <motion.div 
            initial={{
              opacity: 0,
              y: -20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.7
            }}
            className="flex justify-center items-center"
          >
            <img 
              src={cakewalkLogo} 
              alt="Cakewalk Benefits" 
              className="w-full max-w-[600px] h-auto"
              style={{
                filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.15))"
              }}
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(22px, 4vw, 36px)",
              lineHeight: 1.25,
              textShadow: "0 2px 10px rgba(0,0,0,0.15)"
            }}
            className="font-semibold mt-4 md:mt-6 text-white max-w-[900px] mx-auto"
          >
            Cakewalk Agent Partnership Program
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
            Our mission is to make high‑quality employee benefits accessible and affordable for every small business—and to empower partners and carriers to serve them at scale.
          </motion.p>
        </div>
      </div>
      
      <NavigationArrow onClick={onNavigateNext} className="text-white hover:text-brand-mint transition-colors" />
    </section>;
};
export default CoverScreen;
