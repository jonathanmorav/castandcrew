
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { 
  Leaf, 
  Settings, 
  Banknote, 
  Zap, 
  LayoutGrid 
} from "lucide-react";

const features = [
  {
    title: "Simplicity",
    description: "No insurance expertise required",
    icon: Leaf,
    color: "bg-green-50",
    iconColor: "text-green-500",
    borderColor: "border-green-100"
  },
  {
    title: "Customization",
    description: "Tailored to each business's unique needs",
    icon: Settings,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
    borderColor: "border-indigo-100"
  },
  {
    title: "Transparency",
    description: "Clear pricing with no hidden fees",
    icon: Banknote,
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-amber-100"
  },
  {
    title: "Speed",
    description: "From start to finish in minutes, not weeks",
    icon: Zap,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100"
  },
  {
    title: "Control",
    description: "Business owner maintains complete oversight",
    icon: LayoutGrid,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100"
  }
];

const ShopifyExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { threshold: 0.1 });

  return (
    <div ref={containerRef} className="mb-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        The "Shopify for Benefits" Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12"
      >
        Like Shopify revolutionized e-commerce for small businesses, Cakewalk creates a turnkey solution for employee benefits:
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.title}
            feature={feature}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    iconColor: string;
    borderColor: string;
  };
  index: number;
  isInView: boolean;
}

const FeatureCard = ({ feature, index, isInView }: FeatureCardProps) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + (index * 0.1),
        type: "spring",
        stiffness: 100
      }
    }
  };

  const Icon = feature.icon;

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`rounded-xl ${feature.color} border ${feature.borderColor} p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center`}
    >
      <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm ${feature.iconColor}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-700 text-sm">{feature.description}</p>
    </motion.div>
  );
};

export default ShopifyExperience;
