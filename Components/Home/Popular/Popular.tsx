'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Popular = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="container mx-auto md:p-10 p-5 px-0 max-w-screen-xl"
    >
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-3xl font-bold text-yellow-500 text-center cursor-pointer"
      >
        Top Destinations
      </motion.div>
      <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[20px]" />
      </div>
      <div className="grid md:grid-cols-6 grid-col-1 gap-4 md:p-10 md:pb-0 pb-0 p-0 pt-5">
         <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-2 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[500px] h-[155px]">  <Link href="/destinations/wayanad" >   
          <Image
            src='/home/Wayanad.webp'
            alt="WAYANAD"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">WAYANAD
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" />
          </div>
          </Link>
        </motion.div>
    <div className="grid grid-rows-2 gap-4 col-span-2" >
    <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[240px] h-[155px]"
          > <Link href="/destinations/gokarna" >  
            <Image
              src='/home/Gokarna.webp'
              alt="GOKARNA"
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">GOKARNA
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[240px] h-[155px]"
          > <Link href="/destinations/srinagar" >  
            <Image
              src='/home/Kashmir.webp'
              alt="KASHMIR"
              layout="fill"
              objectFit="cover"
            />
           <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">SRINAGAR
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
        </motion.div>
    </div>
    <div className="grid md:grid-rows-3 grid-row-5 gap-4 col-span-2" >
    <motion.div
            whileHover={{ scale: 1.05 }}
            className="row-span-2 md:row-span-1 relative overflow-hidden w-full rounded-lg md:h-[155px] h-[155px]"
          > <Link href="/destinations/kodaikanal" >  
            <Image
              src='/home/Kodaikanal.webp'
              alt="KODAIKANAL"
              layout="fill"
              objectFit="cover"
            />
          <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">KODAIKANAL
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
       </motion.div>
       <motion.div
            whileHover={{ scale: 1.05 }}
            className="row-span-2 md:row-span-1  relative overflow-hidden w-full rounded-lg md:h-[155px] h-[155px]"
          > <Link href="/destinations/munnar" >  
            <Image
              src='/home/Munar.webp'
              alt="MUNAR"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">MUNNAR
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-[155px] h-[155px] row-span-1"
          > <Link href="/destinations/chikmagalur" >  
            <Image
              src='/home/Chikmagalur.webp'
              alt="CHIKAMAGALUR"
              layout="fill"
              objectFit="cover"
            />
          <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">CHIKMAGALUR
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
        </motion.div>
    </div>
</div>
<div className="flex md:mx-10 mx-0 gap-4 pt-4">
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-40 h-52"
          > <Link href="/destinations/goa" >  
            <Image
              src='/home/Goa.webp'
              alt="GOA"
              layout="fill"
              objectFit="cover"
            />
       <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">GOA
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
      </motion.div>
      </div>
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-40 h-52"
          > <Link href="/destinations/thailand" >  
            <Image
              src='/home/ANDAMAN.jpg'
              alt="ANDAMAN"
              layout="fill"
              objectFit="cover"
            />
        <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">THAILAND
          <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" /></div>
          </Link>
      </motion.div>
    </div>
    </div>
      <div className="mt-4 text-right md:text-xl text-sm">
        <Link href="/destinations">
          <span className="text-yellow-500 hover:underline flex flex-row justify-end">
            All Destinations <FontAwesomeIcon icon={faArrowRight} className='pt-1 pl-1' />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};
export default Popular;