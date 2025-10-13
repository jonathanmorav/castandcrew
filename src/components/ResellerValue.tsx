import { motion } from "framer-motion";
import {
  DollarSign,
  Share2,
  RefreshCw,
  Star,
  Cog
} from "lucide-react";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";
import ReadyToGetStarted from "./call-to-action/ReadyToGetStarted";

interface ResellerValueProps {
  onNavigateNext: () => void;
}

type Accent = "revenue" | "referrals" | "retention" | "differentiation" | "operations";

const points: Array<{
  title: string;
  description: string;
  accent: Accent;
  icon: React.ReactNode;
}> = [
  {
    title: "Earn More, Faster",
    description:
      "Access high-demand employee benefits products with strong recurring commissions, fast payouts, and diversified revenue beyond traditional lines.",
    accent: "revenue",
    icon: <DollarSign className="h-6 w-6 text-brand-teal" />,
  },
  {
    title: "Built-in Referrals",
    description:
      "The enrollment journey automatically surfaces personal and commercial line opportunities—no extra prospecting motion required.",
    accent: "referrals",
    icon: <Share2 className="h-6 w-6 text-brand-blue" />,
  },
  {
    title: "Superior Client Retention",
    description:
      "Benefits clients stay longer, refer more, and expand coverage across their business—dramatically improving lifetime value.",
    accent: "retention",
    icon: <RefreshCw className="h-6 w-6 text-brand-blue" />,
  },
  {
    title: "Differentiate Your Agency",
    description:
      "Position yourself as the SMB benefits expert with a modern, turnkey solution competitors can’t match.",
    accent: "differentiation",
    icon: <Star className="h-6 w-6 text-brand-purple" />,
  },
  {
    title: "You Sell, We Handle the Rest",
    description:
      "Cakewalk handles design, compliance, underwriting, and billing so you stay focused on client relationships.",
    accent: "operations",
    icon: <Cog className="h-6 w-6 text-brand-blue" />,
  },
];

const accentClasses: Record<Accent, { container: string; iconBg: string; badge: string }> = {
  revenue: {
    container: "border-brand-mint/40 bg-brand-lightMint/25",
    iconBg: "bg-brand-lightMint text-brand-teal",
    badge: "bg-brand-lightMint/60 text-brand-teal",
  },
  referrals: {
    container: "border-soft-green/50 bg-soft.green/40",
    iconBg: "bg-soft.green text-brand-teal",
    badge: "bg-soft.green/60 text-brand-teal",
  },
  retention: {
    container: "border-soft-blue/50 bg-soft.blue/35",
    iconBg: "bg-soft.blue text-brand-blue",
    badge: "bg-soft.blue/60 text-brand-blue",
  },
  differentiation: {
    container: "border-soft-purple/50 bg-soft.purple/35",
    iconBg: "bg-soft.purple text-brand-purple",
    badge: "bg-soft.purple/60 text-brand-purple",
  },
  operations: {
    container: "border-brand-lightBlue/50 bg-brand-lightBlue/25",
    iconBg: "bg-brand-lightBlue text-brand-blue",
    badge: "bg-brand-lightBlue/60 text-brand-blue",
  },
};

const ResellerValue = ({ onNavigateNext }: ResellerValueProps) => {
  const topCards = points.slice(0, 3);
  const bottomCards = points.slice(3);

  return (
    <section className="relative min-h-screen bg-white py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-lightMint/20 to-white" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <header className="space-y-4 text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">Reseller Value Proposition</p>
          <h1 className="text-3xl font-bold text-brand-darkBlue md:text-5xl">Why Agents Scale with Cakewalk</h1>
          <p className="mx-auto max-w-3xl text-base text-brand-gray md:text-lg">
            Cakewalk handles product design, compliance, and administration so resellers stay focused on building relationships,
            closing business, and growing long-term value.
          </p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {topCards.map((point, index) => {
            const accent = accentClasses[point.accent];
            return (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group rounded-2xl border p-6 shadow-[0_18px_40px_rgba(0,93,254,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,93,254,0.1)] ${accent.container}`}
              >
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent.badge}`}>
                  {point.title.split(" ")[0]}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.iconBg}`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-darkBlue">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-gray">{point.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center gap-5 md:flex-row md:justify-center"
        >
          {bottomCards.map((point, index) => {
            const accent = accentClasses[point.accent];
            return (
              <motion.article
                key={point.title}
                className={`w-full max-w-md rounded-2xl border p-6 text-left shadow-[0_18px_40px_rgba(0,93,254,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,93,254,0.1)] ${accent.container}`}
                whileHover={{ scale: 1.01 }}
              >
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent.badge}`}>
                  {point.title.split(" ")[0]}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.iconBg}`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-darkBlue">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-gray">{point.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReadyToGetStarted />
        </motion.div>
      </div>

      <BottomCornerLogo />
      <NavigationArrow onClick={onNavigateNext} className="text-brand-blue" />
    </section>
  );
};

export default ResellerValue;
