'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';


interface Review {
  rating: number;
}
interface Review {
  author_name: string;
  profile_photo_url: string;
  text: string;
  rating: number;
}
const TestimonialSection = () => {
  const [googleReviews, setGoogleReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // const placeId = 'ChIJq4TTOeYVrjsRpIFDsBNjFqQ';
        // const googleApiKey = 'AIzaSyBfYxAN1KegvpCKE-Thil_9LF8ELlkKigE'; // Replace with your actual API key
        const response = await fetch('https://launch-api1.vercel.app/fetch-reviews');
        const data = await response.json(); 
        const filteredReviews = data.result.reviews.filter((review: Review)=> review.rating >= 4);
        setGoogleReviews(filteredReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchGoogleReviews();

    // Existing scroll effect code
    // ...
  }, []);

 

     return (
      <div>

<motion.div
  initial={{ backgroundColor: 'white' }}
      animate={{ backgroundColor: 'black' }}
      transition={{ duration: 1 }}
      className=" md:mt-6 md:mx-6"
    >
      <div className="flex items-center justify-center  text-white font-semibold text-2xl md:text-4xl rounded-lg">
  <div className="text-blue-500 rounded">G</div>
  <div className="text-red-500  rounded">o</div>
  <div className="text-yellow-500 rounded">o</div>
  <div className="text-blue-500 rounded">g</div>
  <div className="text-green-500  rounded">l</div>
  <div className="text-red-500  rounded">e</div>
  <span className=" font-semibold ml-2 text-yellow-500">Reviews</span>
</div>

<div className="flex justify-center pt-2 md:pt-4 mb-4">
        <hr className="border-t-2 border-white md:w-[30PX] w-[20px]" />
      </div>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          // slideShadows: true,
        }}
        pagination={ { el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipergot"
      >
        {googleReviews.map((test,index) => (
        <SwiperSlide key={index}>
        <div className='relative pt-10'>
        <div className="text-center bg-gray-900 md:pt-12 pt-8 pb-8 px-3 md:h-[19rem] h-[18rem] rounded-lg shadow-lg"> {/* Add padding to the top */}
  <div className="absolute top-[0px] left-1/2 transform -translate-x-1/2 md:w-20 md:h-20 w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full shadow-lg z-10"> {/* Center the image */}
    <Image
      src={test.profile_photo_url}
      alt={test.author_name}
      className="object-cover w-full h-full"
      objectFit='cover'
      layout='fill'
    />
  </div>
  <h3 className="md:text-lg text-base font-bold text-gray-100">{test.author_name}</h3>
  {/* <p className="text-gray-500">Chicago, IL</p> */}
  <div className="text-yellow-500 flex justify-center">
              {Array.from({ length: test.rating }, (_, index) => (
                <FontAwesomeIcon icon={faStar} key={index} className='text-xs' />
              ))}
            </div>
             <div className="md:mt-4 mt-2 md:text-[15px] text-[13px] text-gray-300">
            "{test.text}"
        </div>

</div>
</div>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </motion.div>
    </div>
  );
};
export default TestimonialSection;