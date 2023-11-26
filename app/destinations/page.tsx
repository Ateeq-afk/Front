"use client"
import Destination from '@/Components/Destination/Destination'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
interface Product {
  id: string;
  name: string;
  _id: string;
  urllink: string;
  type: 'trek' | 'tour' | 'destinations'; 
}
interface BaseProduct {
  id: string;
  name: string;
  _id: string;
  urllink: string;
  type: 'trek' | 'tour' | 'destinations'; 
}
const page = () => {
  const [southIndiaDestinations, setSouthIndiaDestinations] = useState([]);
  const [northIndiaDestinations, setNorthIndiaDestinations] = useState([]);
  const [internationalDestinations, setInternationalDestinations] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
      try {
          const trekResponse = await fetch('https://launch-api1.vercel.app/trek/trek');
          const tourResponse = await fetch('https://launch-api1.vercel.app/trek/tour');
          const destinationResponse = await fetch('https://launch-api1.vercel.app/dest');

          const treks = await trekResponse.json();
          const tours = await tourResponse.json();
          const destinations = await destinationResponse.json();

          const destWithType = destinations.data.map((item: BaseProduct) => ({ ...item, type: 'destinations' })) || [];
          const treksWithType = treks?.map((item: BaseProduct) => ({ ...item, type: 'trek' })) || [];
          const toursWithType = tours?.map((item: BaseProduct) => ({ ...item, type: 'tour' })) || [];
         
    
          setProducts([...destWithType,...treksWithType, ...toursWithType, ]);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);
  useEffect(() => {
    // Fetch data for South India destinations
    const fetchSouthIndiaDestinations = async () => {
      try {
        const response = await fetch('https://launch-api1.vercel.app/dest/southindia');
        const data = await response.json();
        setSouthIndiaDestinations(data);
      } catch (error) {
        console.error('Error fetching South India destinations:', error);
      }
    };

    // Fetch data for North India destinations
    const fetchNorthIndiaDestinations = async () => {
      try {
        const response = await fetch('https://launch-api1.vercel.app/dest/northindia');
        const data = await response.json();
        setNorthIndiaDestinations(data);

      } catch (error) {
        console.error('Error fetching North India destinations:', error);
      }
    };

    // Fetch data for International destinations
    const fetchInternationalDestinations = async () => {
      try {
        const response = await fetch('https://launch-api1.vercel.app/dest/international');
        const data = await response.json();
        setInternationalDestinations(data);
      } catch (error) {
        console.error('Error fetching International destinations:', error);
      }
    };

    // Fetch data for all destinations
    fetchSouthIndiaDestinations();
    fetchNorthIndiaDestinations();
    fetchInternationalDestinations();
  }, []);
 
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-[60px] '>
      </div>
      <div className='relative h-[50vh] w-full text-white font-bold text-center flex flex-col justify-center items-center border-t-2 border-b-2 border-gray-700'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <Image
          src="/destination/Destination.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"  // This will cover the entire div area
          quality={100}
        />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

      </div>
      {/* <div className='relative h-[50vh] text-white font-bold text-center flex flex-col justify-center items-center  border-t-2 border-b-2 border-gray-700'> */}
      <div className='z-10 w-[80%] flex flex-col justify-center items-center'>
     <div className='text-xl md:text-4xl'>Destinations</div> 
      <div className="flex flex-col  bg-white  md:w-3/4 rounded-xl p-1 border-2 border-gray-200 mt-4">
        <div className='flex flex-row justify-between'>
                <input
                    type="text"
                    placeholder="Search for amazing destations"
                    className="flex-grow p-2 outline-none text-black"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                />
     
                <button className="text-black p-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                </button>
            </div>
            <div className='flex flex-col items-start pl-2'>
            {Array.isArray(products) && searchInput.length >= 3 && products
                .filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                .slice(0, 5)
                .map((product, index) => (
                    <div className="text-black cursor-pointer" key={product.id || index}>
                        <Link href={`/${product.type}/${product.urllink}`}>
                            <div className="text-black">{product.name}</div>
                        </Link>
                    </div>
                ))
            }
            </div>
            </div>
      </div>
</div>

      
 <div className=' mx-10 pt-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      <Destination dest={internationalDestinations} uniqueId="international" row={1} height={350}/>
    </div>
 </div>
 <div className=' mx-10 pt-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">South India Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      <Destination dest={southIndiaDestinations} uniqueId="domestic" row={2} height={170} />
    </div>
 </div>
 <div className=' mx-10 py-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">North India Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      <Destination dest={northIndiaDestinations} uniqueId="northindia" row={1} height={350}/>
    </div>
 </div>
      <Footer />
    </div>
  )
}

export default page
