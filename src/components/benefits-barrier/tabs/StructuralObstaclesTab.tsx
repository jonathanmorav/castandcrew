import { motion } from "framer-motion";
import { Briefcase, Share2, Star } from "lucide-react";
interface StructuralObstaclesTabProps {
  isVisible: boolean;
}
const StructuralObstaclesTab = ({
  isVisible
}: StructuralObstaclesTabProps) => {
  const staggerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  const barriers = [
    {
      icon: <Briefcase size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      title: "Transform Your Role",
      description: "Evolve from insurance seller to trusted business advisor by offering comprehensive benefits solutions that solve real employer challenges."
    },
    {
      icon: <Star size={32} className="text-brand-blue" />,
      bgColor: "bg-soft-blue",
      title: "Stand Out From Competition",
      description: "Differentiate yourself from competitors who only sell P&C or life insurance with a full-service benefits offering."
    },
    {
      icon: <Share2 size={32} className="text-emerald-500" />,
      bgColor: "bg-soft-green",
      title: "Capture Referral Revenue",
      description: "Benefits clients naturally lead to personal lines opportunities and commercial insurance renewals across their entire business."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {barriers.map((barrier) => (
          <motion.div
            key={barrier.title}
            variants={cardVariants}
            className="flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/90 p-6 text-center shadow-sm backdrop-blur"
          >
            <div className={`${barrier.bgColor} mb-4 rounded-xl p-4`}>{barrier.icon}</div>
            <h4 className="mb-3 text-lg font-semibold text-brand-darkBlue">{barrier.title}</h4>
            <p className="text-sm leading-relaxed text-gray-600">{barrier.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default StructuralObstaclesTab;
