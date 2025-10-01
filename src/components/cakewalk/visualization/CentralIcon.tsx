
import { motion } from "framer-motion";

interface CentralIconProps {
  activeView: 'traditional' | 'cakewalk';
  isVisible: boolean;
}

const CentralIcon = ({ activeView, isVisible }: CentralIconProps) => {
  const isOldView = activeView === 'traditional';
  
  return (
    <motion.div
      className="relative h-24 w-24 z-10"
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : { scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
    >
      {/* Background gradient circle */}
      <motion.div 
        className={`absolute inset-0 rounded-full ${
          isOldView 
            ? 'bg-gray-300' 
            : 'bg-gradient-to-r from-brand-blue to-brand-purple'
        }`}
        animate={{ 
          boxShadow: isOldView 
            ? '0 4px 12px rgba(0,0,0,0.1)' 
            : '0 4px 20px rgba(121, 102, 248, 0.4), 0 0 0 2px rgba(255,255,255,0.1)'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated glow effect for Cakewalk view */}
      {!isOldView && (
        <motion.div 
          className="absolute inset-0 rounded-full bg-transparent"
          animate={{ 
            boxShadow: ['0 0 0px rgba(90, 254, 239, 0)', '0 0 20px rgba(90, 254, 239, 0.5)', '0 0 0px rgba(90, 254, 239, 0)']
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      )}

      {/* Text content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <span className={`text-white font-bold text-xl ${!isOldView && 'drop-shadow-md'}`}>
          {isOldView ? 'OLD' : 'CW'}
        </span>
      </motion.div>
      
      {/* Subtitle for clarity */}
      <motion.div
        className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <span className="text-xs bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-gray-600 shadow-sm">
          {isOldView ? 'Traditional Model' : 'Cakewalk Model'}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default CentralIcon;
