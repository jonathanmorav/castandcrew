import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Building, Linkedin } from "lucide-react";
interface AdvantageItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const advantageData: AdvantageItem[] = [{
  title: "Complementary Expertise",
  description: "Our founding team combines deep domain knowledge with technological innovation—insurance veterans working alongside product and technology leaders to reimagine what's possible.",
  icon: <Users className="h-8 w-8 text-brand-blue" />
}, {
  title: "Proven Track Record",
  description: "Multiple successful exits, Fortune 500 leadership experience, and a history of building and scaling technology-driven companies create a foundation for execution excellence.",
  icon: <Briefcase className="h-8 w-8 text-brand-blue" />
}, {
  title: "Industry Relationships",
  description: "Extensive carrier, broker, and technology partner connections enable rapid distribution network development and preferential underwriting arrangements.",
  icon: <Building className="h-8 w-8 text-brand-blue" />
}, {
  title: "Shared Vision",
  description: "United by the mission to transform employee benefits for small businesses through technology, creating both business impact and social good.",
  icon: <Linkedin className="h-8 w-8 text-brand-blue" />
}];
const TeamAdvantage = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.4
  }} className="mb-16">
      <h2 className="font-bold mb-8 text-center text-h3">Team Execution Advantage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantageData.map((item, index) => <AdvantageCard key={item.title} advantage={item} index={index} />)}
      </div>
    </motion.div>;
};
const AdvantageCard = ({
  advantage,
  index
}: {
  advantage: AdvantageItem;
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    delay: 0.5 + index * 0.1
  }}>
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="mt-1">{advantage.icon}</div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
export default TeamAdvantage;