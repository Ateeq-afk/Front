"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination  } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { motion } from "framer-motion";
interface TrekItem {
  _id: string;
  urllink: string;
  testimage: string;
  testimagealt:string;
  name: string;
  amount: number;
  originalprice?: number; 
  badge?: string; 
}
interface TrekProps {
  trek: TrekItem[];
  uniqueId: string;
  name: string;
}
const getBadgeColor = (badge: string) => {
  const lowercaseBadge = badge.toLowerCase()
  if (lowercaseBadge === 'honeymoon special' || lowercaseBadge === 'romantic getaway') {
    return 'bg-red-500';
  } else if (lowercaseBadge === 'group') {
    return 'bg-yellow-500';
  } else if (lowercaseBadge === 'customized') {
    return 'bg-blue-500';
  } else {
    return 'bg-yellow-500';
  }
}
const calculateDiscountPercentage = (originalPrice: number, amount: number) => {
  if (!originalPrice || !amount) return 0; 
  const discount = ((originalPrice - amount) / originalPrice) * 100;
  return Math.round(discount)
}
const Trek: React.FC<TrekProps> = ({ trek, uniqueId, name }) => {
  return (
    <div className=" relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
            nextEl: `.swiper-but-next-${uniqueId}`,
            prevEl: `.swiper-but-prev-${uniqueId}`
        }}
        pagination={{
            el:  `.swiper-pagination-${uniqueId}`,
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-black"></span>';
            },
        }}
        modules={[ Navigation, Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
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
         {trek && trek.map((item) => (
   <SwiperSlide key={item._id}>
   <Link href={`${name}/${item.urllink}`} className="block"> 
     <div className="rounded-xl shadow-lg relative flex flex-col items-center justify-between transition duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 transform bg-black text-white p-4 h-[410px]">
       <div className="overflow-hidden relative rounded-xl h-72 w-full">
         <Image
           src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${item.testimage}`} 
           alt={item.testimagealt}
           objectFit="cover"
           layout="fill"
           className="transform transition-transform duration-300"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> 
       </div>
       {item.badge && (
                  <span className={`absolute top-0 left-0 uppercase text-xs p-1 m-2 rounded ${getBadgeColor(item.badge)}`}>
                    {item.badge}
                  </span>
                )}
{(item.originalprice && item.amount) && (
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
    className="absolute top-3 right-2 bg-yellow-500 text-black transform translate-x-2 -translate-y-2 rounded-tr-md rounded-bl-md p-1 shadow-md"
   
    style={{
      background: "linear-gradient(45deg, #ffd700, #ffae00)",
      textShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
    }}
  >
    FLAT {calculateDiscountPercentage(item.originalprice, item.amount)}% OFF
  </motion.div>
)}
       <div className="text-center py-4">
         <h4 className="px-2 text-lg mb-1">{item.name}</h4>
       <div className="flex justify-between mt-2 ">
       <p className="text-md pt-1 flex flex-row text-yellow-500 items-center mr-2 ml-4">
       {item.originalprice && (
    <p className="text-[16px] line-through text-white mr-2 " >
    ₹{item.originalprice}
    </p>
  )}     {
    item.amount &&  ( <div><FontAwesomeIcon icon={faIndianRupeeSign} className="pr-1"/>{item.amount} </div> )}</p> 
       <motion.button
               initial={{ backgroundColor: "#FBBF24", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
               transition={{ duration: 0.3 }}
                className="px-3 py-1  text-black font-semibold rounded-full border border-yellow-500 ">
           Book Now
         </motion.button>
       </div>
       </div>
     </div>
   </Link>
  </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 items-center">
    <button className={`swiper-but-prev swiper-but-prev-${uniqueId} flex items-center justify-center w-5 h-5 shadow-md rounded-full mr-1`}><FontAwesomeIcon icon={faArrowLeft} /></button> {/* Unicode left arrow */}
    <div className={`swiper-pagination swiper-pagination-${uniqueId}`}></div>
    <button className={`swiper-but-next swiper-but-next-${uniqueId} flex items-center justify-center w-5 h-5 shadow-md rounded-full ml-1`}><FontAwesomeIcon icon={faArrowRight} /></button> {/* Unicode right arrow */}
</div>
    </div>
  );
};
export default Trek;