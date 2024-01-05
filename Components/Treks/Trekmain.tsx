"use client"
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Trek from '@/Components/Treks/Trek'
import Image from 'next/image'
import Treka from '@/Components/Treks/Treka'

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
const Trekmain = () => {
    const [northIndiaTrekTreks, setNorthIndiaTrekTreks] = useState([]);
    const [karnatakaTrekTreks, setKarnatakaTrekTreks] = useState([]);
    const [keralaTrekTreks, setKeralaTrekTreks] = useState([]);
    const [tnTrekTreks, setTnTrekTreks] = useState([]);
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
        // Get the list of filtered products based on the current search input
        const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        const maxIndex = filteredProducts.length - 1;
      
        if (event.key === 'ArrowDown') {
          // Prevent default to stop scrolling the entire page
          event.preventDefault();
          setHighlightedIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
        } else if (event.key === 'ArrowUp') {
          // Prevent default to stop scrolling the entire page
          event.preventDefault();
          setHighlightedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
        } else if (event.key === 'Enter') {
          event.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex <= maxIndex) {
            const selectedProduct = filteredProducts[highlightedIndex];
            navigateToProductPage(`/${selectedProduct.type}/${selectedProduct.urllink}`);
          } else {
            // If no item is highlighted, find the closest match or navigate to destinations
            const closestMatch = findClosestMatch(searchInput);
            if (closestMatch) {
              navigateToProductPage(`/${closestMatch.type}/${closestMatch.urllink}`);
            } else {
              navigateToProductPage('/destinations');
            }
          }
        }
      };
      // ... [rest of the functions]
    
      // Function to render the product list
      const renderProductList = () => {
        return Array.isArray(products) && searchInput.length >= 2 && products
          .filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
          .slice(0, 5)
          .map((product, index) => (
            <div
              className={`text-black cursor-pointer text-left pl-3  w-full ${
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
      // Updated navigateToProductPage function to accept URL parameter
      const navigateToProductPage = (url = selectedUrl) => {
        const navigateUrl = url || '/destinations';
        console.log('Navigating to URL:', navigateUrl);
        window.location.href = navigateUrl;
      };
      useEffect(() => {
          fetchData();
      }, []);
    useEffect(() => {
      const fetchNorthIndiaTrekTreks = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/trek/northindiatrek');
          const data = await response.json();
          setNorthIndiaTrekTreks(data);
        } catch (error) {
          console.error('Error fetching North India Trek treks:', error);
        }
      };
    
      // Fetch data for North India Trek treks
      fetchNorthIndiaTrekTreks();
    }, []);
    
    useEffect(() => {
      const fetchKarnatakaTrekTreks = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/trek/karnatakatrek');
          const data = await response.json();
          setKarnatakaTrekTreks(data);
        } catch (error) {
          console.error('Error fetching Karnataka Trek treks:', error);
        }
      };
    
      // Fetch data for Karnataka Trek treks
      fetchKarnatakaTrekTreks();
    }, []);
    
    useEffect(() => {
      const fetchKeralaTrekTreks = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/trek/keralatrek');
          const data = await response.json();
          setKeralaTrekTreks(data);
        } catch (error) {
          console.error('Error fetching Kerala Trek treks:', error);
        }
      };
    
      // Fetch data for Kerala Trek treks
      fetchKeralaTrekTreks();
    }, []);
    
    useEffect(() => {
      const fetchTnTrekTreks = async () => {
        try {
          const response = await fetch('https://launch-api1.vercel.app/trek/tntrek');
          const data = await response.json();
          setTnTrekTreks(data);
        } catch (error) {
          console.error('Error fetching TN Trek treks:', error);
        }
      };
    
      // Fetch data for TN Trek treks
      fetchTnTrekTreks();
    }, []);
    
    const newYearTrek = [
      {
        _id: '1',
        urllink: '/trek/kudremukh-trek-for-new-year',
        testimage: '/home/Kudremukha.webp',
        name: 'Kudremukh New Year Bash',
        amount: 5999,
      },
      {
        _id: '2',
        urllink: '/trek/Nethravathi-trek-for-new-year',
        testimage: '/home/Netravathi.webp',
        name: 'Nethravathi New Year Bash',
        amount: 5999,
      },
      {
        _id: '3',
        urllink: '/tour/gokarna-murudeshwar-3day',
        testimage: '/home/gokarnamuru.webp',
        name: 'Gokarna - Murudeshwar: A Festive Retreat',
        amount: 9999,
      },
    ];
    const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';
      return (
        <div className='bg-black'>
   
          <div className='h-[60px] '>
          </div>
          <div className='relative h-[50vh] w-full text-white font-bold text-center flex flex-col justify-center items-center border-t-2 border-b-2 border-gray-700' onKeyDown={handleKeyPress} tabIndex={0}>
          {/* Background Image */}
          <div className='absolute top-0 left-0 w-full h-full z-0'>
            <Image
              src="/destination/Trek.webp"
              alt="Background"
              layout="fill"
              objectFit="cover"  // This will cover the entire div area
              quality={100}
            />
               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          </div>
          {/* <div className='relative h-[50vh] text-white font-bold text-center flex flex-col justify-center items-center  border-t-2 border-b-2 border-gray-700'> */}
          <div className='relative z-10 w-[80%] flex flex-col justify-center items-center'>
         <div className='text-xl md:text-4xl'>Treks</div> 
         <div className="relative md:w-3/4"> {/* Make this div relative so that the absolute positioning of children is relative to this container */}
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
              <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Christmas and New Years</h2>
              <div className="flex justify-center pt-2 md:pt-5">
            <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
          </div>
            </div>
        <div className='pt-10'>
          <Treka trek={newYearTrek}  uniqueId="NewYear" />
        </div>
     </div>
          
     <div className=' mx-10 pt-10'>
     <div className="text-center md:text-center">
              <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Treks in Karnataka</h2>
              <div className="flex justify-center pt-2 md:pt-5">
            <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
          </div>
            </div>
        <div className='pt-10'>
          <Trek trek={karnatakaTrekTreks} name="trek" uniqueId="Karnataka" />
        </div>
     </div>
     <div className=' mx-10 pt-10'>
     <div className="text-center md:text-center">
              <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Treks in Kerala</h2>
              <div className="flex justify-center pt-2 md:pt-5">
            <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
          </div>
            </div>
        <div className='pt-10'>
        <Trek trek={keralaTrekTreks} name="trek" uniqueId="kerala" />
        </div>
     </div>
     <div className=' mx-10 py-10'>
     <div className="text-center md:text-center">
              <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Treks in Tamil Nadu</h2>
              <div className="flex justify-center pt-2 md:pt-5">
            <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
          </div>
            </div>
        <div className='pt-10'>
        <Trek trek={tnTrekTreks}  name="trek" uniqueId="tamilnadu" />
        </div>
     </div>
     <div className=' mx-10 py-10'>
     <div className="text-center md:text-center">
              <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Treks of North India</h2>
              <div className="flex justify-center pt-2 md:pt-5">
            <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
          </div>
            </div>
        <div className='pt-10'>
        <Trek trek={northIndiaTrekTreks} name="trek" uniqueId="northindia" />
        </div>
     </div>

        </div>
      )
}

export default Trekmain
