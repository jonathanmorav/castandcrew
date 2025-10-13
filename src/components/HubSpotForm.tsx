import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

const HubSpotForm = ({ portalId, formId, region = "na1" }: HubSpotFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: formRef.current
        });
      }
    };

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [portalId, formId, region]);

  return <div ref={formRef} className="hubspot-form-container" />;
};

export default HubSpotForm;
