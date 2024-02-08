'use client'
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqItems: FAQItem[];
}

const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqItems = [] }) => {
    // Default FAQs if faqItems is not present
    const defaultFAQs: FAQItem[] = [
      {
        question: "What is the number of participants on a trip?",
        answer: "For our tours, we typically host 12-20 travelers in a single batch. If the number of travelers exceeds this range, we organize them into multiple batches for a better experience. For trekking adventures, our groups usually consist of 20-30 travelers per batch, with the possibility of slightly larger groups during long weekends."
      },
      {
        question: "Do your trips have any age limitations?",
        answer: "Yes, we have an age restriction in place, requiring participants to be 18 years or older. However, if guardians or parents are accompanying the group, they are welcome to bring their children along for the trek or tour."
      },
      {
        question: "How can I reserve my slot?",
        answer: "You can directly reserve your slots by booking on the website, please ensure proper dates are selected before confirming your booking."
      },
      {
        question: "Is it safe for Women travelers?",
        answer: " Safety and Security Guidelines are followed at all times, and it is our topmost priority. We have certified trek leads (Male/Female) accompanying the participants at all times and our stay follows well-rounded safety measures."
      },
      {
        question: "What payment options do I have?",
        answer: "We have multiple payment options on the website that you can refer to."
      }
    ];
  
    // Use default FAQs if faqItems is not present
    const finalFAQs = faqItems.length > 0 ? faqItems : defaultFAQs;
  
  // Generate the structured data object
  const generateFAQSchema = () => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [] as {
        '@type': string;
        name: string;
        acceptedAnswer: {
          '@type': string;
          text: string;
        };
      }[],
    };

    finalFAQs.forEach((faq, index) => {
      faqSchema.mainEntity.push({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      });
    });

    return JSON.stringify(faqSchema);
  };

  // Create a script element and set its content to the structured data
  const createScriptElement = () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = generateFAQSchema();
    return script;
  };

  // Append the script element to the document's head on component mount
  React.useEffect(() => {
    const script = createScriptElement();
    document.head.appendChild(script);
    // Cleanup function to remove the script element on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // No need to render anything in the component
};

export default FAQStructuredData;
