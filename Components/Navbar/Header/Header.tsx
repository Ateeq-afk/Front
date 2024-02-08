'use client';
import React, { useState,useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from "../../../app/AuthContext"

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' }
};

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [animateTravelPass, setAnimateTravelPass] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // This will be true only on the client side
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTravelPass(true);
    }, 1); // slight delay to ensure this runs after the component mounts
    return () => clearTimeout(timer);
  }, []);

 useEffect(() => {
    // Function to check if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from propagating to other elements
    setIsOpen(prevState => !prevState);
  };
  // const placeholderImage =  '/about/user.png'
  // const userImageSrc = user?.photoURL || placeholderImage;
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-black text-white sm:p-1 z-50 fixed w-full"
        role="banner"
      >
        <div className="container mx-auto flex justify-between items-center py-2 pl-3 pr-1">
          <div className="flex-grow-4 flex flex-row float-left md:pl-10 pl-1 ">
          <div className="flex flex-row items-center space-x-4">
  <Link href='/'>
  <motion.div whileHover={{ scale: 1.1 }}>
        <Image src="/home/bplogo.jpg" alt="logo image" className="rounded-full mt-3" width={40} height={40} />
      </motion.div>
  </Link>
    <div className="flex flex-col items-center relative">
    <Link href='/'>
        <motion.div whileHover={{ scale: 1.05 }} className="text-[22px] font-semibold text-white">
          BACKPACKERS
        </motion.div>
      
  
      <div className="flex items-center absolute inset-x-0 bottom-[-10px] ">
            <div className="flex-1 h-0.5 bg-white"></div> {/* Left line */}
            <motion.div whileHover={{ scale: 1.05 }} className="text-[12px] font-semibold uppercase tracking-widest text-red-600 mx-[2px]">
              United
            </motion.div>
            <div className="flex-1 h-0.5 bg-white"></div> {/* Right line */}
          </div>
      </Link>
     
  </div>
</div>
          </div>
          <div className="hidden md:flex items-center space-x-4 mr-8 sm:space-x-6 md:space-x-8">
          {['Home', 'Destinations', 'Treks', 'Tours', 'Travel Pass', 'Contact Us'].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={link === 'Travel Pass' && animateTravelPass ? 'travel-pass-special-effect' : 'hover-effect'}
            >
            <Link href={link === 'Home' ? '/' : link === 'Contact Us' ? '/contact'  : link === 'Travel Pass' ? '/travel-pass'  : `/${link.toLowerCase()}`}>{ link}</Link>
            </motion.div>
          ))}

            {/* {['Home', 'Destinations', 'Treks', 'Tours', 'Travel Pass','Contact Us'].map((link, index) => (
              <motion.div
                key={link}
                        initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="hover-effect"
              >
                <Link href={link === 'Home' ? '/' : link === 'Contact Us' ? '/contact'  : link === 'Travel Pass' ? '/travel-pass'  : `/${link.toLowerCase()}`}>{ link}</Link>
              </motion.div>
            ))} */}
                  {/* {isClient  && user ? (
          // If user is logged in, show user image and dropdown
          <div className="relative" onMouseLeave={() => setShowDropdown(false)} >
          <Image   src={userImageSrc}   alt={user.name || 'Default User Name'} width={30} height={30} className="rounded-full cursor-pointer" onMouseEnter={() => setShowDropdown(true)} />
   
          {showDropdown && (
          <div className="absolute right-0  w-[150px] bg-white rounded-md shadow-lg py-1 px-2  z-50 " >
            <div className="block  text-xs text-gray-500  border-gray-300 border-b-[1px]">{user.name || 'User'}</div>
            <a href="#" className="block  text-sm text-gray-700 hover:bg-gray-100 mt-1">User Dashboard</a>
            <button onClick={logout} className="block  text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign out</button>
          </div>
                  )}
        </div>
        ) : ( */}
          {/* <div>
            <Link href='/login'>
              <motion.button
                initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-black py-1 px-4 rounded border border-yellow-500"
              >
                Sign In / Register
              </motion.button>
            </Link>
            </div> */}
        {/* )} */}
          </div>
          <div className="md:hidden flex items-center pr-2" onClick={toggleMenu}>
            <div className="hamburger-icon flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef} 
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            className="fixed bg-black h-screen w-64 z-40 top-0 right-0 flex flex-col space-y-2 py-8 pl-8 pt-20 md:hidden"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 }}
              }}
              className='text-white '
            >
              {['Home', 'Destinations', 'Treks', 'Tours','Travel Pass', 'Contact Us'].map((link, index) => (
                <motion.div key={link} variants={variants}    className={link === 'Travel Pass' && animateTravelPass ? 'travel-pass-special-effect' : 'hover-effect'}>
                  <Link href={link === 'Home' ? '/' : link === 'Contact Us' ? '/contact' :  link === 'Travel Pass' ? '/travel-pass'  :`/${link.toLowerCase()}`}>
                    <span className="text-white text-base">{ link}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            {/* <motion.div variants={variants}>
              <Link href='/login'>
                <motion.button
                  initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                  whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-black py-1 px-4 rounded border border-yellow-500"
                >
                  Sign In / Register
                </motion.button>
              </Link>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
};
export default Header;