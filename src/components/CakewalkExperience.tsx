import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import { useInView } from "@/hooks/use-in-view";
import ComparisonTable from "./cakewalk-experience/ComparisonTable";
import UxoFramework from "./cakewalk-experience/UxoFramework";
import SimplifiedJourney from "./cakewalk-experience/SimplifiedJourney";
import ShopifyExperience from "./cakewalk-experience/ShopifyExperience";
import CustomerImpact from "./cakewalk-experience/CustomerImpact";
interface CakewalkExperienceProps {
  onNavigateNext: () => void;
}
const CakewalkExperience = ({
  onNavigateNext
}: CakewalkExperienceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    threshold: 0.1
  });
  const controls = useAnimationControls();
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);
  return <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-200 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-teal-200 opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header with animated title */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={controls} variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      }} className="text-center mb-16 md:mb-24">
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.9
        }} animate={controls} variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.2
            }
          }
        }} className="text-5xl text-brand-blue">
            The Cakewalk Experience
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={controls} variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4
            }
          }
        }} className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Weeks to Minutes: Revolutionizing Benefits Access
          </motion.p>
          <motion.p initial={{
          opacity: 0
        }} animate={controls} variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.6
            }
          }
        }} className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Cakewalk isn't just a better interface—it's a comprehensive reimagining of how 
            SMBs access, shop for, enroll in, and manage employee benefits.
          </motion.p>
        </motion.div>

        {/* Traditional Process vs. Cakewalk */}
        <ComparisonTable />

        {/* The Power of UXO Framework */}
        <UxoFramework />

        {/* How It Works: The Simplified Journey */}
        <SimplifiedJourney />

        {/* The "Shopify for Benefits" Experience */}
        <ShopifyExperience />

        {/* The Customer Impact */}
        <CustomerImpact />
      </div>

      <NavigationArrow onClick={onNavigateNext} />
    </div>;
};
export default CakewalkExperience;