
import { Check } from "lucide-react";

const AffinityGroupsTab = () => {
  return (
    <div>
      <p className="mb-6 text-gray-700 text-lg">
        Affinity partnerships provide access to pre-aggregated groups of SMBs with established 
        trust relationships, dramatically reducing customer acquisition costs.
      </p>
      
      <div className="mb-8">
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-indigo-600">1</span>
          </span>
          Key Benefits
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Lower CAC</h5>
                <p className="text-gray-600">Warm introductions reduce acquisition costs by 60%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Higher Conversion</h5>
                <p className="text-gray-600">3.2x higher conversion than traditional channels</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Brand Validation</h5>
                <p className="text-gray-600">Leverages existing trust relationships</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Recurring Revenue</h5>
                <p className="text-gray-600">Predictable annual member renewals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-indigo-600">2</span>
          </span>
          Success Stories
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-indigo-700 text-lg mb-2">Chamber Alliance</h5>
            <div className="text-indigo-900 font-semibold text-2xl mb-1">1,500</div>
            <p className="text-gray-700">small businesses onboarded in first 60 days</p>
          </div>
          <div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-indigo-700 text-lg mb-2">Industry Association</h5>
            <div className="text-indigo-900 font-semibold text-2xl mb-1">78%</div>
            <p className="text-gray-700">adoption rate among eligible members</p>
          </div>
          <div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-indigo-700 text-lg mb-2">Professional Network</h5>
            <div className="text-indigo-900 font-semibold text-2xl mb-1">12,000</div>
            <p className="text-gray-700">potential businesses launching in Q2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffinityGroupsTab;
