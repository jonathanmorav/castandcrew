import { motion } from "framer-motion";
interface OpportunityHighlightProps {
  isVisible: boolean;
}
const OpportunityHighlight = ({ isVisible }: OpportunityHighlightProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const stats = [
    {
      value: "33.2M",
      label: "Small businesses nationwide",
    },
    {
      value: "61.7M",
      label: "Employees depending on SMB-sponsored benefits",
    },
    {
      value: "45%",
      label: "Share of the U.S. workforce employed by SMBs",
    },
    {
      value: "95%",
      label: "Persistency rate—average policy stays in force four years",
    },
    {
      value: "$25",
      label: "Monthly revenue per covered life via Cakewalk",
    },
  ];

  const narrativePoints = [
    "Fragmented distribution leaves owners navigating benefits without expertise or time.",
    "Premiums run 30–50% higher than enterprise rates, so coverage is the first cost item cut.",
    "Carriers need a turnkey channel that can profitably serve the long tail of employers.",
  ];

  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: 0.7 }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-teal p-8 text-white md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="relative z-[1] flex h-full flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Why this matters
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              61.7M workers need modern protection their employers can actually deploy.
            </h3>
            <p className="max-w-xl text-base text-white/85 md:text-lg">
              Small businesses power nearly half of the U.S. workforce, yet lack the tools, incentives, and
              infrastructure to provide competitive benefits. The result is a nationwide coverage gap primed for a
              digital-first entrant.
            </p>
            <div className="flex flex-1 flex-col justify-between gap-6 md:gap-8">
              <motion.ul
                className="space-y-4 text-sm text-white/90 md:text-base"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {narrativePoints.map((point) => (
                  <motion.li key={point} variants={listItemVariants} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white/70" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
                <h4 className="text-lg font-semibold">Strategic takeaway</h4>
                <p className="mt-2 text-sm text-white/85 md:text-base">
                  Capturing even a sliver of this market unlocks a multi-billion-dollar premium pool while deepening
                  carrier distribution and customer retention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#53EDBE] via-[#7966F8] to-[#005DFE] p-8 text-white shadow-xl backdrop-blur md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="relative z-[1] flex h-full flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              The Cakewalk Opportunity
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Digitally activate the long tail of employers and unlock recurring revenue.
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-6 text-white"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value + index}
                  variants={listItemVariants}
                  className={`rounded-2xl border border-white/25 bg-white/10 p-5 text-center backdrop-blur ${index === stats.length - 1 ? "col-span-2" : ""}`}
                >
                  <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
                  <p className="mt-2 text-sm text-white/85 md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-sm text-white/85 md:text-base">
              Cakewalk makes benefits self-service for the partners SMBs already trust: reseller networks, affinity communities,
              and embedded payroll or tech platforms. All of that demand flows into one underwriting, servicing, and billing layer,
              letting carriers scale the long tail without adding headcount.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default OpportunityHighlight;
