import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
interface LeaderProfile {
  name: string;
  title: string;
  image: string;
  bio: string[];
  quote: string;
  email: string;
}
const leadershipData: LeaderProfile[] = [{
  name: "Paul Gable",
  title: "Chief Executive Officer",
  image: "/paul-gable.jpg",
  bio: ["Chief Insurance Officer @ Salty — Led insurance strategy through successful exit to CDK Global", "Chief Insurance Officer @ CDK Global — Directed insurance operations for global automotive technology leader", "Chief Underwriting Officer @ Prudential — Managed underwriting for Fortune 500 insurance giant", "Founder @ IBX — Built and exited to Alliant Insurance Services", "Founder @ Alhazen Capital — Launched successful investment firm focused on insurtech"],
  quote: "The insurance industry has long failed small businesses. Cakewalk represents the convergence of my career—building the platform I've always wanted to create.",
  email: "paul@cakewalkbenefits.com"
}, {
  name: "Bill Kennedy",
  title: "Chief Revenue Officer",
  image: "/bill-kennedy.jpg",
  bio: ["President @ Heritage One — Led employee benefits consulting firm serving mid-market businesses", "VP Business Development @ MCG Group — Directed growth for insurance brokerage focused on SMBs and independent contractors", "20+ Years in Benefits Distribution — Deep network of carrier and broker relationships"],
  quote: "Small businesses deserve the same quality benefits as large corporations. Our distribution model finally makes this possible at scale.",
  email: "bill@cakewalkbenefits.com"
}, {
  name: "Niv Ben-Dor",
  title: "Chief Product Officer",
  image: "/niv-ben-dor.jpg",
  bio: ["VP Product @ Cover Whale — Led product strategy for insurtech focused on commercial auto", "VP Product & Monetization @ Content IQ — Drove product development through successful exit to Perion", "Expert in Product-Led Growth — Track record of building intuitive, high-conversion user experiences"],
  quote: "Insurance products have historically been designed for carriers and brokers, not users. We're flipping that model to create an experience business owners actually enjoy.",
  email: "niv@cakewalkbenefits.com"
}, {
  name: "Jonathan Morav",
  title: "Chief Operating Officer",
  image: "/jonathan-morav.jpg",
  bio: ["VP Operations, Sales, Product & Strategy @ Fabric — Led multiple functions at high-growth startup focused on industrial automation for ecommerce", "Cross-Functional Leader — Expertise in scaling operations while maintaining quality", "Process Optimization Specialist — Background in transforming complex workflows into streamlined systems"],
  quote: "The operational complexity of insurance creates enormous opportunity for those who can simplify it. Our zero-touch platform represents the future of the industry.",
  email: "jonathan@cakewalkbenefits.com"
}];
const LeadershipProfiles = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.2
  }} className="mb-16">
      <h2 className="font-bold mb-8 text-center text-h3">Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leadershipData.map((leader, index) => <ProfileCard key={leader.name} leader={leader} index={index} />)}
      </div>
    </motion.div>;
};
const ProfileCard = ({
  leader,
  index
}: {
  leader: LeaderProfile;
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3 + index * 0.1
  }}>
      <Card className="h-full">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-4 mb-2">
            <Avatar className="h-16 w-16 border-2 border-gray-200">
              <AvatarImage src={leader.image} alt={leader.name} />
              <AvatarFallback className="bg-brand-blue text-white text-lg">
                {leader.name.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{leader.name}</h3>
              <p className="text-gray-500">{leader.title}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="pl-5 mb-4 space-y-1 list-disc text-sm">
            {leader.bio.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <blockquote className="border-l-4 border-brand-blue pl-4 italic text-gray-700 mb-4">
            "{leader.quote}"
          </blockquote>
          <div className="flex items-center text-sm text-gray-500">
            <Mail className="h-4 w-4 mr-1" />
            <span>{leader.email}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
export default LeadershipProfiles;