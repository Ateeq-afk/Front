'use client'
import Header from '../Navbar/Header/Header'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState} from 'react';
import Footer from '../Navbar/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TrekSlider from '../Home/Trekslider/Trekslide';
import {  FiShoppingBag } from 'react-icons/fi';
import { BiDish } from "react-icons/bi";
import { TbTrekking } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";
import { motion } from 'framer-motion';
import RelatedDestinations from './RelatedDest';
import DestShop from './DestShop';

const destinations2 = [
    {
      title: "Wayanad Weekend Getaway",
      location: "Kerala",
      price: 5599,
      originalprice:6999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--wayanad (2).jpg',
      url:"/tour/wayanad-weekend-getaway"
    },
    {
      title: "Chikmagalur Weekend Getaway",
      location: "Karnataka",
      price: 5499,
      originalprice:6999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/siri_11zon.webp',
      url:"/tour/chikmagalur-weekend-getaway"
    },
    {
      title: "Gokarna-Murudeshwar Weekend Getaway",
      location:"Karnataka",
      price: 5499,
      originalprice:6999,
      img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--tharun-kumar-u-uY0n8FV_ds0-unsplash_11zon.webp",
      url:"/tour/gokarna-murudeshwar-weekend-getaway"
    },
    {
      title: "Kodaikanal Weekend Getaway",
      location: "Tamilnadu",
      price: 6499,
      originalprice:6999,
      img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--69_39_11zon.webp",
      url:"/tour/kodaikanal-weekend-getaway"
    },
    {
      title: "Ooty Weekend Getaway",
      location: "Tamilnadu",
      price: 5599,
      originalprice:6999,
      img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/IMG20220410121642_11zon.webp",
      url:"/tour/ooty-weekend-getaway"
    },
]

