import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faShareNodes, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const copyToClipboard = () => {
    copy(url);
    alert('Link copied to clipboard!');
    toggleMenu();
  };

  const getWhatsAppShareLink = () => {
    const message = "Get pumped for our next adventure! 🏞️ Backpackers United has your itinerary all mapped out: " + url +
                   "\nCan't wait to embark? Share this with your friends and let the countdown begin! ⏳🎒 #BackpackersUnited";
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };
  
  // const getWhatsAppShareLink = () => {
  //   return `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
  // };
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove the event listener after setting the visibility
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`fixed md:bottom-4 md:right-10 right-4 bottom-4 z-20 ${isVisible ? 'visible' : 'hidden'}`}>
      <button onClick={toggleMenu} className="text-yellow-500 font-bold text-lg rounded-full bg-black p-2 px-4 relative">
        <FontAwesomeIcon icon={faShareNodes} />
        <button onClick={toggleVisibility} className="absolute text-sm font-semibold my-1 rounded-full bg-black top-[-15px] right-[-6px] py-1 px-2">
            <FontAwesomeIcon icon={faTimes} /> 
          </button>
      </button>

      {isMenuOpen && (
        <div className="mt-2 p-2 bg-white text-black rounded-lg shadow-lg">
          <button onClick={copyToClipboard} className="block text-sm font-semibold my-1">
            <FontAwesomeIcon icon={faCopy} /> Copy Link
          </button>
          <a href={getWhatsAppShareLink()} target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold my-1">
            <FontAwesomeIcon icon={faWhatsapp} className='text-green-700 font-bold' /> WhatsApp
          </a>
      
        </div>
      )}
    </div>
  );
};

export default ShareButton;
