'use client'
import Header from '../Navbar/Header/Header'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState, MouseEvent, useRef  } from 'react';
import Footer from '../Navbar/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TrekSlider from '../Home/Trekslider/Trekslide';
import { motion } from 'framer-motion';
import RelatedDestinations from './RelatedDest';
import DestShop from './DestShop';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import SwiperCore from 'swiper';
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
const NavLinks = [
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
  ];

const Destmainn = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isShown, setIsShown] = useState(false);
    const [readMore, setReadMore] = useState(false);
    
    const text = `Bangalore, officially known as Bengaluru, is the capital city of the southern Indian state of Karnataka. Known as the "Silicon Valley of India", Bangalore is a hub for the country's information technology industry. The city boasts a vibrant and diverse culture, with a mix of traditional and modern elements. Bangalore is also known for its beautiful parks, historic landmarks, and vibrant nightlife. The city is home to numerous universities and research institutions, making it...`;
    const maxLength= 300
   
    const displayText = isShown ? text : text.substring(0, maxLength) + '...';
    const toggleShown = () => setIsShown(!isShown);
    const swiperRef = useRef<SwiperCore | null>(null);
    const checkActiveSection = () => {
        const offset = 170; // Height of your fixed header or any other offset
        const currentScrollPosition = window.pageYOffset + offset;
        let currentSection = 'overview'; // Default to the first section
        
        NavLinks.forEach((link, index) => {
          const sectionId = link.href.substring(1); // Adjusted to remove '#' from sectionId
          const section = document.getElementById(sectionId);
          if (section && currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetTop + section.offsetHeight) {
            currentSection = sectionId;
            setActiveSection(currentSection);
            if (swiperRef.current) {
                (swiperRef.current as any).slideTo(index); // Use 'any' or a more specific type if known
              }
          }
        });
      };
      
      const handleNavLinkClick = (e: MouseEvent<HTMLDivElement>, sectionId: string) => {
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
        // Add two more items
        {
          title: 'Beach Volleyball Tournament',
          category: 'SPORTS',
          description: 'Experience the thrill of beach volleyball at our annual tournament.',
          imageUrl: '/destination/GOA.jpg',
        },
        {
          title: 'Jazz in the Park',
          category: 'MUSIC',
          description: 'Enjoy an evening of smooth jazz music in the serene park setting.',
          imageUrl: '/destination/vietname.jpg',
        }
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
        <h1 className="md:text-4xl  text-2xl mb-2">
          Discover
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold mb-4 text-yellow-500 ">
          WAYANAD
        </h1>
        </div>
      </div>
      <div id="top-bar" className="sticky top-[60px] z-30 bg-black bg-opacity-100 border-b-2 border-gray-700">
      <nav className="flex justify-center items-center space-x-4 md:py-4 py-2 md:px-5 px-2 w-full text-white">
        <Swiper
        // ref={swiperRef}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode]}
          spaceBetween={0}
          slidesPerView={4} // Default to 3 for mobile
          freeMode={true}
          breakpoints={{
            // when window width is >= 640px
            500: {
                slidesPerView: 5,
                initialSlide: 0
              },
            1000: {
              slidesPerView: 10,
              initialSlide: 0
            },
            1300:{
                slidesPerView: 11,
                initialSlide: 0
            }
          }}
        >
          {NavLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <Link href={link.href}>
                <div onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`flex flex-col md:flex-row  items-center justify-center text-sm space-x-2 transition duration-150 cursor-pointer md:pb-1 ${activeSection === link.href.substring(1) ? 'border-b-2 border-yellow-500' : ''}`}>
                  <img src={link.icon} alt={link.label} className="w-5 h-5 md:mr-2" />
                  {link.label}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </div>
      {/* Rest of the page content */}
      <main>
        <section id="overview" >
        <div className="flex md:flex-row  flex-col md:mx-8 mx-2 text-white md:mt-10 mt-4 ">
  <div className="px-2 md:w-[80%]" >
    <h2 className="text-xl font-semibold text-gray-100">"Nature's Abode"
    {/* SVG content, ensure paths don't have a hardcoded `fill` attribute for this to work */}
  </h2>
    <h3 className="text-2xl font-semibold text-yellow-500">Wayanad Tourism</h3>
    <p className="md:text-base text-sm text-gray-400 mt-2">
      Wayanad, nestled in the Western Ghats of Kerala, India, is a district known for its enchanting beauty, rich history, and vibrant culture. It's a place where nature's bounty is on full display, from lush forests and exotic wildlife to sprawling spice plantations and serene water bodies.
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${!readMore ? 'hidden sm:block' : 'block'}`}>
      Wayanad's geography is characterized by its rugged terrain, dense forests, and high altitude, making it a part of the majestic Western Ghats. The district is elevated at an altitude ranging from 700 to 2100 meters above sea level, which contributes to its cool climate and rich biodiversity. It's home to various wildlife sanctuaries, including the Wayanad Wildlife Sanctuary, which is a part of the Nilgiri Biosphere Reserve and a key element in conserving the region's flora and fauna.
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${readMore ? 'block' : 'block'}`}>
    Wayanad's history is as rich as its landscapes, with evidence of New Stone Age civilization through various archaeological finds. The region was an integral part of the ancient silk routes and has been ruled by several dynasties, including the Kadambas, Hoysalas, and the Vijayanagara Empire. Its historical significance is also marked by the Edakkal Caves, which contain ancient petroglyphs dating back to the Neolithic Age, showcasing the prehistoric culture and civilization of the area.
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${readMore ? 'block' : 'hidden'}`}>
    The best time to visit Wayanad is from October to May. During these months, the weather is pleasant, making it ideal for trekking, wildlife safaris, and sightseeing. The monsoon season, from June to September, blankets the region in lush greenery, offering a different kind of beauty, although trekking and outdoor activities might be challenging due to the heavy rains.
    </p>
    <button
      className="text-yellow-600 text-sm hover:underline mt-4 inline-block"
      onClick={() => setReadMore(!readMore)}
    >
      {readMore ? 'Read Less' : 'Read More'}
    </button>
  </div>
  <div className="w-full max-w-[395px] mx-auto ">
    <div className="bg-black shadow overflow-hidden rounded-xl border border-gray-300 my-5 md:my-0">
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
          <div className="bg-black-50 px-4 py-4 grid grid-cols-3 gap-4">
  <div className="text-sm font-medium text-white">
    Destination type
  </div>
  <div className=" text-sm text-gray-500 col-span-2">
    Hill Station
  </div>
</div>
<div className="bg-black px-4 py-2 grid grid-cols-3 gap-4 ">
  <div className="text-sm font-medium text-white">
    Best time to visit
  </div>
  <div className="text-sm text-gray-500 col-span-2">
    Oct-May
  </div>
</div>
<div className="bg-black-50 px-4 py-3 grid grid-cols-3 gap-4 ">
  <div className="text-sm font-medium text-white">
    Ideal duration
  </div>
  <div className=" text-sm text-gray-500 col-span-2">
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
        <section id='travel' className='md:px-10 px-2'>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 my-4 text-white"><span className='text-yellow-500'>Travel </span>  </h2>
</div>
        <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderab" />
    </div>
        </section>
        <section id="attraction" className='md:px-10 px-4'>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mt-8  mb-4 text-white"><span className='text-yellow-500'>Attractions </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white text-sm md:text-base">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
  <div className='md:py-10 md:pb-0 py-4'>
    <DestShop />
    </div>
    </section>
    <section id="food" className='md:mt-10 px-4 md:px-0'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold md:mb-5 mt-4 mb-5 text-center">
      <span className='text-yellow-500'>Food </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 md:gap-4 md:px-40 md:pb-0 pb-0 p-0 ">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[200px]"
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
          <div className="text-yellow-500 font-bold md:text-2xl text-base">Explore the rich flavors</div>
          <div className="text-white md:text-lg text-sm">Spices</div>
        </div>
      </Link>
    </motion.div>
<div className="grid grid-cols-2 gap-4 col-span-3 mt-4 md:mt-0">
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Taste the ocean's bounty</div>
          <div className="text-white md:text-lg text-xs">Seafood</div>
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Savor the sweet and savory</div>
          <div className="text-white md:text-lg text-xs">Bakery</div>
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Delight in traditional tastes</div>
          <div className="text-white md:text-lg text-xs">Cuisine</div>
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Indulge in the aroma of luxury</div>
          <div className="text-white md:text-lg text-xs">Saffron</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>
<section id="culture" className='md:mt-10 mt-8 px-4 md:px-0'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold md:mb-5  text-center">
      <span className='text-yellow-500'>Culture </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:px-40 md:pb-0 pb-0 p-0 pt-5">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[255px]"
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
          <div className="text-yellow-500 font-bold md:text-2xl text-lg">Explore the rich flavors</div>
          <div className="text-white md:text-lg text-sm">Spices</div>
        </div>
      </Link>
    </motion.div>
<div className="grid md:grid-cols-1 grid-cols-2 gap-4 col-span-3">
<motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[200px]"
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Taste the ocean's bounty</div>
          <div className="text-white md:text-lg text-xs">Seafood</div>
        </div>
      </Link>
    </motion.div>


    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:col-span-1 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[200px]"
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
          <div className="text-yellow-500 font-bold md:text-xl text-sm">Delight in traditional tastes</div>
          <div className="text-white md:text-lg text-xs">Cuisine</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>
        <section id="activities" className='md:px-10 px-2'>
        <div className="text-center ">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Activities </span> in Wayanad  </h2>
</div>
        <div className="text-center md:px-0 px-2">
      <p className="text-white text-sm md:text-base">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div className='px-0 md:px-0'>
    <TrekSlider destination={destinations2}  sliderId="destsliderc" />
    </div>
        </section>
        <section id="shopping" className='md:px-10 px-4'>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Shopping </span> </h2>
</div>
  <div >
    <DestShop />
    </div>
        </section>
        <section id="religioussites" className='md:px-10 px-4' >
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Religious Sites </span> in Wayanad  </h2>
</div>
        <div className="text-center">
      <p className="text-white text-sm md:text-base">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
  <div className='md:py-5 md:pb-0'>
    <DestShop />
    </div>
        </section>
    
        <section id="stays" className='md:px-10 px-2 '>
        <div className="text-center ">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Stays </span> in Wayanad  </h2>
</div>
        <div className="text-center md:px-0 px-2">
      <p className="text-white text-sm md:text-base">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div >
    <TrekSlider destination={destinations2}  sliderId="destsliderstay" />
    </div>
    </section>
    <section id="camping" className='md:px-10 px-2 '>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Camping Sites </span> in Wayanad  </h2>
</div>
        <div className="text-center md:px-0 px-2">
      <p className="text-white text-sm md:text-base">{displayText}</p>
      <button
        onClick={toggleShown}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShown ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div >
    <TrekSlider destination={destinations2}  sliderId="destslidercamp" />
    </div>
    </section>
        <section id="blogs" className='md:px-10 px-4'>
        <div className="bg-black ">
    <div className="text-center md:my-6 mb-3 mt-8">
    <h2 className="text-3xl font-bold text-white mb-2">Adventurer's <span className='text-yellow-500'>Digest </span></h2>
    <p className="text-gray-300 mb-4">Curated guides for every traveler's need.</p>
  </div>
  <Swiper
      modules={[FreeMode]}
      spaceBetween={20}
      slidesPerView={1.4} // Use 'auto' for flexible slide width or a specific number for fixed number of slides
      freeMode={true}
      breakpoints={{
        500: {
            slidesPerView: 3,
            initialSlide: 0
          },
        1000: {
          slidesPerView: 3.8,
          initialSlide: 0
        },
        1300:{
            slidesPerView: 4.5,
            initialSlide: 0
        }
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="shadow-lg" style={{ width: 'auto', flexShrink: 0 }}> {/* Adjust width as needed */}
          <div className="rounded overflow-hidden">
            <div className='relative h-[180px] w-full'>
              <Image className="rounded-lg" src={card.imageUrl} alt={card.title} objectFit='cover' layout='fill' />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="py-2">
              <div className="bg-gray-200 text-black text-xs font-semibold px-2 inline-block rounded-full uppercase tracking-wide">
                {card.category}
              </div>
              <h3 className="font-bold text-base mt-1 text-gray-300">{card.title}</h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{card.description}</p>
            </div>
            <div className="pr-4 py-2 flex items-center justify-between">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-xl text-sm">
                Visit Website
              </button>
              <button className="text-yellow-500 ml-4">
                Learn More →
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
        </section>
        <section id="related" className='mt-8 md:mt-10'>
<div>
<h2 className="md:text-4xl text-xl font-semibold md:mb-4 text-white md:px-10 px-4">Related destinations for Wayanad</h2>
    <RelatedDestinations />
    </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Destmainn

