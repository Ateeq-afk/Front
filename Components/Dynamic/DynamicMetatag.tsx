"use client"
import { useEffect } from 'react';

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({ title, description, imageUrl = 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/image.png', url }) => {
  useEffect(() => {
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

    // Set the site name in Open Graph meta tag
    setMetaTagContent('og:site_name', 'Backpackers United', true);

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

    // Set the canonical URL in Open Graph meta tag
    if (url) {
      setMetaTagContent('og:url', url, true);
    }

    // The site name is static and doesn't need to be in the dependency array,
    // but it's here to show that it would re-run if you had dynamic site names.
  }, [title, description, imageUrl, url]);

  return null; // This component does not render anything
};

export default DynamicMetaTags;
