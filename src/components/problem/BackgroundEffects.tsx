
import { motion, useTransform } from "framer-motion";

interface BackgroundEffectsProps {
  scrollYProgress: any;
}

const BackgroundEffects = ({ scrollYProgress }: BackgroundEffectsProps) => {
  return (
    <>
      {/* Cinematic background elements with parallax effect */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue opacity-[0.02] rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]),
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95])
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-teal opacity-[0.03] rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
          y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 0.95])
        }}
      />
    </>
  );
};

export default BackgroundEffects;
