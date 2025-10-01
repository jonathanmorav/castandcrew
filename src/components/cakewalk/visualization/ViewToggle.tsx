
import { motion } from "framer-motion";

interface ViewToggleProps {
  activeView: 'traditional' | 'cakewalk';
  onToggleView: () => void;
  isVisible: boolean;
}

const ViewToggle = ({ activeView, onToggleView, isVisible }: ViewToggleProps) => {
  if (!isVisible) return null;
  
  const isCakewalkActive = activeView === 'cakewalk';
  
  return (
    <motion.div 
      className="absolute top-0 left-0 right-0 flex justify-center mb-8 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full p-1 shadow-lg flex border border-gray-100">
        <div className="relative">
          {/* Animated selection indicator */}
          <motion.div 
            className="absolute inset-y-0 rounded-full"
            initial={false}
            animate={{ 
              x: isCakewalkActive ? '100%' : '0%',
              backgroundColor: isCakewalkActive 
                ? 'rgb(67, 83, 255)' 
                : 'rgb(229, 231, 235)',
              boxShadow: isCakewalkActive 
                ? '0 2px 8px rgba(67, 83, 255, 0.3)' 
                : 'none'
            }}
            style={{ 
              width: 'calc(50% - 5px)',
              left: '2.5px',
              top: '2.5px',
              bottom: '2.5px'
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />

          {/* Button for Traditional view */}
          <button
            className={`relative py-2 px-5 rounded-full text-sm font-medium transition-colors focus:outline-none ${
              !isCakewalkActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => isCakewalkActive && onToggleView()}
            aria-pressed={!isCakewalkActive}
          >
            Traditional
          </button>

          {/* Button for Cakewalk view */}
          <button
            className={`relative py-2 px-5 rounded-full text-sm font-medium transition-colors focus:outline-none ${
              isCakewalkActive ? 'text-white' : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => !isCakewalkActive && onToggleView()}
            aria-pressed={isCakewalkActive}
          >
            Cakewalk
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewToggle;
