
import { motion } from "framer-motion";

interface ParticleEffectProps {
  active: boolean;
  isInViewport: boolean;
}

const ParticleEffect = ({ active, isInViewport }: ParticleEffectProps) => {
  // Only render particles when active and in viewport
  if (!active || !isInViewport) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute h-full w-full">
        {/* Reduced number of particles from 8 to 5 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-teal/60"
            animate={{
              x: ["0%", "100%"],
              y: [
                `${30 + Math.random() * 40}%`, // Narrower range to reduce calculations
                `${30 + Math.random() * 40}%`,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              left: '0%',
              top: '0%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleEffect;
