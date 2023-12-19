import React, { useEffect } from 'react';

interface DynamicStructuredDataProps {
  jsonLdData: object; // Structured data in JSON-LD format
}

const DynamicStructuredData: React.FC<DynamicStructuredDataProps> = ({ jsonLdData }) => {
  useEffect(() => {
    // Function to inject JSON-LD script tag
    const injectJsonLd = (jsonLdObject: object) => {
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.textContent = JSON.stringify(jsonLdObject);
      scriptTag.id = 'json-ld'; // An ID to identify the tag
      document.head.appendChild(scriptTag);
    };

    // Inject the JSON-LD data
    injectJsonLd(jsonLdData);

    // Cleanup function to remove the script tag
    return () => {
      const existingScriptTag = document.getElementById('json-ld');
      if (existingScriptTag) {
        document.head.removeChild(existingScriptTag);
      }
    };
  }, [jsonLdData]); // Run the effect when jsonLdData changes

  return null; // This component does not render anything
};

export default DynamicStructuredData;
