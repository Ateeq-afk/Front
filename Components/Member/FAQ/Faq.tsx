'use client'
import { useState } from 'react';
interface FaqItem {
  title: string;
  content: string; 
}
interface FaqProps {
  items: FaqItem[];
}
const Faq: React.FC<FaqProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleItem = (index: number) => {
      if (index === openIndex) {
        setOpenIndex(null); 
      } else {
        setOpenIndex(index); 
      }
    };
    return (
        <div className="flex flex-col w-full">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex items-center w-full py-2 px-4 text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span
                className={`mr-2 h-6 w-6 rounded-full border flex justify-center items-center ${
                  openIndex === index ? 'border-transparent' : 'border-gray-400'
                }`}
              >
                {openIndex === index ? '-' : '+'}
              </span>
              <span className="flex-1 font-medium">{item.title}</span>
            </button>
            <div
              className={`${
                openIndex === index ? 'block' : 'hidden'
              } px-8 py-4`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    )
}
export default Faq;
