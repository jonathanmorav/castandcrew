import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const ReadyToGetStarted = () => {
  const benefits = [
    "Access to premium carrier partnerships",
    "Dedicated onboarding support",
    "Marketing materials and training",
    "Real-time commission tracking",
    "24/7 technical support"
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-brand-blue to-brand-purple rounded-3xl p-6 text-white"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-base text-white/90 max-w-xl mx-auto">
            Join hundreds of agents who are already scaling their business with Cakewalk's comprehensive benefits platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-4 w-4 text-brand-mint flex-shrink-0" />
                <span className="text-sm text-white/95">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-full font-semibold text-base hover:bg-white/90 transition-colors shadow-lg"
            >
              Start Your Application
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <p className="text-xs text-white/80 mt-2">
              Takes less than 1 minute
            </p>
          </div>
        </div>
      </motion.div>

      {/* HubSpot Form Section - Fully Embedded */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-3xl p-6 border-2 border-brand-lightMint/30 shadow-lg"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-brand-darkBlue mb-3">
            Agent Application Form
          </h3>
          <p className="text-base text-brand-gray max-w-xl mx-auto">
            Complete the form below to start your agent partnership application.
          </p>
        </div>
        
        {/* HubSpot Form Embed */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-lg overflow-hidden"
            style={{ 
              height: '900px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}
          >
            <iframe
              src="https://share.hsforms.com/21qP-uDxJQ8iXOMPHL_T8Lgstvhu"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Agent Application Form"
              style={{ 
                border: 'none',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReadyToGetStarted;
