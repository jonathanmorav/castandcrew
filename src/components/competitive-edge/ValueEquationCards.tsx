
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleDollarSign, SquareCheck, Zap } from "lucide-react";

const valueEquations = [
  {
    title: "Better Coverage",
    description: "Enterprise-level quality and selection",
    icon: CircleCheck,
    color: "bg-soft-blue",
  },
  {
    title: "Improved Price",
    description: "20-25% below traditional market rates",
    icon: CircleDollarSign,
    color: "bg-soft-green",
  },
  {
    title: "Frictionless Access",
    description: "Simple and fast enrollment process",
    icon: Zap,
    color: "bg-soft-purple",
  },
  {
    title: "Customized Solutions",
    description: "AI-guided plan selection tailored to each business",
    icon: SquareCheck,
    color: "bg-soft-yellow",
  },
];

const ValueEquationCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {valueEquations.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
          className={cn(
            "rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow",
            item.color
          )}
        >
          <div className="p-3 rounded-full bg-white mb-4">
            <item.icon size={24} className="text-brand-blue" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ValueEquationCards;
