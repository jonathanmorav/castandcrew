import { motion } from "framer-motion";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface BottomCornerLogoProps {
  className?: string;
}

const BottomCornerLogo = ({ className = "" }: BottomCornerLogoProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    className={`pointer-events-none absolute bottom-6 right-6 w-32 opacity-70 ${className}`.trim()}
  >
    <img src={cakewalkLogo} alt="Cakewalk Benefits" className="w-full" />
  </motion.div>
);

export default BottomCornerLogo;
