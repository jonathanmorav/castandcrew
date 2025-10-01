
import { Check } from "lucide-react";

const EmbeddedPartnershipsTab = () => {
  return (
    <div>
      <p className="mb-6 text-gray-700 text-lg">
        Integrating Cakewalk's benefits platform directly into the workflow of complementary 
        SMB service providers through API connections.
      </p>
      
      <div className="mb-8">
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-teal-600">1</span>
          </span>
          Target Partners
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-teal-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Payroll Systems</h5>
                <p className="text-gray-600">Benefits enrollment during employee onboarding</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-teal-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">POS Providers</h5>
                <p className="text-gray-600">SpotON integration at business setup</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-teal-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Banking Platforms</h5>
                <p className="text-gray-600">Financial wellness for business accounts</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-teal-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Accounting Software</h5>
                <p className="text-gray-600">Benefits integration with financial planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-teal-600">2</span>
          </span>
          Technical Implementation
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>
            <h5 className="font-semibold text-teal-800 mb-2">API Integration</h5>
            <p className="text-gray-700">Seamless connection with minimal partner resources</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>
            <h5 className="font-semibold text-teal-800 mb-2">White-labeled UX</h5>
            <p className="text-gray-700">Custom branding options for partner platforms</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>
            <h5 className="font-semibold text-teal-800 mb-2">Data Sync</h5>
            <p className="text-gray-700">Automated synchronization between platforms</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>
            <h5 className="font-semibold text-teal-800 mb-2">Revenue Share</h5>
            <p className="text-gray-700">Tracking and attribution for partner commissions</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-teal-600">3</span>
          </span>
          Integration Benefits
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-teal-500">
            <h5 className="font-bold text-teal-700 text-lg mb-3">For Partners</h5>
            <p className="text-gray-700 mb-3">New revenue stream with zero development costs</p>
            <ul className="space-y-1">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Revenue share on all benefits sold</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Enhanced product offering</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-teal-500">
            <h5 className="font-bold text-teal-700 text-lg mb-3">For SMBs</h5>
            <p className="text-gray-700 mb-3">Simplified access to benefits within familiar tools</p>
            <ul className="space-y-1">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Reduced friction in enrollment</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Contextual benefits recommendations</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-teal-500">
            <h5 className="font-bold text-teal-700 text-lg mb-3">For Cakewalk</h5>
            <p className="text-gray-700 mb-3">High-volume, low-CAC distribution channel</p>
            <ul className="space-y-1">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Scalable customer acquisition</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                <span>Access to pre-qualified businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedPartnershipsTab;
