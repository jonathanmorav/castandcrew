
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AffinityGroupsTab from "./channels/AffinityGroupsTab";
import ResellerPartnershipsTab from "./channels/ResellerPartnershipsTab";
import EmbeddedPartnershipsTab from "./channels/EmbeddedPartnershipsTab";
import { BarChart, Users, Link, Building } from "lucide-react";

const ChannelTabs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Three Core Distribution Channels
      </h2>
      
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="affinity" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 gap-1 p-1 bg-gray-100 rounded-xl w-full max-w-3xl">
              <TabsTrigger 
                value="affinity" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 data-[state=active]:hover:bg-indigo-700"
              >
                <Users className="h-5 w-5" />
                <span className="hidden sm:inline">Affinity Groups</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reseller" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 data-[state=active]:hover:bg-purple-700"
              >
                <Building className="h-5 w-5" />
                <span className="hidden sm:inline">Reseller Partnerships</span>
              </TabsTrigger>
              <TabsTrigger 
                value="embedded" 
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 data-[state=active]:hover:bg-teal-700"
              >
                <Link className="h-5 w-5" />
                <span className="hidden sm:inline">Embedded Partnerships</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative">
            <TabsContent 
              value="affinity"
              className="mt-0 data-[state=active]:animate-fade-in-up"
            >
              <Card className="border-indigo-100 shadow-lg shadow-indigo-100/20">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 rounded-t-lg border-b border-indigo-100">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800">Affinity Groups</CardTitle>
                      <CardDescription className="text-indigo-600 font-medium">Status: 2 Live, 1 Launching Q2 2025</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <AffinityGroupsTab />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent 
              value="reseller"
              className="mt-0 data-[state=active]:animate-fade-in-up"
            >
              <Card className="border-purple-100 shadow-lg shadow-purple-100/20">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-t-lg border-b border-purple-100">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800">Reseller Partnerships</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">Status: 3 Active, 5 in Pipeline</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ResellerPartnershipsTab />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent 
              value="embedded"
              className="mt-0 data-[state=active]:animate-fade-in-up"
            >
              <Card className="border-teal-100 shadow-lg shadow-teal-100/20">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg border-b border-teal-100">
                  <div className="flex items-center">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <Link className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800">Embedded Partnerships</CardTitle>
                      <CardDescription className="text-teal-600 font-medium">Status: 1 Live, 3 in Negotiation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <EmbeddedPartnershipsTab />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ChannelTabs;
