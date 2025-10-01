
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const valuePropositions = [
  {
    title: "Match the pricing",
    description: "of large companies while delivering superior service",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600"
  },
  {
    title: "Significant savings",
    description: "compared to traditional small business options",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    title: "Enterprise-grade solutions",
    description: "previously inaccessible to SMBs",
    color: "bg-gradient-to-br from-violet-500 to-indigo-600"
  },
  {
    title: "Sustainable competitive advantage",
    description: "through our technology-driven model",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
];

const ValuePropositionCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {valuePropositions.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
          className={cn(
            "rounded-xl shadow-lg p-7 hover:shadow-xl transition-all transform hover:-translate-y-1",
            item.color
          )}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-start">
            <div className="bg-white/20 h-10 w-1 rounded-full mr-5"></div>
            <div>
              <h4 className="font-bold text-xl text-white mb-2">
                {index + 1}. {item.title}
              </h4>
              <p className="text-white/90 text-lg">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ValuePropositionCards;
