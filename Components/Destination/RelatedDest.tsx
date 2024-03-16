import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
const RelatedDestinations = () => {
  const destinations = [
    { name: 'Wayanad', image: '/home/KASHMIR.jpg' },
    { name: 'Ooty', image: '/home/Chikmagalur.webp' },
    { name: 'Munnar', image: '/home/Goa.webp' },
    { name: 'Kodaikanal', image: '/home/MUNAR.jpg' },
    { name: 'Coorg', image: '/home/Coorg.jpg' },
    { name: 'Chikamagalur', image: '/home/Kodaikanal.webp' },
  ];
  return (
    <div className="mx-auto pb-0 md:py-10 py-6">
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
              initialSlide: 20
            },
            1300:{
                slidesPerView: 5,
                initialSlide: 20
            }
          }}
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  rounded-lg">
              <div className="relative overflow-hidden rounded-lg md:h-48 h-32">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center md:text-xl text-sm font-semibold text-white">{dest.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default RelatedDestinations;
