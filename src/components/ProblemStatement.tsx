
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";
import { problemCards } from "./problem/ProblemData";

interface ProblemStatementProps {
  onNavigateNext: () => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const ProblemStatement = ({ onNavigateNext }: ProblemStatementProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Subtle radial background to mirror other sections */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/30" />
      <div className="absolute -top-1/3 right-0 h-2/3 w-2/3 -translate-y-6 translate-x-1/4 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute -bottom-1/4 left-0 h-1/2 w-1/2 -translate-x-1/3 rounded-full bg-brand-lightMint opacity-[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <motion.header
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-left md:text-center"
        >
          <motion.div
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The Problem We Solve
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Traditional employee benefits were never designed for SMBs
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            Owners are forced to choose between no coverage or overpriced plans and manual processes that sap valuable time. Cakewalk closes the access, affordability, and complexity gaps so teams can focus on running their business.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex h-full flex-col rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-inner"
                  style={{ background: `linear-gradient(135deg, ${card.color}, rgba(16, 24, 40, 0.85))` }}
                >
                  {card.icon}
                </span>
                <h2 className="text-xl font-semibold text-brand-darkBlue">{card.title}</h2>
              </div>
              <p className="mt-4 text-sm text-brand-gray md:text-base">{card.description}</p>
              <span className="mt-6 h-1 w-20 rounded-full bg-brand-blue/20 transition group-hover:bg-brand-mint" />
            </motion.article>
          ))}
        </div>

      </div>

      <BottomCornerLogo />

      <div className="mt-12 flex justify-center">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

export default ProblemStatement;