const Destmainn = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isShown, setIsShown] = useState(false);
    const [readMore, setReadMore] = useState(false);
    
    const text = `Bangalore, officially known as Bengaluru, is the capital city of the southern Indian state of Karnataka. Known as the "Silicon Valley of India", Bangalore is a hub for the country's information technology industry. The city boasts a vibrant and diverse culture, with a mix of traditional and modern elements. Bangalore is also known for its beautiful parks, historic landmarks, and vibrant nightlife. The city is home to numerous universities and research institutions, making it...`;
    const maxLength= 300
   
    const displayText = isShown ? text : text.substring(0, maxLength) + '...';
    const toggleShown = () => setIsShown(!isShown);
    // Function to check which section is currently active
    const checkActiveSection = () => {
        const offset = 150; // Height of your fixed header or any other offset
        const currentScrollPosition = window.pageYOffset + offset; // Adjust scroll position by offset
      
        const sections = [
          'overview',
          'travel',
          'attraction',
          'food',
          'culture',
          'activities',
          "shopping",
          'religioussites',
          'stays',
          'camping',
          'blogs',
          'related',
        ];

        let currentSection = sections[0]; // Default to the first section
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section && currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetTop + section.offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      
        setActiveSection(currentSection);
      };
      const handleNavLinkClick = (e, sectionId) => {
        e.preventDefault(); // Prevent the default link behavior
        const sectionElement = document.getElementById(sectionId.substring(1)); // Adjusted to remove '#' from sectionId
        if (!sectionElement) {
          console.error(`Element with ID '${sectionId}' not found.`);
          return;
        }
        const offsetTop = sectionElement.offsetTop;
        const headerOffset = 150; // Adjust this value based on your actual header's height
        window.scrollTo({
          top: offsetTop - headerOffset,
          behavior: 'smooth',
        });
    
        // Manually update the URL hash
        window.history.pushState({}, '', sectionId);
      };
  
    useEffect(() => {
      window.addEventListener('scroll', checkActiveSection);
  
      return () => {
        window.removeEventListener('scroll', checkActiveSection);
      };
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
      ];

  return (
    <div className='bg-black'>
      <Header />
      <div className='h-10'></div>
      <div  className="relative h-[50vh] flex items-center justify-center bg-black text-white" >
       <Image
        src="/home/valley.jpg" 
        alt="Wayanad"
        layout="fill"
        objectFit="cover"
        className="opacity-50" 
      />
        <div className="absolute top-[15vh] text-center">
        <h1 className="text-4xl  mb-2">
          Discover
        </h1>
        <h1 className="text-7xl font-bold mb-4 text-yellow-500 ">
          WAYANAD
        </h1>
        </div>
      </div>
      <div id="top-bar" className="sticky top-[70px] z-50  bg-black bg-opacity-100 border-b-2 border-gray-700 ">
      <nav className="flex justify-between space-x-4 py-4 px-10 w-full text-white">
  {[
    { href: '#overview', label: 'Overview', icon: '/food/searching.png' },
    { href: '#travel', label: 'Travel', icon: '/food/travel.png' },
    { href: '#attraction', label: 'Attraction', icon: '/food/attract.png' },
    { href: '#food', label: 'Food', icon: '/food/food.png' },
    { href: '#culture', label: 'Culture', icon: '/food/culture.png' },
    { href: '#activities', label: 'Activities', icon: '/food/act.png' },
    { href: '#shopping', label: 'Shopping', icon: '/food/shop.png' },
    { href: '#religioussites', label: 'Religious Sites', icon: '/food/religious.png' },
    { href: '#stays', label: 'Stays', icon: '/food/hotel.png' },
    { href: '#camping', label: 'Camping', icon: '/food/camp.png' },
    { href: '#blogs', label: 'Blogs', icon: '/food/blog.png' },
  ].map((link) => (
    <Link href={link.href} key={link.label}>
      <div onClick={(e) => handleNavLinkClick(e, link.href)}
        className={`flex items-center text-sm space-x-2 transition duration-150 ${activeSection === link.href.substring(1) ? 'border-b-2 border-yellow-500' : ''}`}>
        <img src={link.icon} alt={link.label} className="w-5 h-5 mr-2" /> 
        {link.label}
      </div>
    </Link>
  ))}
</nav>

      </div>

      {/* Rest of the page content */}
      <main>
        <section id="overview" >
        <div className="flex flex-row mx-8 text-white mt-10 ">
  <div className="px-2" style={{ width: '80%' }}>
    <h2 className="text-xl font-semibold text-gray-100">"Nature's Abode"
    {/* SVG content, ensure paths don't have a hardcoded `fill` attribute for this to work */}
  </h2>
    <h3 className="text-2xl font-semibold text-yellow-500">Wayanad Tourism</h3>
    <p className="text-base text-gray-400 mt-2">
      Wayanad, nestled in the Western Ghats of Kerala, India, is a district known for its enchanting beauty, rich history, and vibrant culture. It's a place where nature's bounty is on full display, from lush forests and exotic wildlife to sprawling spice plantations and serene water bodies.
    </p>
    <p className={`text-base text-gray-400 mt-2 ${!readMore ? 'hidden sm:block' : 'block'}`}>
      Wayanad's geography is characterized by its rugged terrain, dense forests, and high altitude, making it a part of the majestic Western Ghats. The district is elevated at an altitude ranging from 700 to 2100 meters above sea level, which contributes to its cool climate and rich biodiversity. It's home to various wildlife sanctuaries, including the Wayanad Wildlife Sanctuary, which is a part of the Nilgiri Biosphere Reserve and a key element in conserving the region's flora and fauna.
    </p>
    <p className={`text-base text-gray-400 mt-2 ${readMore ? 'block' : 'block'}`}>
    Wayanad's history is as rich as its landscapes, with evidence of New Stone Age civilization through various archaeological finds. The region was an integral part of the ancient silk routes and has been ruled by several dynasties, including the Kadambas, Hoysalas, and the Vijayanagara Empire. Its historical significance is also marked by the Edakkal Caves, which contain ancient petroglyphs dating back to the Neolithic Age, showcasing the prehistoric culture and civilization of the area.
    </p>
    <p className={`text-base text-gray-400 mt-2 ${readMore ? 'block' : 'hidden'}`}>
    The best time to visit Wayanad is from October to May. During these months, the weather is pleasant, making it ideal for trekking, wildlife safaris, and sightseeing. The monsoon season, from June to September, blankets the region in lush greenery, offering a different kind of beauty, although trekking and outdoor activities might be challenging due to the heavy rains.
    </p>
    <button
      className="text-yellow-600 text-sm hover:underline mt-4 inline-block"
      onClick={() => setReadMore(!readMore)}
    >
      {readMore ? 'Read Less' : 'Read More'}
    </button>
  </div>
  <div className="w-full max-w-[395px] mx-auto">
    <div className="bg-black shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-0 sm:px-6">
        {/* Image container */}
        <div className="image-container" style={{ width: '100%', height: 'auto', textAlign: 'center' }}>
          {/* Replace 'placeholder.png' with your image file */}
          <img src="/about/wyanad_map.png" alt="Wayanad District" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <h3 className="text-lg leading-6 font-medium text-white-900">
          Wayanad District
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-yellow-500 border-b pb-2 border-gray-200">
          Location in Kerala
        </p>
      </div>
      <div >
        <div>
          {/* Content sections */}
          <div className="bg-black-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-400">
             Destination type
            </div>
            <div className="mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">
            Hill Station
            </div>
          </div>
          <div className="bg-black px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-400">
            Best time to visit
            </div>
            <div className="mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">
            Oct-May
            </div>
          </div>
          <div className="bg-black-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-400">
            Ideal duration
            </div>
            <div className="mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">
            2-3 days
            </div>
          </div>
          {/* Add more content sections as needed */}
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
        <section id='travel' className='px-10'>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Travel </span>  </h2>
</div>
        <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderab" />
    </div>
        </section>
        <section id="attraction" className='px-10 '>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Attractions </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
  <div className='py-10'>
    <DestShop />
    </div>
    </section>
    <section id="food" className='mt-10'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold mb-5 ml-10 text-center">
      <span className='text-yellow-500'>Food </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:px-40 md:pb-0 pb-0 p-0 pt-5">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[155px]"
    >
      <Link href="/destinations/wayanad">
        <Image
          src='/food/spice.jpg'
          alt="Spices of Wayanad"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-2xl text-xl">Explore the rich flavors</div>
          <div className="text-white md:text-lg text-base">Spices</div>
        </div>
      </Link>
    </motion.div>
<div className="grid grid-cols-2 gap-4 col-span-3">
<motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/gokarna">
        <Image
          src='/food/sea.jpg'
          alt="Seafood of Gokarna"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Taste the ocean's bounty</div>
          <div className="text-white md:text-lg text-base">Seafood</div>
        </div>
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:row-span-2 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/gokarna">
        <Image
          src='/about/dosa.jpg'
          alt="Bakery Treats"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Savor the sweet and savory</div>
          <div className="text-white md:text-lg text-base">Bakery</div>
        </div>
      </Link>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:col-span-1 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/srinagar">
        <Image
          src='/food/cusine.jpg'
          alt="Kashmiri Cuisine"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Delight in traditional tastes</div>
          <div className="text-white md:text-lg text-base">Cuisine</div>
        </div>
      </Link>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:col-span-1 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/srinagar">
        <Image
          src='/food/saf.jpg'
          alt="Kashmiri Saffron"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Indulge in the aroma of luxury</div>
          <div className="text-white md:text-lg text-base">Saffron</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>
<section id="culture" className='mt-10'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold mb-5 ml-10 text-center">
      <span className='text-yellow-500'>Culture </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:px-40 md:pb-0 pb-0 p-0 pt-5">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[155px]"
    >
      <Link href="/destinations/wayanad">
        <Image
          src='/food/culturea.jpg'
          alt="Spices of Wayanad"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-2xl text-xl">Explore the rich flavors</div>
          <div className="text-white md:text-lg text-base">Spices</div>
        </div>
      </Link>
    </motion.div>
<div className="grid grid-cols-1 gap-4 col-span-3">
<motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/gokarna">
        <Image
          src='/food/cultureb.jpg'
          alt="Seafood of Gokarna"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Taste the ocean's bounty</div>
          <div className="text-white md:text-lg text-base">Seafood</div>
        </div>
      </Link>
    </motion.div>


    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:col-span-1 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[155px]"
    >
      <Link href="/destinations/srinagar">
        <Image
          src='/food/srikanth.jpg'
          alt="Kashmiri Cuisine"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-yellow-500 font-bold md:text-xl text-lg">Delight in traditional tastes</div>
          <div className="text-white md:text-lg text-base">Cuisine</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>
        <section id="activities" className='px-10'>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Activities </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderc" />
    </div>
        </section>
        <section id="shopping" className='px-10'>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Shopping </span> </h2>
</div>
  <div >
    <DestShop />
    </div>
        </section>
        <section id="religioussites" className='px-10' >
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Religious Sites </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
  <div className='py-10'>
    <DestShop />
    </div>
        </section>
    
        <section id="stays" className='px-10 '>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Stays </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderstay" />
    </div>
    </section>
    <section id="camping" className='px-10 '>
        <div className="text-center">
  <h2 className="text-3xl font-bold my-6 text-white"><span className='text-yellow-500'>Camping Sites </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div>
    <TrekSlider destination={destinations2}  sliderId="destslidercamp" />
    </div>
    </section>
        <section id="blogs" className=''>
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
        </section>
        <section id="related" className=''>
<div>
<h2 className="text-4xl font-semibold mb-4 text-white px-10">Related destinations for Wayanad</h2>
    <RelatedDestinations />
    </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Destmainn
