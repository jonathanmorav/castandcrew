import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
interface BarrierHeaderProps {
  isVisible: boolean;
}
const BarrierHeader = ({
  isVisible
}: BarrierHeaderProps) => {
  return <motion.div initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6
  }} className="text-center mb-12">
      <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-none px-4 py-1.5 text-sm font-medium mx-auto" variant="outline">
        The Opportunity for Agents
      </Badge>
      
      <motion.h2 initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.7,
      delay: 0.2
    }} className="mb-6 text-5xl">
        Employee Benefits Are the Next Growth Channel for Agents
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mx-auto max-w-3xl text-lg leading-relaxed text-brand-darkBlue/80"
      >
        The opportunity in employee benefits has never been greater. More than 80% of small and
        medium-sized businesses remain underserved in the benefits market, creating a massive
        whitespace for agents who can deliver modern solutions. When you add benefits to your client
        relationships, retention rates soar. Clients who purchase multiple lines of coverage stay
        with their agents longer, refer more business, and build deeper trust over time.
      </motion.p>
    </motion.div>;
};
export default BarrierHeader;
