'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
const destinations = [
    {
      href: '/destinations/gokarna',
      src: '/about/about.jpg',
      alt: 'Delicious Dosa',
      mainText: 'Explore Traditional Markets',
      secondaryText: 'Gokarna',
    },
    {
      href: '/destinations/mysore',
      src: '/about/holi.webp',
      alt: 'Mysore Silk',
      mainText: 'Discover Silk and Spices',
      secondaryText: 'Mysore',
    },
    {
      href: '/destinations/jaipur',
      src: '/about/tour.jpeg',
      alt: 'Traditional Jewelry',
      mainText: 'Find Handcrafted Jewels',
      secondaryText: 'Jaipur',
    },
    {
      href: '/destinations/goa',
      src: '/about/trek.png',
      alt: 'Goan Cashews',
      mainText: 'Taste Local Delicacies',
      secondaryText: 'Goa',
    },
    {
      href: '/destinations/kochi',
      src: '/about/user.png',
      alt: 'Kochi Spices',
      mainText: 'Spice Up Your Life',
      secondaryText: 'Kochi',
    },
    {
      href: '/destinations/leh',
      src: '/about/yogesh.jpg',
      alt: 'Leh Woolens',
      mainText: 'Warm Up with Woolens',
      secondaryText: 'Leh',
    },
    {
      href: '/destinations/agra',
      src: '/about/overview.png',
      alt: 'Agra Marble',
      mainText: 'Marvel at Marble Crafts',
      secondaryText: 'Agra',
    },
    {
      href: '/destinations/udaipur',
      src: '/about/mount.jpg',
      alt: 'Udaipur Paintings',
      mainText: 'Artistic Explorations',
      secondaryText: 'Udaipur',
    },
    // Add more destinations as needed
  ];
  
const DestShop = () => {
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
             {destinations.map((dest, index) => (
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
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 p-3 md:p-5">
                  <div className="text-yellow-500 md:text-lg text-sm">{dest.secondaryText}</div>
                  <div className="text-white  md:text-xl text-xs">{dest.mainText}</div>
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
