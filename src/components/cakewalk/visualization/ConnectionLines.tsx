
import { motion } from "framer-motion";
import { ComponentData } from "./types";

interface ConnectionLinesProps {
  connections: { from: string; to: string }[];
  components: ComponentData[];
  hoveredComponent: string | null;
  isVisible: boolean;
}

const ConnectionLines = ({ connections, components, hoveredComponent, isVisible }: ConnectionLinesProps) => {
  if (!isVisible) return null;
  
  return (
    <>
      {connections.map((connection, index) => {
        const fromComponent = components.find(c => c.id === connection.from);
        const toComponent = components.find(c => c.id === connection.to);
        
        if (!fromComponent || !toComponent) return null;
        
        // Calculate if this connection involves the hovered component
        const isHighlighted = hoveredComponent === fromComponent.id || hoveredComponent === toComponent.id;
        
        return (
          <motion.div
            key={`connection-${index}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: isHighlighted ? 0.9 : 0.7 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          >
            <svg width="100%" height="100%" style={{ position: 'absolute' }}>
              <motion.line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${fromComponent.position.x}px)`}
                y2={`calc(50% + ${fromComponent.position.y}px)`}
                stroke={isHighlighted ? "#5AFEEF" : "#CBD5E0"}
                strokeWidth={isHighlighted ? "3" : "2"}
                strokeDasharray={isHighlighted ? "0" : "5,5"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
              />
              <motion.line
                x1={`calc(50% + ${fromComponent.position.x}px)`}
                y1={`calc(50% + ${fromComponent.position.y}px)`}
                x2={`calc(50% + ${toComponent.position.x}px)`}
                y2={`calc(50% + ${toComponent.position.y}px)`}
                stroke={isHighlighted ? "#5AFEEF" : "#CBD5E0"}
                strokeWidth={isHighlighted ? "3" : "2"}
                strokeDasharray={isHighlighted ? "0" : "5,5"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              />
            </svg>
          </motion.div>
        );
      })}
    </>
  );
};

export default ConnectionLines;
