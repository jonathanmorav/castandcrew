
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Users, Building, Link } from "lucide-react";

const DistributionEconomics = ({
  isInView
}: {
  isInView: boolean;
}) => {
  const channelMetrics = [
    {
      id: "affinity",
      name: "Affinity Groups",
      icon: <Users className="h-5 w-5 text-indigo-600" />, 
      color: "bg-indigo-100 text-indigo-700",
      gradient: "from-indigo-50 to-indigo-100",
      percent: 40,
      cac: 280,
      ltv: 2240,
      ratio: 8.0,
      advantages: [
        "Pre-vetted SMB audiences",
        "Trusted introduction through existing relationship",
        "Bulk enrollment opportunities",
      ],
      challenges: [
        "Relationship-building with group leaders",
        "Customizing offerings for group needs",
        "Managing group-specific enrollment periods",
      ]
    },
    {
      id: "reseller",
      name: "Reseller Partnerships",
      icon: <Building className="h-5 w-5 text-purple-600" />,
      color: "bg-purple-100 text-purple-700",
      gradient: "from-purple-50 to-purple-100",
      percent: 35,
      cac: 350,
      ltv: 2450,
      ratio: 7.0,
      advantages: [
        "Established client relationships",
        "Sales expertise in benefits industry",
        "Complementary product positioning",
      ],
      challenges: [
        "Training on platform capabilities",
        "Commission structure alignment",
        "Managing co-branding expectations",
      ]
    },
    {
      id: "embedded",
      name: "Embedded Partnerships",
      icon: <Link className="h-5 w-5 text-teal-600" />,
      color: "bg-teal-100 text-teal-700",
      gradient: "from-teal-50 to-teal-100",
      percent: 25,
      cac: 210,
      ltv: 2100,
      ratio: 10.0,
      advantages: [
        "Contextual offering at point of need",
        "Seamless user experience",
        "High conversion through reduced friction",
      ],
      challenges: [
        "Technical integration complexity",
        "Partner product roadmap alignment",
        "Ensuring consistent UX across platforms",
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Distribution Economics</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Our multi-channel approach optimizes customer acquisition costs while maximizing lifetime value
        across different partnership models.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {channelMetrics.map((channel) => (
          <Card key={channel.id} className={`shadow-lg bg-gradient-to-br ${channel.gradient} border-0`}>
            <CardHeader className="flex flex-row items-center pb-2">
              <div className={`${channel.color.split(' ')[0]} p-2 rounded-md mr-3`}>
                {channel.icon}
              </div>
              <CardTitle className="text-lg">{channel.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="py-2">
                <div className="text-gray-700 mb-1">Channel Mix</div>
                <div className="text-2xl font-bold mb-4">{channel.percent}%</div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-xs mb-1">CAC</div>
                    <div className="font-semibold">${channel.cac}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-xs mb-1">LTV</div>
                    <div className="font-semibold">${channel.ltv}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-xs mb-1">Ratio</div>
                    <div className="font-semibold">{channel.ratio}x</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle>Channel Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {channelMetrics.map((channel) => (
              <AccordionItem key={`details-${channel.id}`} value={channel.id}>
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center">
                    <div className={`${channel.color.split(' ')[0]} p-2 rounded-md mr-3`}>
                      {channel.icon}
                    </div>
                    <span>{channel.name} Details</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 py-2">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Advantages</h4>
                      <ul className="space-y-2">
                        {channel.advantages.map((advantage, i) => (
                          <li key={`adv-${i}`} className="flex items-start">
                            <Check className={`h-5 w-5 ${channel.color.split(' ')[1]} mr-2 mt-0.5 shrink-0`} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {channel.challenges.map((challenge, i) => (
                          <li key={`chal-${i}`} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2.5 ml-1 shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DistributionEconomics;
