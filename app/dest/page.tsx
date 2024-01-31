'use client'
import Destproduct from '@/Components/Destination/Destproduct'
import Header from '@/Components/Navbar/Header/Header'
import { faCalendarDays, faClock, faCloudSun, faLocationDot, faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import {  FiShoppingBag } from 'react-icons/fi';
import { BiDish } from "react-icons/bi";
import { TbTrekking } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";
import RelatedDestinations from '@/Components/Destination/RelatedDest'

type IconType = React.ElementType;
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
type Place = {
  name: string;
  description: string;
  imageUrl: string;
};

type PlacesData = {
  visit: Place[];
  eat: Place[];
  activities: Place[];
  shop: Place[];
};

const placesData: PlacesData  = {
  visit: [
    {
      name: 'Savandurga',
      description: 'Savandurga, Asia’s one of largest monolithic hills, is a popular destination for trekking and rock climbing.',
      imageUrl: '/home/ANDAMAN.jpg'
    },
    {
      name: 'Nandi Hills',
      description: 'Nandi Hills offers a stunning panoramic view of the surrounding landscape and is a popular spot for sunrise viewings.',
      imageUrl: '/home/blog1.jpg'
    },
    {
      name: 'Coorg',
      description: 'Known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape.',
      imageUrl: '/home/chikmagalur.jpeg'
    },
    {
      name: 'Hampi',
      description: 'Hampi, a UNESCO World Heritage Site, is known for its ancient temples and ruins dating back to the Vijayanagara Empire.',
      imageUrl: '/home/Coorg.jpg'
    }
  ],
  eat: [
    {
      name: 'Karavalli',
      description: 'Karavalli is renowned for its traditional coastal and regional Indian cuisine, offering a unique dining experience.',
      imageUrl: '/home/domestic.jpg'
    },
    {
      name: 'The Only Place',
      description: 'Famous for its delicious American-style burgers, steaks, and desserts in a cozy and friendly environment.',
      imageUrl: '/home/Goa.jpg'
    },
    {
      name: 'MTR',
      description: 'Mavalli Tiffin Rooms (MTR) is the brand name of a food-related enterprise located in India, having a history of serving traditional South Indian vegetarian cuisine since 1924.',
      imageUrl: '/home/GOKARNA.jpg'
    },
    {
      name: 'Truffles',
      description: 'Truffles is known for its delectable burgers and desserts, making it a hit among the youth of the city.',
      imageUrl: '/home/hamta.jpg'
    }
  ],
  activities: [
    {
      name: 'Commercial Street',
      description: 'Commercial Street is one of the busiest and most popular shopping areas in Bangalore with a wide range of clothing, accessories, and more.',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'Phoenix Marketcity',
      description: 'A shopping mall located in Bangalore, India. It is one of the largest malls in the country and contains more than 270 stores.',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'Chickpet Market',
      description: 'Chickpet Market is known for its silk sarees, textiles, and gold jewelry, offering a traditional shopping experience.',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'UB City Mall',
      description: 'UB City Mall is known for its luxury shopping experience, housing high-end brands, fine dining restaurants, and chic cafes.',
      imageUrl: '/home/hamta.jpg'
    }
  ],
  shop: [
    {
      name: 'Lal Bagh Botanical Garden',
      description: 'A famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower shows.A famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower showsA famous botanical garden in southern Bangalore known for its beautiful layout, floral diversity, and annual flower shows',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'Bangalore Palace',
      description: 'A royal palace with remarkable architecture, it’s known for its elegant wood carvings and Tudor-style architecture.',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'Cubbon Park',
      description: 'A landmark area of green space in Bangalore, ideal for morning walks amidst nature and historical structures.',
      imageUrl: '/home/hamta.jpg'
    },
    {
      name: 'Bannerghatta National Park',
      description: 'This national park is rich in flora and fauna, and includes a butterfly park, safari park, and a rescue center for wild animals.',
      imageUrl: '/home/hamta.jpg'
    }
  ]
};

// const tabIcons = {
//   visit: BsViewList ,
//   eat: BiDish,
//   activities: TbTrekking,
//   shop: FiShoppingBag,
// };
const tabIcons: {
  visit: IconType;
  eat: IconType;
  activities: IconType;
  shop: IconType;
} = {
  visit: BsViewList,
  eat: BiDish,
  activities: TbTrekking,
  shop: FiShoppingBag,
};
type ActiveTabType = keyof PlacesData;
const page = () => {
  const [readMore, setReadMore] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState<ActiveTabType>('visit');
  const [activePlace, setActivePlace] = useState<Place>(placesData[activeTab][0]);

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
    setActivePlace(placesData[tab][0]);
  };

  const handlePlaceClick = (place: Place) => {
    // If the place is already active, do nothing to prevent it from hiding.
    // Otherwise, set the new active place.
    if (activePlace !== place) {
      setActivePlace(place);
    }
  };
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
const cards = [
  {
    title: 'Lunar New Year Parade & Festival',
    category: 'ART AND CULTURE',
    description: 'Chinatown\'s annual Lunar New Year celebration features stunning visuals.',
    imageUrl: '/destination/bhutan.jpg',
  },
  {
    title: 'Lunar New Year Parade & Festival',
    category: 'ART AND CULTURE',
    description: 'Chinatown\'s annual Lunar New Year celebration features stunning visuals. Chinatown\'s annual Lunar New Year celebration features stunning visuals Chinatown\'s annual Lunar New Year celebration features stunning visuals',
    imageUrl: '/destination/bali.jpeg',
  },
  {
    title: 'Lunar New Year Parade & Festival',
    category: 'ART AND CULTURE',
    description: 'Chinatown\'s annual Lunar New Year celebration features stunning visuals.',
    imageUrl: '/about/about.jpg',
  },
  // ... Add more card objects
];
  return (
    <div className='bg-black'>
      <Header />
<div className='pt-20'></div>
<div className="relative h-screen flex items-center justify-center bg-black text-white" onKeyDown={handleKeyPress} tabIndex={0}>
       <Image
        src="/home/valley.jpg" // Note how we reference from the root
        alt="Wayanad"
        // width={500}  // Set the desired width
        // height={300} // Set the desired height
        layout="fill"
        objectFit="cover"
        className="opacity-50" // This darkens the image for better text visibility
      />
      <div className="absolute top-[20vh] text-center">
        <h1 className="text-4xl  mb-4">
          Discover
        </h1>
        <h1 className="text-7xl font-bold mb-4 text-yellow-500 shadow-lg ">
          WAYANAD
        </h1>
        <div className="mt-2 mb-4 mx-auto h-1 w-10 bg-white"></div>
        <p className="text-xl mb-8">
          Welcoming you to an unforgettably natural vista.
        </p>
        <div className="text-sm max-w-md mx-auto">

<div className="relative "> {/* Make this div relative so that the absolute positioning of children is relative to this container */}
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
    </div>
    <div className="bg-gray-200 text-white py-3">
  <div className="container mx-auto max-w-6xl -pl-8">
    <nav className="text-black font-semibold" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-yellow-500">HOME</Link>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/destinations" className="text-gray-500 hover:text-yellow-500">DESTINATIONS</Link>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li className="flex items-center">
               WAYANAD
        </li>
      </ol>
    </nav>
  </div>
</div>
      <div className="flex  mx-8 text-white mt-10">
  <div className="w-[30%] mr-8 ">
  <div className='px-2'>
            <h1 className="text-4xl font-bold text-gray-100">Wayanad</h1>
            <p className="text-base text-gray-300 flex items-center mt-3"><FontAwesomeIcon icon={faLocationDot} className='w-3 h-3 mr-1 mt-[1px]'/>Kerala · India</p>
            <p className="text-sm text-gray-300 mt-1">3 out of 49 Places to visit in Kerala</p>
          </div>
          <div className="flex flex-col justify-between text-xs text-gray-500 mt-4 bg-gray-200 px-3 pt-3 pb-4 rounded-lg">
          <div className="  pb-2 border-t border-gray-200">
        <div className="flex -mx-2 justify-between">
          <div className="px-2 w-1/3">
            <div className="flex flex-col items-center justify-center space-y-1">
            <FontAwesomeIcon icon={faSun} className="h-6 w-6 mt-1 mr-2 text-yellow-500" />
              <span className="font-medium text-gray-800 text-center">Weather:</span>
              <span className="font-bold text-gray-700 text-sm">18 - 30°C</span>
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="flex flex-col items-center justify-center space-y-1">
            <FontAwesomeIcon icon={faClock} className="h-6 w-6 mt-1 mr-2 text-blue-500"  />
              <span className="font-medium text-gray-800 text-center text-2xs">Ideal Duration:</span>
              <span className=" font-bold text-gray-700 text-sm text-center">1 - 2 days</span>
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="flex flex-col items-center justify-center space-y-1">
            <FontAwesomeIcon icon={faCalendarDays} className="h-6 w-6 mt-1 mr-2 text-green-500"/>
              <span className="font-medium text-gray-800 text-center">Best Time:</span>
              <span className="font-bold  text-gray-700  text-sm text-center">Oct - May</span>
            </div>
          </div>
        </div>
        </div>
    {/* <div className="flex  flex-col text-base">
  <div className="flex flex-row items-center space-y-1">
    <FontAwesomeIcon icon={faSun} className="h-3 w-3 mt-1 mr-2 text-yellow-500" />
    <span className="font-bold text-gray-800 pr-1">Weather: </span>
    <span className="text-gray-700">18 - 30°C</span>
  </div>
  <div className="flex flex-row items-center space-y-1">
  <FontAwesomeIcon icon={faClock} className="h-3 w-3 mt-1 mr-2 text-blue-500"  />
    <span className="font-bold text-gray-800 pr-1">Ideal duration: </span>
    <span className="text-gray-700 ">1-2 days</span>
  </div>
  <div className="flex flex-row items-center space-y-1">
  <FontAwesomeIcon icon={faCalendarDays} className="h-3 w-3 mt-1 mr-2 text-green-500"/>
    <span className="font-bold text-gray-800 pr-1">Best Time: </span>
    <span className="text-gray-700 ">October - May</span>
  </div>
</div> */}
<div className='flex flex-row text-sm py-1'>
Planning a Trip?
    <Link href="#" className="text-sm text-yellow-600 hover:underline ">  Ask Your Question</Link>
    </div>
  </div>
  </div>
<div className="px-2" style={{ width: '80%' }}>
<h2 className="text-xl font-semibold text-gray-100">"Nature's Abode"</h2>
    <h3 className="text-2xl font-semibold text-yellow-500">Wayanad Tourism</h3>
    <p className="text-base text-gray-400 mt-2">
      Replete with waterfalls, historical caves, comfortable resorts and homestays, Wayanad in Kerala is famous for its spice plantations and wildlife. Walking through the sprawling spice plantations, trekking to the pre-historic caves and experiencing a resort holiday are one of the many things you can do to get a taste of Wayanad.
    </p>
    <p className={`text-base text-gray-400 mt-2 ${!readMore ? 'hidden sm:block' : 'block'}`}>
            Walking through the sprawling spice plantations, trekking to the pre-historic caves and experiencing a resort holiday are one of the many things you can do to get a taste of Wayanad.
          </p>
          <p className={`text-base text-gray-400 mt-2 ${readMore ? 'block' : 'hidden'}`}>
            Wayanad is best known for the wildlife reserves - Wayanad wildlife reserve which is home to an exquisite variety of flora and fauna.
          </p>
          <button
            className="text-yellow-600 text-sm hover:underline mt-4 inline-block"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
  </div>
  </div>
  <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white">Getaway to <span className='text-yellow-500'>Wayanad </span> </h2>
</div>
          <Destproduct />
          <div className=" text-white">
  <h2 className="text-3xl font-bold mb-5 ml-10 text-center">What is Wayanad <span className='text-yellow-500'>Famous </span>for ?</h2>
</div>
<div className="grid md:grid-cols-6 grid-col-1 gap-4 md:px-40 md:pb-0 pb-0 p-0 pt-5">
        {/* Example of one image with new styling */}
      
         <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-2 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[400px] h-[155px]"
        >  <Link href="/destinations/wayanad" >   
          <Image
            src='/home/Wayanad.webp'
            alt="WAYANAD"
            layout="fill"
            objectFit="cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-5 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Mountains
        
      
          </div>
          </Link>

        </motion.div>
    {/* First set of smaller images (3 images vertically) */}
    {/* Second set of smaller images (2 images vertically) */}
    <div className="grid grid-cols-2 gap-4 col-span-4" >
    <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[155px]"
          > <Link href="/destinations/gokarna" >  
            <Image
              src='/home/Gokarna.webp'
              alt="GOKARNA"
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-5 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Culture 
          </div>
          </Link>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[155px]"
          > <Link href="/destinations/gokarna" >  
            <Image
              src='/home/blog1.jpg'
              alt="GOKARNA"
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-5 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Caves
         </div>
          </Link>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[160px] h-[155px]"
          > <Link href="/destinations/srinagar" >  
            <Image
              src='/home/Kashmir.webp'
              alt="KASHMIR"
              layout="fill"
              objectFit="cover"
            />
           <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-5 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Wildlife
</div>
          </Link>
        </motion.div>
    </div>
    </div>
   
<div className="flex md:mx-40 mx-0 gap-4 pt-4">
      {/* ... Previous code for all the existing images ... */}
      {/* New image on the left */}
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-[130px] h-52"
          > <Link href="/destinations/goa" >  
            <Image
              src='/home/Goa.webp'
              alt="GOA"
              layout="fill"
              objectFit="cover"
            />
       <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-2 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Waterfall
       </div>
          </Link>
      </motion.div>
      </div>
      {/* New image on the right */}
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-[120px] h-52"
          > <Link href="/destinations/thailand" >  
            <Image
              src='/home/ANDAMAN.jpg'
              alt="ANDAMAN"
              layout="fill"
              objectFit="cover"
            />
        <div className="absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-50"></div>
          {/* Text at top left */}
          <div className="absolute md:bottom-2 md:left-5 md:text-xl text-lg bottom-2 left-2 text-white">
          <hr className="border-t-2 border-yellow-500 md:w-[10PX] w-[10px]" />Tea Plantation
          </div>
          </Link>
      </motion.div>
    </div>
    </div>
    <div className="mt-10 text-white">
  <h2 className="text-3xl font-bold mb-10 ml-12 text-center">Discover the <span className='text-yellow-500'>activities not to be missed </span>in this region</h2>
</div>

<div className="mx-10 ">

<div className="flex justify-center mb-4">

  {/* Inner div to contain tabs and apply the border based on their collective width */}
  <div className="inline-flex flex-row items-center space-x-32 px-20 pb-2 border-b-2 border-yellow-500">
    {Object.keys(placesData).map((tab) => {
      const key = tab as keyof PlacesData;
      const Icon = tabIcons[key];  // get the relevant icon
      return (
        // Individual tab item
        <div
          key={key}
          className={`flex flex-col items-center cursor-pointer pb-2 ${activeTab === tab ? 'text-yellow-500' : 'text-gray-500'}`}
          onClick={() => handleTabClick(key)}
          style={{ lineHeight: '1' }} // This ensures the text and icon are close together
        >
          <Icon className="w-10 h-10 mb-1" />
          <span className="text-lg">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
        </div>
      );
    })}
  </div>
</div>


<div className="flex pt-2">
  {/* Left side: List of place names, showing description for the active place only */}
  <div className="w-1/2 px-4 flex justify-center items-center">
    {activePlace && (
      <div className=" min-h-[350px] w-full relative px-4">
        <Image src={activePlace.imageUrl} alt={activePlace.name} className="rounded-lg shadow-md " objectFit='cover' layout='fill'/>
      </div>
    )}
  </div>
  <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
    <ul className="space-y-2">
      {/* Map over placesData[activeTab] */}
      {placesData[activeTab].map((place) => (
        <li key={place.name} className={`cursor-pointer p-2 rounded-lg ${activePlace === place ? 'bg-yellow-500 text-black' : 'text-black bg-gray-300'}`}>
          <div onClick={() => handlePlaceClick(place)} className="flex flex-col">
            <h3 className="text-lg font-bold ">{place.name}</h3>
            {/* Toggle the description on click */}
            {activePlace === place && (
              <p className="mt-2 text-sm line-clamp-3">{place.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Right side: Active place image */}

</div>


    </div>
    <div className="bg-black p-6">
    <div className="text-center py-6">
    <h2 className="text-3xl font-bold text-white mb-2">Adventurer's <span className='text-yellow-500'>Digest </span></h2>
    <p className="text-gray-300 mb-4">Curated guides for every traveler's need.</p>
  </div>
      <div className="grid md:grid-cols-3 gap-10 mx-10">
        {cards.map((card, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <div className='relative h-[220px] w-full'>
            <Image className="rounded-lg object-cover" src={card.imageUrl} alt={card.title} objectFit='cover' layout='fill' />
            </div>
            <div className="py-2">
              <div className="bg-gray-200 text-black text-xs font-semibold px-2 inline-block rounded-full uppercase tracking-wide">
                {card.category}
              </div>
              <h3 className="font-bold text-xl mt-1 text-gray-300">{card.title}</h3>
              <p className="text-gray-500 text-base mt-1 line-clamp-2">{card.description}</p>
            </div>
            <div className="pr-4 py-2 flex items-center justify-between">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                Visit Website
              </button>
              <button className="text-yellow-500 hover:text-blue-700 ml-4">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <h2 className="text-4xl font-semibold mb-4 text-white">Related destinations for Wayanad</h2>
    <RelatedDestinations />
    {/* <div className="container mx-auto p-5 md:p-10">
  <h2 className="text-4xl font-semibold mb-4 text-white">Related destinations for Wayanad</h2>
  <div className="grid grid-cols-4 gap-4">


    <div className="flex flex-col border-2 border-white rounded-lg"> 
  <div className="relative overflow-hidden rounded-lg h-48">
    <Image
      src='/home/KASHMIR.jpg' // Replace with your actual image path
      alt="Mestre"
      layout="fill"
      objectFit="cover"
      className="transition duration-500 ease-in-out transform hover:scale-105"
    />
  </div>
  <p className="mt-2 text-center text-xl font-semibold text-white">Wayanad</p>
</div>

    <div className="flex flex-col border-2 border-white rounded-lg"> 
  <div className="relative overflow-hidden rounded-lg h-48">
    <Image
      src='/home/Chikmagalur.webp' // Replace with your actual image path
      alt="Mestre"
      layout="fill"
      objectFit="cover"
      className="transition duration-500 ease-in-out transform hover:scale-105"
    />
  </div>
  <p className="mt-2 text-center text-xl font-semibold text-white">Chikamagalur</p>
</div>

    <div className="flex flex-col border-2 border-white rounded-lg"> 
  <div className="relative overflow-hidden rounded-lg h-48">
    <Image
      src='/home/Goa.webp' // Replace with your actual image path
      alt="Mestre"
      layout="fill"
      objectFit="cover"
      className="transition duration-500 ease-in-out transform hover:scale-105"
    />
  </div>
  <p className="mt-2 text-center text-xl font-semibold text-white">Munnar</p>
</div>

    <div className="flex flex-col border-2 border-white rounded-lg"> 
  <div className="relative overflow-hidden rounded-lg h-48">
    <Image
      src='/home/MUNAR.jpg' // Replace with your actual image path
      alt="Mestre"
      layout="fill"
      objectFit="cover"
      className="transition duration-500 ease-in-out transform hover:scale-105"
    />
  </div>
  <p className="mt-2 text-center text-xl font-semibold text-white bg-black">Ooty</p>
</div>
  </div>
</div> */}

</div>

  )
}

export default page
