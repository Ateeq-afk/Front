"use client"
import { useEffect, useRef, useState,FC  } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

interface Product {
  name: string;
  testimage: string;
  testimagealt:string;
  fromamount: number;
  over: string[];
  badge?: string;
  originalprice?: number; 
  urllink: string;
}
interface Blog {
  name: string;
  blogs: {
    image: string;
    imagealt: string;
  }[];
  over: string[];
  urllink: string;
}
interface Destination {
  name: string;
  over: string[];
  metatitle: String;
  metades: String;
  coverimage: string;
  products: Product[];
  blogs: Blog[];
}
interface DestinationProps {
  destination: Destination;
}
  const getBadgeColor = (badge: string) => {
    const lowercaseBadge = badge.toLowerCase(); 
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
const Dest: React.FC<DestinationProps> = ({ destination }) => {
  
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        if (parallaxRef.current) {
          parallaxRef.current.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    if (!destination) {
        return (
          <div>
            <div>Loading...</div>
          </div>
        );
    }
  return (
    <div className="bg-black font-jost text-white">
          <Header />
          <div>
          {destination?.name && (
        <div className="bg-black text-white md:p-10 p-2">
  <div className="flex flex-col items-start">
    <div className="flex items-center md:mb-8 pt-10">
      <div className="bg-yellow-500 w-1 h-16 mr-8 self-center md:block hidden"></div>
      <h1 className="md:text-7xl text-5xl" >
      {destination?.name}
      </h1>
      <span className="text-yellow-500 text-9xl inline-block align-middle relative" style={{top: '-0.2em'}}>.</span>
    </div>
    <div className="md:ml-9 ml-2">
      {destination && destination.over && destination.over.map((over, index) => (
        <div key={index} className="mt-2">
          <p  className={`text-gray-300 ${!readMore ? 'line-clamp-3' : ''}`} >
            {over}
          </p>
          {over.split(' ').length > 50 && ( // Assuming 50 words is roughly 3 lines
            <button
              onClick={toggleReadMore}
              className="text-yellow-500  transition-colors cursor-pointer text-sm mt-2"
            >
              {readMore ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
)}
  <div className="pt-10 pb-10"> {/* Reduced top padding */}
  <div className="text-center mb-4"></div>
  <div className='h-[200px] md:h-[400px]'>
  <div
    ref={parallaxRef}
    className="bg-center bg-no-repeat bg-cover md:h-[400px] h-[800px] w-full md:bg-fixed overflow-hidden"  // Adjust the height as needed
    style={{
      backgroundImage: `url('https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${destination?.coverimage}')`,
    }}
  ></div>
</div>
  <div className="pt-5"></div>
</div>
      <div className="text-center">
  <h2 className="text-3xl font-bold mb-6">Getaway to  {destination?.name} </h2>
</div>
{destination && destination.products && destination.products.map((products, index) => (
   <Link href={`/tour/${products?.urllink}`} >     <div className="bg-black md:p-10 p-4 text-white" key={index}>
  <div className="relative flex flex-col  gap-2 mx-2 ">
    <div className="relative md:w-[50%] w-[100%] md:h-[400px] h-[300px] ">
      <Image
        src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${products?.testimage}`}
        alt={products?.testimagealt}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
         {products?.badge && (
                  <span className={`absolute top-0 left-[-20px] uppercase px-4 py-1 text-xs p-1 m-2 rounded ${getBadgeColor(products.badge)}`}>
                    {products.badge}
                  </span>
                )}
    </div>
    <motion.div
      className="md:absolute md:left-[45%] md:top-[18%] z-10 md:p-6 md:w-[55%]  bg-black rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4">{products?.name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-4">
        {products?.over[0]}
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-400 font-medium">
          <p>Starting from</p>
          <div className='flex flex-row'>
          {products?.originalprice && (
    <p className="text-[16px] line-through text-white mr-2 " >

    <FontAwesomeIcon icon={faIndianRupeeSign} className="pr-1"/>{products?.originalprice}
    </p>
  )}
          <p className="text-yellow-400 font-bold text-base">₹{products?.fromamount}</p>
          </div>
        </div>
       <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
          BOOK NOW ➔
        </button>
      </div>
    </motion.div>
  </div>
  </div>
  </Link>
))}
</div>
<Footer />
    </div>
  )
}
export default Dest
