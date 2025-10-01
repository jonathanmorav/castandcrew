import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import FrameworkPillar from "./framework/FrameworkPillar";
import { uxoPillars } from "./framework/uxoData";
const UxoFramework = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    threshold: 0.1
  });
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  return <div ref={containerRef} className="mb-24 perspective">
      <motion.h2 initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.6
    }} className="mb-10 text-center text-4xl text-brand-darkBlue">
        The Power of UXO Framework
      </motion.h2>

      <motion.div style={{
      opacity,
      y
    }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {uxoPillars.map((pillar, index) => <FrameworkPillar key={pillar.title} title={pillar.title} letter={pillar.letter} impact={pillar.impact} points={pillar.points} color={pillar.color} delay={index * 0.2} isInView={isInView} index={index} />)}
      </motion.div>
    </div>;
};
export default UxoFramework;