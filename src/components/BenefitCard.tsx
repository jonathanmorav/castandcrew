
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const BenefitCard = ({ icon, title, description, color, index }: BenefitCardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-l-4 border-l-brand-blue">
        <CardContent className="p-4 flex gap-4 items-center">
          <div className={cn(
            "rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 transition-colors group-hover:scale-110 duration-300",
            color
          )}>
            {icon}
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-lg text-brand-blue group-hover:text-brand-purple transition-colors">
              {title}
            </h4>
            <p className="text-[#666666]">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BenefitCard;
