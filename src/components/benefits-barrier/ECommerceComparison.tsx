
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ECommerceComparisonProps {
  isVisible: boolean;
}

const ECommerceComparison = ({ isVisible }: ECommerceComparisonProps) => {
  const isMobile = useIsMobile();
  
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  // Text animations
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  
  // Blue box animation for the message
  const messageBoxVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.6
      }
    }
  };
  
  // Final message animation
  const finalMessageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    }
  };

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto my-8 px-4 sm:px-6"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main background container */}
      <motion.div 
        className="background relative box-shadow border border-[rgba(243,244,246,0.9)] bg-gradient-to-b from-[rgba(0,93,254,0.88)] to-[rgba(87,145,243,0.88)] rounded-lg p-6 sm:p-8 md:p-10 shadow-md backdrop-blur-[30px] flex flex-col items-center gap-6 md:gap-8"
        variants={containerVariants}
      >
        {/* First inner section */}
        <motion.div className="background-inner flex flex-col items-center">
          {/* Simplified text without sneaker image or special formatting */}
          <motion.div 
            className="imagine-ordering-a-pair-of-parent w-full text-center flex flex-wrap items-center justify-center text-white text-lg sm:text-xl md:text-2xl"
            variants={textVariants}
          >
            <p className="leading-relaxed">
              Imagine ordering a pair of sneakers online and receiving this message:
            </p>
          </motion.div>
        </motion.div>
        
        {/* Blue message box */}
        <motion.div 
          className="background1 w-full max-w-[800px] bg-[#00348f] rounded-lg p-4 sm:p-5 md:p-6 text-center"
          variants={messageBoxVariants}
        >
          <p className="someone-will-contact text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            "Someone will contact you with pricing in 2-3 days."
          </p>
        </motion.div>
        
        {/* Final message */}
        <motion.div 
          className="verticalborder pl-0 sm:pl-5 text-center"
          variants={finalMessageVariants}
        >
          <p className="this-is-the text-sm sm:text-base md:text-lg font-medium text-white italic">
            This is the current reality for small business owners seeking employee benefits.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ECommerceComparison;
