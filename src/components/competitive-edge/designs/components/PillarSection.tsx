
import { motion } from "framer-motion";
import { pillars } from "../../data";

const PillarSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        The Four Pillars of Our Pricing Advantage
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white border border-gray-100 rounded-xl shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold mr-4">
                  {index + 1}
                </span>
                <h3 className="font-bold text-xl text-gray-800">{pillar.title}</h3>
              </div>
              
              <ul className="space-y-3 mt-6">
                {pillar.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="inline-block h-5 w-5 rounded-full bg-indigo-100 flex-shrink-0 mt-1 mr-3">
                      <span className="flex h-full w-full items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                      </span>
                    </span>
                    <span className="text-gray-600">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PillarSection;
