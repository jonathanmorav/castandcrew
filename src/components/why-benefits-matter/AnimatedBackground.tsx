
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [auroraPhase, setAuroraPhase] = useState(0);
  
  // Create animation loop for the aurora effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAuroraPhase(prev => (prev + 0.5) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-[rgba(0,93,254,0.5)] via-[rgba(175,215,255,0.3)] to-[#eaf2ff] z-0" 
        style={{
          background: `radial-gradient(64.96% 69.89% at 50.03% 100.02%, rgba(0, 93, 254, 0.50) 0%, #EAF2FF 100%)`
        }}
      ></div>
      
      {/* Aurora gradient overlay - animated using CSS with the specified colors */}
      <div 
        className="absolute inset-0 z-0 opacity-30 animate-pulse-subtle"
        style={{
          backgroundImage: `
            linear-gradient(
              ${40 + Math.sin(auroraPhase * 0.05) * 20}deg, 
              rgba(0, 93, 254, 0.4) ${10 + Math.sin(auroraPhase * 0.02) * 5}%, 
              rgba(87, 145, 243, 0.3) ${30 + Math.sin(auroraPhase * 0.03) * 10}%, 
              rgba(234, 242, 255, 0.5) ${70 + Math.cos(auroraPhase * 0.02) * 10}%,
              rgba(0, 93, 254, 0.2) ${90 + Math.cos(auroraPhase * 0.01) * 5}%
            )
          `,
          filter: 'blur(60px)'
        }}
      ></div>
      
      {/* Purple blur effect in top right */}
      <motion.div 
        className="absolute w-1/2 h-1/2 -top-1/4 -right-1/6 bg-[#5791F3] opacity-[0.03] rounded-full blur-[64px] z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Additional ambient blobs */}
      <motion.div 
        className="absolute w-1/3 h-1/3 bottom-1/4 -left-1/6 bg-[#005DFE] opacity-[0.02] rounded-full blur-[50px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute w-1/4 h-1/4 top-1/2 right-1/4 bg-[#EAF2FF] opacity-[0.015] rounded-full blur-[40px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.015, 0.03, 0.015],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
      />
    </>
  );
};

export default AnimatedBackground;
