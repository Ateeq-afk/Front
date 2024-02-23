"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import dynamic from 'next/dynamic';
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
const Destination = dynamic(() => import('@/Components/Destination/Destination'), {
  ssr: false,
  loading: () => <div>Loading Destinations...</div>, 
});
const Footer = dynamic(() => import('@/Components/Navbar/Footer/Footer')); 
const Header = dynamic(() => import('@/Components/Navbar/Header/Header'));
const Destmain = () => {
    const [southIndiaDestinations, setSouthIndiaDestinations] = useState([]);
    const [northIndiaDestinations, setNorthIndiaDestinations] = useState([]);
    const [internationalDestinations, setInternationalDestinations] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedUrl, setSelectedUrl] = useState<string>("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
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
    const setSearchInputAndResetHighlight = (input: string) => {
      setSearchInput(input);
      setHighlightedIndex(-1);
    };
    const findClosestMatch = (input: string): Product | null => {
      if (input.length < 2) {
        return null;
      }
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      return filteredProducts.length > 0 ? filteredProducts[0] : null;
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      const maxIndex = filteredProducts.length - 1;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setHighlightedIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHighlightedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex <= maxIndex) {
          const selectedProduct = filteredProducts[highlightedIndex];
          navigateToProductPage(`/${selectedProduct.type}/${selectedProduct.urllink}`);
        } else {
          const closestMatch = findClosestMatch(searchInput);
          if (closestMatch) {
            navigateToProductPage(`/${closestMatch.type}/${closestMatch.urllink}`);
          } else {
            navigateToProductPage('/destinations');
          }
        }
      }
    };
    const renderProductList = () => {
      return Array.isArray(products) && searchInput.length >= 2 && products
        .filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
        .slice(0, 5)
        .map((product, index) => (
          <div
            className={`text-black cursor-pointer text-left pl-3 w-full ${
              index === highlightedIndex ? 'bg-yellow-400' : ''
            }`}
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={() => navigateToProductPage(`/${product.type}/${product.urllink}`)}
            key={product.id || index}
          >
            {product.name}
          </div>
        ));
    };
    const handleNavigateBasedOnInput = () => {
      const closestMatch = findClosestMatch(searchInput);
      if (closestMatch) {
        navigateToProductPage(`/${closestMatch.type}/${closestMatch.urllink}`);
      } else {
        navigateToProductPage('/destinations');
      }
    };
    const navigateToProductPage = (url = selectedUrl) => {
      const navigateUrl = url || '/destinations';
      console.log('Navigating to URL:', navigateUrl);
      window.location.href = navigateUrl;
    };
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
      const fetchSouthIndiaDestinations = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/dest/southindia');
          const data = await response.json();
          setSouthIndiaDestinations(data);
        } catch (error) {
          console.error('Error fetching South India destinations:', error);
        }
      };
      const fetchNorthIndiaDestinations = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/dest/northindia');
          const data = await response.json();
          setNorthIndiaDestinations(data);
  
        } catch (error) {
          console.error('Error fetching North India destinations:', error);
        }
      };
      const fetchInternationalDestinations = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/dest/international');
          const data = await response.json();
          setInternationalDestinations(data);
        } catch (error) {
          console.error('Error fetching International destinations:', error);
        }
      };
      fetchSouthIndiaDestinations();
      fetchNorthIndiaDestinations();
      fetchInternationalDestinations();
    }, []);
    return (
      <div className='bg-black'>
        <Header />
        <div className='h-[60px] '>
        </div>
        <div className='relative h-[50vh] w-full text-white text-center flex flex-col justify-center items-center border-t-2 border-b-2 border-gray-700' onKeyDown={handleKeyPress} tabIndex={0}>
        <div className='absolute top-0 left-0 w-full h-full z-0'>
          <Image
            src="/destination/Destination.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"  
            quality={100}
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        </div>
        <div className='z-10 w-[80%] flex flex-col justify-center items-center'>
       <h1 className='text-xl md:text-4xl font-bold'>Destinations</h1> 
       <div className="relative md:w-3/4">
    <div className='flex flex-row justify-between bg-white rounded-xl p-1 border-2 border-gray-200 mt-4'>
      <input
        type="text"
        placeholder="Search for amazing destinations"
        className="flex-grow p-2 outline-none text-black"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInputAndResetHighlight(e.target.value)}
        value={searchInput}
      />
      <button className="text-black p-2" onClick={handleNavigateBasedOnInput}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
      </button>
    </div>
    <div className='absolute w-full bg-white flex flex-col items-start rounded-xl mt-1 '> {/* Absolutely position this div */}
      {renderProductList()}
    </div>
  </div>
        </div>
  </div>     
   <div className=' mx-10 pt-10'>
   <div className="text-center md:text-center">
            <div className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Trips</div>
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
            <div className="text-center text-xl md:text-3xl font-bold text-yellow-500">North India Trips</div>
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
export default Destmain
