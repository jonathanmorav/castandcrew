
import { motion } from "framer-motion";
import { TrendingUp, Award, Zap, BarChart } from "lucide-react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 shadow-2xl"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.2, 0.25, 0.2] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            repeatType: "reverse"
          }}
          className="absolute top-40 -left-10 w-60 h-60 bg-indigo-400 opacity-20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.2, 0.35, 0.2] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            repeatType: "mirror"
          }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 opacity-20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 p-10 md:p-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 animate-gradient-shift">Competitive Edge</span>
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mb-8 text-indigo-100">
            Delivering enterprise-level benefits at SMB-friendly pricing through our revolutionary approach.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { 
              icon: TrendingUp, 
              title: "33% Cost Savings", 
              desc: "SMBs pay $10 instead of $15"
            },
            {
              icon: Award,
              title: "Enterprise-Quality",
              desc: "Premium benefits for all business sizes"
            },
            {
              icon: Zap,
              title: "Zero-Touch Platform",
              desc: "Minutes instead of weeks"
            },
            {
              icon: BarChart,
              title: "Risk Distribution",
              desc: "Collective purchasing power"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.15)" 
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/20 rounded-lg mr-3">
                  <item.icon className="h-5 w-5 text-indigo-100" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-indigo-100">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
