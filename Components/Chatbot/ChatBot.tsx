"use client"
import { IoIosChatbubbles } from 'react-icons/io';
import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '../Book/EnquiryForm';
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';
//   const handleShareOnWhatsApp = () => {
//     const url = 'https://api.whatsapp.com/send?text=Your%20message%20here';
//     window.open(url, '_blank');
//   };
const toggleMenu = () => {
    setIsOpen(false);
  };
  const getWhatsAppShareLink = () => {
    const message = "Get pumped for our next adventure! 🏞️ Backpackers United has your itinerary all mapped out: " + currentPageUrl +
                   "\nCan't wait to embark? Share this with your friends and let the countdown begin! ⏳🎒 #BackpackersUnited";
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };
  const handleExecutiveChat = () => {
    const whatsappUrl = 'https://wa.me/+918310180609';
    window.open(whatsappUrl, '_blank');
  };
  // Define motion variants for animation
  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };
  return (
    <>
      <div className="fixed bottom-20 right-2 md:bottom-4 md:right-4 flex flex-col items-end z-30">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mb-2 space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.button
                className="bg-white border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg"
                onClick={() => setShowEnquiry(true)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaPhoneAlt className="text-blue-500" />
                <span>Request A Call Back</span>
              </motion.button>
              <motion.button
                className="bg-white border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg"
                onClick={handleExecutiveChat}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaWhatsapp className="text-green-500" />
                <span>Chat With Our Executive</span>
              </motion.button>
              <div>
              <a href={getWhatsAppShareLink()} target="_blank" rel="noopener noreferrer" > <motion.button 
                className="bg-white border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                  <FaShareAlt className="text-black" />
                <span>Share</span>
               
              </motion.button> </a> 
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className="bg-yellow-500 p-4 rounded-full shadow-lg text-dark-800"
          onClick={() => setIsOpen(!isOpen)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <IoIosChatbubbles className="text-2xl text-black" />
        </motion.button>
      </div>
      {showEnquiry && (
       <EnquiryForm onClose={() => setShowEnquiry(false)} source={currentPageUrl} />
      )}
    </>
  );
};
export default ChatBot;