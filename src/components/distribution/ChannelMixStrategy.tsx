
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Link, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";

const ChannelMixStrategy = ({
  isInView
}: {
  isInView: boolean;
}) => {
  const strategies = [
    {
      phase: "Launch Phase",
      timeline: "Year 1",
      description: "Focus on establishing initial partnerships in all three channels, with emphasis on affinity groups for early traction.",
      mix: [
        { channel: "Affinity Groups", percent: 60, icon: <Users className="h-4 w-4" />, color: "bg-indigo-100 text-indigo-600" },
        { channel: "Reseller Partnerships", percent: 30, icon: <Building className="h-4 w-4" />, color: "bg-purple-100 text-purple-600" },
        { channel: "Embedded Partnerships", percent: 10, icon: <Link className="h-4 w-4" />, color: "bg-teal-100 text-teal-600" }
      ],
      keyFocus: [
        "Onboard 2-3 affinity group partners with 1,000+ SMB members",
        "Sign first reseller partnership with regional broker",
        "Begin technical integration with one embedded partner"
      ]
    },
    {
      phase: "Growth Phase",
      timeline: "Year 2",
      description: "Accelerate growth through all channels, with increased focus on scaling reseller partnerships through broker networks.",
      mix: [
        { channel: "Affinity Groups", percent: 45, icon: <Users className="h-4 w-4" />, color: "bg-indigo-100 text-indigo-600" },
        { channel: "Reseller Partnerships", percent: 40, icon: <Building className="h-4 w-4" />, color: "bg-purple-100 text-purple-600" },
        { channel: "Embedded Partnerships", percent: 15, icon: <Link className="h-4 w-4" />, color: "bg-teal-100 text-teal-600" }
      ],
      keyFocus: [
        "Deepen engagement with existing affinity partners",
        "Expand reseller network to 10+ brokers",
        "Launch embedded integration with payroll provider"
      ]
    },
    {
      phase: "Scale Phase",
      timeline: "Year 3+",
      description: "Optimize channel mix based on performance data, with increased investment in high-performing embedded integrations.",
      mix: [
        { channel: "Affinity Groups", percent: 40, icon: <Users className="h-4 w-4" />, color: "bg-indigo-100 text-indigo-600" },
        { channel: "Reseller Partnerships", percent: 35, icon: <Building className="h-4 w-4" />, color: "bg-purple-100 text-purple-600" },
        { channel: "Embedded Partnerships", percent: 25, icon: <Link className="h-4 w-4" />, color: "bg-teal-100 text-teal-600" }
      ],
      keyFocus: [
        "Target larger industry associations and chamber networks",
        "Develop national broker program with standardized onboarding",
        "Expand embedded partnerships to 5+ major platforms"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Channel Mix Strategy</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Our phased approach evolves the distribution channel mix to optimize growth and efficiency
        across the business lifecycle.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <Card key={index} className="shadow-lg relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 ${
              index === 0 ? 'bg-indigo-400' : index === 1 ? 'bg-purple-400' : 'bg-teal-400'
            }`}></div>
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-2 rounded-md mr-3 ${
                    index === 0 ? 'bg-indigo-100' : index === 1 ? 'bg-purple-100' : 'bg-teal-100'
                  }`}>
                    {index === 0 ? (
                      <Calendar className={`h-5 w-5 ${
                        index === 0 ? 'text-indigo-600' : index === 1 ? 'text-purple-600' : 'text-teal-600'
                      }`} />
                    ) : index === 1 ? (
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-teal-600" />
                    )}
                  </div>
                  <CardTitle className={`${
                    index === 0 ? 'text-indigo-800' : index === 1 ? 'text-purple-800' : 'text-teal-800'
                  }`}>
                    {strategy.phase}
                  </CardTitle>
                </div>
                <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                  index === 0 ? 'bg-indigo-100 text-indigo-800' : 
                  index === 1 ? 'bg-purple-100 text-purple-800' : 
                  'bg-teal-100 text-teal-800'
                }`}>
                  {strategy.timeline}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4 text-sm">{strategy.description}</p>
              
              <div className="space-y-3 mb-6">
                {strategy.mix.map((channel, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className={`${channel.color} p-1.5 rounded-full mr-2`}>
                          {channel.icon}
                        </div>
                        <span className="text-sm font-medium">{channel.channel}</span>
                      </div>
                      <span className="text-sm font-semibold">{channel.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${
                          i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-purple-500' : 'bg-teal-500'
                        }`} 
                        style={{ width: `${channel.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Focus Areas:</h4>
                <ul className="space-y-2">
                  {strategy.keyFocus.map((focus, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                        index === 0 ? 'bg-indigo-500' : index === 1 ? 'bg-purple-500' : 'bg-teal-500'
                      }`}></div>
                      <span className="text-gray-700">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ChannelMixStrategy;
