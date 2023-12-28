"use client"
import { useEffect, useRef, useState,FC  } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
import Link from 'next/link';



interface Product {
  name: string;
  testimage: string;

  // ... other properties of Product
  fromamount: number;
  over: string[];
  urllink: string;
}

interface Blog {
  name: string;
  blogs: {
    image: string;
    imagealt: string;
    // ... other properties of individual blog item
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
interface DestProps {
    name: string; // Added explicit type for 'name'
  }

const Dest: React.FC<DestProps> = ({ name }) => {
      
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [readMore, setReadMore] = useState(false);
  // Create a ref for the paragraph

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to scroll to the paragraph when readMore is set to false

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
    

    // const name = params.name
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://launch-api1.vercel.app/dest/${name}`);
        const data = await response.json();
        console.log("ata",data)
        setDestination(data);
      };
  
      if (name) {
        fetchData();
      }
    }, [name])
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
        <div className="bg-black text-white md:p-10 p-2">
  <div className="flex flex-col items-start">
    <div className="flex items-center md:mb-8 pt-10">
      <div className="bg-yellow-500 w-1 h-16 mr-8 self-center md:block hidden"></div>
      <h1 className="text-7xl inline-block align-middle"  >
      {destination.name}
        <span className="text-yellow-500 text-9xl inline-block align-middle relative" style={{top: '-0.2em'}}>.</span>
      </h1>
     
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
  {/* Main content */}
  <div className="pt-10 pb-10"> {/* Reduced top padding */}
  <div className="text-center mb-4"></div>
  <div className='h-[200px] md:h-[400px]'>
  <div
    ref={parallaxRef}
    className="bg-center bg-no-repeat bg-cover md:h-[400px] h-[800px] w-full md:bg-fixed overflow-hidden"  // Adjust the height as needed
    style={{
      backgroundImage: `url('https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${destination.coverimage}')`,
      // backgroundAttachment: 'fixed'
    }}
  ></div>
</div>
  <div className="pt-5"></div>
</div>
      {/* Updated Hostels Section */}
      <div className="text-center">
  <h2 className="text-3xl font-bold mb-6">Getaway to  {destination.name} </h2>
</div>
{destination && destination.products && destination.products.map((products, index) => (
   <Link href={`/tour/${products?.urllink}`} >     <div className="bg-black md:p-10 p-4 text-white" key={index}>
  <div className="relative flex flex-col  gap-2 mx-2 ">
    <div className="relative md:w-[50%] w-[100%] md:h-[400px] h-[300px] ">
      <Image
        src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${products?.testimage}`}
        alt={products?.name}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <motion.div
      className="md:absolute md:left-[45%] md:top-[18%] z-10 md:p-6 md:w-[55%]  bg-black rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{products?.name}</h2>
      <p className="text-gray-400 mb-4 line-clamp-4">
        {products?.over[0]}
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-400 font-medium">
          <p>Starting from</p>
          <p className="text-yellow-400 font-bold text-xl">₹{products?.fromamount}</p>
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

      <div className="bg-black p-10 text-white">
        <div>
    <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Adventurer's Digest</h2>
        <p className="text-gray-400">Curated guides for every traveler's need.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {destination?.blogs?.map((blogs, index) => (
           <Link href={`/blogs/${blogs?.urllink}`}>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800" key={index}>
          <div className="relative w-full h-64">


            
            {blogs?.blogs && blogs.blogs[0] && (
              <Image
                src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${blogs.blogs[0].image}`}
                alt={blogs.blogs[0].imagealt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            )}
          </div>
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">{blogs?.name}</h3>
            <p className="text-gray-400 mb-4 overflow-hidden overflow-ellipsis line-clamp-3">{blogs?.over[0]}</p>
            <div className="flex justify-end">
           
                <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
                  Read More
                </button>
           
            </div>
          </div>
        </div>
           </Link>
      ))}
    </div>
    <Link href="/blogs" className="block mt-10 text-center text-yellow-500 hover:text-yellow-600 underline">
    Roam the World Through Our Blogs →
    </Link>
</div>
</div>
</div>
<Footer />
    </div>
  )
}

export default Dest
