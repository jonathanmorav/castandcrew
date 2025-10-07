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
        A Major Structural Problem
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
        Breaking Down the Benefits Barrier for SMBs
      </motion.h2>
    </motion.div>;
};
export default BarrierHeader;