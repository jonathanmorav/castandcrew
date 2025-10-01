
import { Check } from "lucide-react";

const ResellerPartnershipsTab = () => {
  return (
    <div>
      <p className="mb-6 text-gray-700 text-lg">
        Strategic alliances with established insurance brokers and agencies that seek 
        innovative solutions to better serve their SMB clients.
      </p>

      <div className="mb-8">
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-purple-600">1</span>
          </span>
          Key Partners
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-purple-700 text-lg mb-2">Globe Life</h5>
            <div className="text-purple-900 font-semibold text-2xl mb-1">5,000</div>
            <p className="text-gray-700">SMB enrollments targeted in Year 1</p>
          </div>
          <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-purple-700 text-lg mb-2">Aflac</h5>
            <p className="text-gray-700">Pilot program with high-performing regional offices</p>
          </div>
          <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <h5 className="font-bold text-purple-700 text-lg mb-2">Cross Insurance</h5>
            <p className="text-gray-700">Northeast regional partnership with SMB focus</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-purple-600">2</span>
          </span>
          Implementation Model
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">White-labeled Platform</h5>
                <p className="text-gray-600">Seamless broker integration with custom branding</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Revenue Sharing</h5>
                <p className="text-gray-600">Both initial sales and renewals generate commissions</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Marketing Resources</h5>
                <p className="text-gray-600">Co-branded materials and training programs</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 shrink-0">
                <Check className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Partner Success Team</h5>
                <p className="text-gray-600">Dedicated support to drive adoption and growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
          <span className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
            <span className="text-purple-600">3</span>
          </span>
          Partner Economics
        </h4>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-semibold text-gray-800 mb-2">For Brokers:</div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Maintain existing client relationships</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-600 mr-2" />
                  <span>10% of premium—matching traditional commissions</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-800 mb-2">For Cakewalk:</div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Provides technology and underwriting expertise</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Handles administration and claims management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerPartnershipsTab;
