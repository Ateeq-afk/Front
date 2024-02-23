import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
const RelatedDestinations = () => {
  const destinations = [
    { name: 'Wayanad', image: '/home/KASHMIR.jpg' },
    { name: 'Chikamagalur', image: '/home/Chikmagalur.webp' },
    { name: 'Munnar', image: '/home/Goa.webp' },
    { name: 'Ooty', image: '/home/MUNAR.jpg' },
    { name: 'Coorg', image: '/home/Coorg.jpg' },
    { name: 'Kodaikanal', image: '/home/Kodaikanal.webp' },
  ];
  return (
    <div className="mx-auto p-5 md:p-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        freeMode={{ enabled: true, minimumVelocity: 0.1 }}
        modules={[FreeMode]}
        className="relatedslider"
        breakpoints={{
            500: {
                slidesPerView: 3,
                initialSlide: 0
              },
            1000: {
              slidesPerView: 4,
              initialSlide: 0
            },
            1300:{
                slidesPerView: 5,
                initialSlide: 0
            }
          }}
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  rounded-lg">
              <div className="relative overflow-hidden rounded-lg h-48">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-xl font-semibold text-white">{dest.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default RelatedDestinations;
