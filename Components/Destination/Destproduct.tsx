"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Destproduct = () => {
    const tourData = [
        {
            "id": 1,
            "imageSrc": "/destination/bali.jpeg",
            "imageAlt": "Gokarna Adventure Tour",
            "discount": "UPTO 30% OFF",
            "title": "Gokarna - Dandeli - Murudeshwar Adventure Tour",
            "duration": "3 Days / 2 Nights",
            "price": "From ₹ 1,800",
            "buttonText": "Book Now"
          },
          {
            "id": 2,
            "imageSrc": "/destination/dubai.jpg",
            "imageAlt": "Kerala Backwaters",
            "discount": "UPTO 25% OFF",
            "title": "Western Ghats Wanderlust: Coorg, Wayanad & Ooty ",
            "duration": "4 Days / 3 Nights",
            "price": "From ₹ 2,500",
            "buttonText": "Book Now"
          },
          {
            "id": 3,
            "imageSrc":"/destination/maldives.jpg",
            "imageAlt": "Rajasthan Heritage Tour",
            "discount": "UPTO 20% OFF",
            "title": "Rajasthan Heritage Experience",
            "duration": "5 Days / 4 Nights",
            "price": "From ₹ 3,200",
            "buttonText": "Book Now"
          },
          {
            "id": 4,
            "imageSrc": "/destination/MUNNAR.jpg",
            "imageAlt": "Goa Beaches",
            "discount": "UPTO 15% OFF",
            "title": "Goa Beach Holiday",
            "duration": "2 Days / 3 Nights",
            "price": "From ₹ 4,500",
            "buttonText": "Book Now"
          },
          {
            "id": 5,
            "imageSrc": "/home/blog1.jpg",
            "imageAlt": "Himachal Pradesh Hills",
            "discount": "UPTO 10% OFF",
            "title": "Himachal Pradesh Hill Station Tour",
            "duration": "6 Days / 5 Nights",
            "price": "From ₹ 5,800",
            "buttonText": "Book Now"
          },
          {
            "id": 6,
            "imageSrc": "/home/blog1.jpg",
            "imageAlt": "Ladakh Adventure",
            "discount": "UPTO 30% OFF",
            "title": "Ladakh Bike Adventure",
            "duration": "7 Days / 6 Nights",
            "price": "From ₹ 18,000",
            "buttonText": "Book Now"
          },
          {
            "id": 7,
            "imageSrc": "/home/blog1.jpg",
            "imageAlt": "North East India",
            "discount": "UPTO 22% OFF",
            "title": "North East India Exploration",
            "duration": "8 Days / 7 Nights",
            "price": "From ₹ 9,700",
            "buttonText": "Book Now"
          },
          {
            "id": 8,
            "imageSrc": "/home/blog1.jpg",
            "imageAlt": "Andaman and Nicobar Islands",
            "discount": "UPTO 18% OFF",
            "title": "Andaman and Nicobar Islands Retreat",
            "duration": "5 Days / 4 Nights",
            "price": "From ₹ 12,000",
            "buttonText": "Book Now"
          }
        ]
  return (
    <div className='bg-black text-white '>
        <div className='mx-5'>
  
       <Swiper
      spaceBetween={0}
      slidesPerView={1}
      initialSlide= {0}
      navigation={true} 
      freeMode={{ enabled: true, minimumVelocity: 0.1 }}
      modules={[Navigation,FreeMode]}
      className="destslider"
      breakpoints={{
        // when window width is <= 640px
        500: {
            slidesPerView: 2,
            initialSlide: 0
          },
        1000: {
          slidesPerView: 3.5,
          initialSlide: 0
        },
        1300:{
            slidesPerView: 4,
            initialSlide: 0
        }
      }}
    >
           {tourData.map(tour => (
      <SwiperSlide>
   
        <div key={tour.id} className="relative h-[350px] flex justify-center ">
          {/* ... rest of the card structure */}
          <div className='relative w-[330px] h-[230px]'>
            <Image
              src={tour.imageSrc}
              alt={tour.imageAlt}
              className="rounded-xl"
              objectFit='cover'
              layout='fill'
            />
          </div>
          {/* ... */}
          <div className="absolute top-10 left-0 transform -translate-y-1/2 bg-gray-200 font-bold text-black px-4 py-1 rounded-br-lg ">
            {tour.discount}
          </div>
          <div className="absolute px-4 py-3 bg-gray-200 text-black top-[170px] left-8 min-h-[140px] rounded-xl flex justify-between flex-col">
            <div className="flex justify-between flex-col">
              <div>
                <h3 className="text-xl font-semibold w-[260px] line-clamp-2">{tour.title}</h3>
                <p className="text-gray-500  text-sm">{tour.duration}</p>
              </div>
            </div>
            <div>
            
              <div className='flex justify-between flex-row items-center mt-2'> 
                <p className="font-bold text-xl">{tour.price}</p>
                <motion.button
                  initial=  {{ backgroundColor: "#FBBF24", color: "#000" }} 
                  whileHover= {{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="border border-yellow-500 h-8 w-[110px] rounded-md transition-colors font-bold"
                >
                  {tour.buttonText}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        </SwiperSlide>
        ))}
        
      {/* ... additional slides */}
    </Swiper>

<div>
    
</div>
</div>
     </div>
  )
}

export default Destproduct
