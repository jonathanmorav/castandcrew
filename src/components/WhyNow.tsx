import { useRef } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import { useInView } from "@/hooks/use-in-view";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface WhyNowProps {
  onNavigateNext: () => void;
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const diagramVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const labelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const WhyNow = ({ onNavigateNext }: WhyNowProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24"
    >

      <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col justify-center px-4 md:px-6">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Why Now?
          </span>
          <h2 className="mt-4 max-w-2xl font-grotesk text-3xl font-bold text-brand-darkBlue md:text-5xl">
            Why Now? Why Cakewalk?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Cakewalk sits at the intersection of deep industry experience, technology, and a distribution void that incumbents can't fill fast enough.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative mx-auto w-full max-w-[1200px] px-4">
            {/* Desktop labels container */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative flex items-center justify-center">
                {/* Left label - Technology Maturity */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="max-w-[260px] text-right pr-8">
                    <span className="text-lg font-semibold text-brand-blue">
                      Technology Maturity
                    </span>
                    <div className="ml-auto mt-2 h-[2px] w-14 bg-brand-blue" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 text-left">
                      Emerging technologies now blend real-time data, instant underwriting, and AI guidance—clearing the friction that kept markets untapped and products on the shelf. Cakewalk plugs into that ecosystem with a platform that delivers frictionless digital experiences for carriers, agents, and small businesses alike.
                    </p>
                  </div>
                  {/* Line from logo to left label */}
                  <svg className="absolute left-full top-1/2 ml-2 h-2 w-[140px] -translate-y-1/2" aria-hidden="true">
                    <line x1="140" y1="4" x2="10" y2="4" stroke="#53EDBE" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Central logo */}
                <motion.div
                  variants={diagramVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="flex h-[320px] w-[320px] flex-shrink-0 items-center justify-center"
                >
                  <img
                    src={cakewalkLogo}
                    alt="Cakewalk Benefits logo"
                    className="h-auto w-full"
                  />
                </motion.div>

                {/* Right label - Insurance Company Orientation */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  {/* Line from logo to right label */}
                  <svg className="absolute right-full top-1/2 mr-2 h-2 w-[140px] -translate-y-1/2" aria-hidden="true">
                    <line x1="0" y1="4" x2="130" y2="4" stroke="#53EDBE" strokeWidth="1.5" />
                  </svg>
                  <div className="max-w-[220px] text-left pl-8">
                    <span className="text-lg font-semibold text-brand-blue">
                      Carriers Hungry for New Distribution Partners
                    </span>
                    <div className="mt-2 h-[2px] w-14 bg-brand-blue" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      Growth-starved insurers are open to delegating authority to tech-forward partners who can deliver new segments. Cakewalk gives them turnkey access to a largely untapped market that they cannot serve with their existing capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom label - Structural Shift in Labor Force */}
              <div className="mt-12 flex justify-center">
                <div className="relative max-w-[480px] text-center">
                  {/* Line from logo to bottom label */}
                  <svg className="absolute left-1/2 bottom-full mb-4 h-[100px] w-2 -translate-x-1/2" aria-hidden="true">
                    <line x1="4" y1="0" x2="4" y2="90" stroke="#53EDBE" strokeWidth="1.5" />
                  </svg>
                  <span className="text-lg font-semibold text-brand-blue">
                    Structural Shift in Labor Force
                  </span>
                  <div className="mx-auto mt-2 h-[2px] w-14 bg-brand-blue" />
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 text-left">
                    People now decide how, where, and how much they work, and legacy benefits can't flex with that "new normal." Cakewalk is re-orienting insurance to the economy of tomorrow—tracking real work patterns so coverage adjusts as fluidly as modern teams do.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile logo */}
            <motion.div
              variants={diagramVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center md:hidden"
            >
              <img
                src={cakewalkLogo}
                alt="Cakewalk Benefits logo"
                className="h-auto w-full"
              />
            </motion.div>

            {/* Mobile labels stacked below diagram */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-8 flex w-full flex-col gap-5 text-center md:hidden"
            >
              <div>
                <span className="text-base font-semibold text-brand-blue">
                  Technology Maturity
                </span>
                <div className="mx-auto mt-2 h-[2px] w-14 bg-brand-blue" />
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Emerging technologies now blend real-time data, instant underwriting, and AI guidance—clearing the friction that kept markets untapped and products on the shelf. Cakewalk plugs into that ecosystem with a platform that delivers frictionless digital experiences for carriers, agents, and small businesses alike.
                </p>
              </div>
              <div>
                <span className="text-base font-semibold text-brand-blue">
                  Carriers Hungry for New Distribution Partners
                </span>
                <div className="mx-auto mt-2 h-[2px] w-14 bg-brand-blue" />
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Growth-starved insurers are open to delegating authority to tech-forward partners who can deliver new segments. Cakewalk gives them turnkey access to a largely untapped market that they cannot serve with their existing capabilities.
                </p>
              </div>
              <div>
                <span className="text-base font-semibold text-brand-blue">
                  Structural Shift in Labor Force
                </span>
                <div className="mx-auto mt-2 h-[2px] w-14 bg-brand-blue" />
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  People now decide how, where, and how much they work, and legacy benefits can't flex with that "new normal." Cakewalk is re-orienting insurance to the economy of tomorrow—tracking real work patterns so coverage adjusts as fluidly as modern teams do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom-right logo */}
      <motion.div
        variants={diagramVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-6 right-6 w-32 opacity-70"
      >
        <img src={cakewalkLogo} alt="Cakewalk Benefits" className="w-full" />
      </motion.div>

      <NavigationArrow onClick={onNavigateNext} className="text-brand-blue" />
    </section>
  );
};

export default WhyNow;
