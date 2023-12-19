import React, { useEffect } from 'react';

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
}

const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    // Function to set or update meta tag content
    const setMetaTagContent = (name: string, content: string) => {
      let metaTag = document.head.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Set the document title
    if (title) {
      document.title = title;
    }

    // Set description meta tag
    if (description) {
      setMetaTagContent('description', description);
    }

    // Add similar logic for other meta tags if needed
    // ...

  }, [title, description]); // Effect dependencies

  return null; // This component does not render anything
};

export default DynamicMetaTags;
