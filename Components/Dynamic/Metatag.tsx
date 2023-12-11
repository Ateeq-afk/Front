import { useEffect } from 'react';

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({ title, description, imageUrl }) => {
  useEffect(() => {
    // Function to set or update meta tag content
    const setMetaTagContent = (name: string, content: string, isProperty: boolean = false) => {
      let metaTag = document.querySelector(isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (isProperty) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Set the document title and og:title
    if (title) {
      document.title = title;
      setMetaTagContent('og:title', title, true);
    }

    // Set description and og:description meta tags
    if (description) {
      setMetaTagContent('description', description);
      setMetaTagContent('og:description', description, true);
    }

    // Set image URL in Open Graph meta tag
    if (imageUrl) {
      setMetaTagContent('og:image', imageUrl, true);
    }

    // Add similar logic for other meta tags, like Open Graph tags for type, URL, etc.
    // ...

  }, [title, description, imageUrl]);

  return null; // This component does not render anything
};

export default DynamicMetaTags;
