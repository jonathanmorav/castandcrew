import { motion } from "framer-motion";
import { Lightbulb, Zap, Users, LineChart } from "lucide-react";
import NavigationArrow from "./navigation/NavigationArrow";
import WorkflowVisualizer from "./WorkflowVisualizer";
import { useIsMobile } from "@/hooks/use-mobile";
interface SolutionOverviewProps {
  onNavigateNext: () => void;
}
const steps = [{
  id: "signup",
  title: "Easy Business Signup",
  description: "Simple 2-minute form with basic business information"
}, {
  id: "underwriting",
  title: "Automated Underwriting",
  description: "Our AI analyzes your business profile instantly"
}, {
  id: "quotes",
  title: "Instant Quotes",
  description: "View multiple benefit options tailored to your needs"
}, {
  id: "enrollment",
  title: "Digital Enrollment",
  description: "Employees can self-enroll through our secure portal"
}];

// Animation variants for the background blurs
const blurAnimations = [{
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, 20, -20, 15, -15, 0],
    y: [0, -20, 15, -10, 20, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, -25, 15, -10, 25, 0],
    y: [0, 15, -20, 25, -10, 0],
    transition: {
      duration: 24,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, 15, -15, 25, -10, 0],
    y: [0, -10, 25, -15, 15, 0],
    transition: {
      duration: 18,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, -10, 25, -20, 10, 0],
    y: [0, 25, -10, 15, -25, 0],
    transition: {
      duration: 22,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}];
const SolutionOverview = ({
  onNavigateNext
}: SolutionOverviewProps) => {
  const isMobile = useIsMobile();
  return <section className="relative w-full min-h-screen bg-[#00348f] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Blurs */}
      <motion.div style={{
      top: "-390.3px",
      right: "-230.5px"
    }} initial={blurAnimations[0].initial} animate={blurAnimations[0].animate} className="absolute z-[1] w-[600px] h-[600.2px] rounded-full bg-[#53edbe] filter blur-[800px]" />
      <motion.div className="absolute z-[2] w-[601px] h-[600px] rounded-full bg-[#eaf2ff] opacity-60 filter blur-[700px]" style={{
      top: "583.5px",
      left: "39.5px"
    }} initial={blurAnimations[1].initial} animate={blurAnimations[1].animate} />
      <motion.div className="absolute z-[1] w-[209px] h-[209px] rounded-full bg-[#53edbe] opacity-60 filter blur-[200px]" style={{
      top: "478.7px",
      left: "135.5px"
    }} initial={blurAnimations[2].initial} animate={blurAnimations[2].animate} />
      <motion.div className="absolute z-[0] w-[311px] h-[310px] rounded-full bg-[#5791f3] opacity-60 filter blur-[300px]" style={{
      top: "669.7px",
      right: "calc(100% - 200px)"
    }} initial={blurAnimations[3].initial} animate={blurAnimations[3].animate} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-12 md:py-0">
        {/* Text Column - Styled according to the provided guidelines */}
        <div className="w-full md:w-1/2 max-w-full md:max-w-[544px] mb-10 md:mb-0">
          <div className="flex flex-col items-start gap-3 md:gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-grotesk w-full">
              Our Solution
            </h2>
            
            <p className="text-[#cbdeff] text-lg md:text-xl leading-[32.5px] font-['Inter'] mb-4 md:mb-8">
              Cakewalk Benefits offers a zero-touch insurance platform that streamlines underwriting, user experience, and operations for small businesses.
            </p>
            
            <div className="w-full">
              <div className="flex flex-col gap-5 md:gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white font-['DM_Sans'] mb-5">
                    Key Features
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4 md:gap-3">
                  {/* Solution Points using the component-8 styling */}
                  <SolutionFeature icon={<Lightbulb className="h-6 w-6 text-brand-blue" />} title="Simplified Digital Experience" />
                  <SolutionFeature icon={<Zap className="h-6 w-6 text-brand-blue" />} title="Automated Underwriting" />
                  <SolutionFeature icon={<Users className="h-6 w-6 text-brand-blue" />} title="Collective Purchasing Power" />
                  <SolutionFeature icon={<LineChart className="h-6 w-6 text-brand-blue" />} title="Transparent Pricing" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <WorkflowVisualizer steps={steps} />
        </div>
      </div>

      <NavigationArrow onClick={onNavigateNext} className="text-white hover:text-brand-mint z-10" />
    </section>;
};
interface SolutionFeatureProps {
  icon: React.ReactNode;
  title: string;
}
const SolutionFeature = ({
  icon,
  title
}: SolutionFeatureProps) => <div className="flex flex-row items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-[rgba(227,250,243,0.78)] backdrop-blur-[34px] border border-[rgba(255,255,255,0.6)] flex items-center justify-center">
      {icon}
    </div>
    <h4 className="text-[18px] font-semibold text-[#cbdeff] font-['Inter']">
      {title}
    </h4>
  </div>;
export default SolutionOverview;