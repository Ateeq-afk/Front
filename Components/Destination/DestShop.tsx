'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
 
interface Destination {
    href: string;
    src: string;
    alt: string;
    secondaryText: string;
  }
  const DestShop: React.FC<{ destinations: Destination[] }> = ({ destinations }) => {
  return (
    <div >
               <Swiper
      spaceBetween={20}
      slidesPerView={2.3}
      initialSlide= {0}
      freeMode={{ enabled: true, minimumVelocity: 0.1 }}
      modules={[FreeMode]}
      className="destslidershop"
      breakpoints={{
        500: {
            slidesPerView: 3.3,
            initialSlide: 0
          },
        1000: {
          slidesPerView: 4.5,
          initialSlide: 0
        },
        1300:{
            slidesPerView: 5.5,
            initialSlide: 0
        }
      }}
    >
             {destinations && Array.isArray(destinations) &&  destinations.map((dest, index) => (
          <SwiperSlide key={index} className="py-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl w-full md:h-[350px] h-[200px] lg:h-[300px]"
            >
              <Link href={dest.href}>
                <Image
                  src={dest.src}
                  alt={dest.alt}
                  layout="fill"
                  objectFit="cover"
                />
         <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)' }}></div>


                {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
                <div className="absolute bottom-0 p-3 md:p-5">
                  <div className="text-yellow-500 md:text-lg text-sm font-bold">{dest.secondaryText}</div>
                  {/* <div className="text-white  md:text-xl text-xs">{dest.mainText}</div> */}
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}

export default DestShop
