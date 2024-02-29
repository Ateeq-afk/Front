"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination,FreeMode  } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { motion } from "framer-motion";
type DestinationItem = {
  title: string;
  location?: string;
  img: string;
  url: string;
  badge?: string; 
  price: number;
  originalprice?: number; 
};
interface TrekSliderProps {
  destination: DestinationItem[];
  sliderId: string;
}
const getBadgeColor = (badge: string) => {
  if (badge === 'Honeymoon Special' || badge === 'Romantic Getaway') {
    return 'bg-red-500'; 
  } else if(badge === "Group") {
    return 'bg-yellow-500'; 
  } else if(badge === "Customized") {
    return 'bg-blue-500'; 
  }else{
    return 'bg-yellow-500'; 
  }
}
const calculateDiscountPercentage = (originalPrice: number, price: number) => {
  if (!originalPrice || !price) return 0; 
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(discount); 
}
const TrekSlider: React.FC<TrekSliderProps> = ({destination, sliderId }) => {
  const nextButtonClass = `swiper-button-next-${sliderId}`;
  const prevButtonClass = `swiper-button-prev-${sliderId}`;
  const paginationClass = `swiper-pagination-${sliderId}`;
  return (
    <div className="relative ">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: `.${nextButtonClass}`,
          prevEl: `.${prevButtonClass}`,
        }}
        pagination={{
          el: `.${paginationClass}`,
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-black"></span>';
            },
        }}
        freeMode={{ enabled: true, minimumVelocity: 0.1 }}
        modules={[ Navigation, Pagination,FreeMode]}
        breakpoints={{
          100: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
         {destination.map((item, idx) => (
   <SwiperSlide key={idx}>
<Link href={`${item.url}`} className="block"> 
     <div className="rounded-xl shadow-lg relative flex flex-col items-center justify-between transition duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 transform bg-black text-white md:p-4 p-2 md:h-[400px] h-[320px]">
       <div className="overflow-hidden relative rounded-xl md:h-60 h-40 w-full">
         <Image
           src={item.img}
           alt={item.title}
           objectFit="cover"
           layout="fill"
           className="transform transition-transform duration-300"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> {/* Gradient overlay */}
       </div>
                {(item.originalprice && item.price) && (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
    transition={{
      scale: { delay: 0.5, duration: 0.2 },
      opacity: { delay: 0.5, duration: 0.1 },
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    whileHover={{ scale: 1.05 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className="absolute md:top-3 top-1 md:right-2 right-1 bg-yellow-500 text-black transform translate-x-2 -translate-y-2 rounded-tr-md rounded-bl-md p-1 shadow-md md:text-base text-xs"
   
    style={{
      background: "linear-gradient(45deg, #ffd700, #ffae00)",
      textShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
    }}
  >
    FLAT {calculateDiscountPercentage(item.originalprice, item.price)}% OFF
  </motion.div>
)}
       <div className="p-4 pb-0 text-center">
  <h4 className="md:text-lg text-sm mb-1">{item.title}</h4>
  {item.location && <p className="md:text-sm  text-sm mb-2">{item.location}</p> }
       </div>
       <div className="flex flex-row justify-between items-center md:mt-2 md:space-x-4 space-x-2"> {/* Adjusted margin-top and space between price and button */}
       <div className="flex flex-col items-start mb-2 sm:mb-0">
  <p className="text-xs text-gray-400">Starting from</p>
  {item.originalprice && (
    <p className="md:text-[16px] text-[12px] line-through " >
      INR {item.originalprice}
    </p>
  )}
  <p className="md:text-[16px] text-[12px] font-bold text-yellow-500" >INR {item.price}</p>
</div>
  <button className="md:px-4 md:py-2 px-2 py-1 md:text-[16px] text-[12px]  bg-yellow-500 text-black font-semibold rounded-full border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300"> {/* Adjusted padding and hover effect for button */}
    Book Now
  </button>   
</div>
</div>
</Link>
  </SwiperSlide>

        ))}
      </Swiper>
      <div className="flex justify-center mt-4 items-center">
  <button className={`${prevButtonClass} flex items-center justify-center w-5 h-5 shadow-md rounded-full mr-1 text-white`}><FontAwesomeIcon icon={faArrowLeft} /></button>
  <div className={`${paginationClass}`}></div>
  <button className={`${nextButtonClass} flex items-center justify-center w-5 h-5 shadow-md rounded-full ml-1 text-white`}><FontAwesomeIcon icon={faArrowRight} /></button>
</div>
    </div>
  );
};
export default TrekSlider;