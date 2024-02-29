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
      title: "Chikmagalur Weekend Getaway",
    //   location: "Karnataka",
      price: 5499,
      originalprice:6999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/siri_11zon.webp',
      url:"/tour/wayanad-weekend-getaway"
    },
    {
      title: "Chikmagalur Backpacking Tour",
    //   location: "Karnataka",
      price: 5499,
      originalprice:6999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/3_3_11zon.webp',
      url:"/tour/chikmagalur-weekend-getaway"
    },
    {
      title: "Chikmagalur Tour: A 3-Day Nature Escape",
    //   location:"Karnataka",
      price: 7199,
      img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/Jhari_11zon.webp",
      url:"/tour/gokarna-murudeshwar-weekend-getaway"
    },
]
const destinations3 = [
    {
      title: "Java Rain Resort",
      price: 8999,
      img: '/dest/Shamb.avif',
      url:"/tour/wayanad-weekend-getaway"
    },
    {
      title: "Stuga Homestay",
      price: 8999,
      img: '/dest/Stuga.jpg',
      url:"/tour/chikmagalur-weekend-getaway"
    },
    {
      title: "Rain Raga Homestay",
      price: 9999,
      img: "/dest/Rain.jpg",
      url:"/tour/gokarna-murudeshwar-weekend-getaway"
    },
    {
        title: "The Serai - Chikmagalur",
        price: 25999,
        img: "/dest/Serai.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
      {
        title: "Vismitha County Resort",
        price: 9999,
        img: "/dest/Vismitha.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
]
const destinations4 = [
    {
      title: "Kudremukh Trek",
      price: 3999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--56_26_11zon.webp',
      url:"/tour/wayanad-weekend-getaway"
    },
    {
      title: "Netravati Trek",
      price: 3999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--126_17_11zon.webp',
      url:"/tour/chikmagalur-weekend-getaway"
    },
    {
      title: "Ethina Bhuja Trek",
      price: 3999,
      img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/eth_11zon.webp',
      url:"/tour/gokarna-murudeshwar-weekend-getaway"
    },
    {
        title: "Bhadra River Rafting",
        price: 800,
        img: "/dest/bhadra.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
      {
        title: "Yagachi water Sports",
        price: 500,
        img: "/dest/Yagachi.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
      {
        title: "Bhadra wildlife safari",
        price: 3000,
        img: "/dest/wildlife.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
      {
        title: "Kudremukh wildlife safari",
        price: 1300,
        img: "/dest/tiger.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
]
const destinations5 = [
    {
      title: "Bhagavathi Nature Camp",
      price: 8999,
      img: '/dest/bhaga.jpg',
      url:"/tour/wayanad-weekend-getaway"
    },
    {
      title: "The River Tern Resort Bhadra",
      price: 8999,
      img: '/dest/river.jpg',
      url:"/tour/chikmagalur-weekend-getaway"
    },
    {
      title: "Rivermist Resort",
      price: 9999,
      img: "/dest/rivermist.jpg",
      url:"/tour/gokarna-murudeshwar-weekend-getaway"
    },
    {
        title: "Villa Urvinkhan Luxury Resort",
        price: 25999,
        img: "/dest/Villa.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
      {
        title: "Honeydewwz Exoticaa Hotel & Resort",
        price: 9999,
        img: "/dest/honey.jpg",
        url:"/tour/gokarna-murudeshwar-weekend-getaway"
      },
]
const NavLinks = [
    { href: '#overview', label: 'Overview', icon: '/food/searching.png' },
    { href: '#travel', label: 'Tour', icon: '/food/travel.png' },
    { href: '#attraction', label: 'Attraction', icon: '/food/attract.png' },
    { href: '#activities', label: 'Activities', icon: '/food/act.png' },
    { href: '#food', label: 'Food', icon: '/food/food.png' },
    { href: '#stays', label: 'Stays', icon: '/food/hotel.png' },
    { href: '#shopping', label: 'Shopping', icon: '/food/shop.png' },
    { href: '#culture', label: 'Culture', icon: '/food/culture.png' },
    { href: '#religioussites', label: 'Religious Sites', icon: '/food/religious.png' },
    { href: '#camping', label: 'Camping', icon: '/food/camp.png' },
    { href: '#blogs', label: 'Blogs', icon: '/food/blog.png' },
  ];

const Destmainn = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [readMore, setReadMore] = useState(false);

    const [isShown, setIsShown] = useState(false);
  const maxLength = 300;
  // Assume this is the text you want to display
  const fullText = `Discover the amazing attractions in Chikmagalur, a hidden gem nestled in the heart of Karnataka's coffee district. From the beauty of the Baba Budangiri hills to the breathtaking views atop Mullayanagiri, the highest peak in Karnataka, Chikmagalur offers a wide range of experiences for every traveler. Dive into the rich history and culture at the Chikmagalur Coffee Museum, where the story of coffee unfolds, or find peace within the ancient walls of the Sharadamba Temple. For nature enthusiasts, Hebbe Falls and the wildlife sanctuary at Bhadra are must-visit places. Whether it's exploring the lush coffee plantations, engaging in adventurous treks, or enjoying the hospitality of coffee plantation stays, Chikmagalur is a destination that promises unforgettable memories. Perfect for those seeking an escape into nature or a deep dive into the world of coffee, Chikmagalur's attractions are as diverse as they are captivating. Ready to explore the wonders of Chikmagalur? Plan your adventure today and immerse yourself in the unparalleled beauty and culture of Karnataka's coffee heartland. Book your tour, find the perfect stay, or get more information on our exclusive Chikmagalur travel packages.`;

  const displayText = isShown ? fullText : `${fullText.substring(0, maxLength)}...`;

  const toggleShown = () => {
    setIsShown(!isShown);
  };
  const [isShowna, setIsShowna] = useState(false);
  // Assume this is the text you want to display
  const fullTexta = `Dive into the heart of Chikmagalur, where the thrill of adventure and the peace of nature blend seamlessly. Known for its sprawling coffee estates and towering peaks, this gem in the Western Ghats invites you to explore its diverse activities. From challenging treks up Mullayanagiri, the tallest peak in Karnataka, to leisurely walks through aromatic coffee plantations, each experience in Chikmagalur is a doorway to the extraordinary. Get ready to embark on an adventure that captures the essence of Chikmagalur's breathtaking landscapes and rich heritage.`;

  const displayTexta = isShowna ? fullTexta : `${fullText.substring(0, maxLength)}...`;

  const toggleShowna = () => {
    setIsShowna(!isShowna);
  };

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
      const dest1 = [
        {
          href: '/destinations/gokarna',
          src: '/dest/coffee.jpg',
          alt: 'Coffee Museum',
          mainText: 'Explore Traditional Markets',
          secondaryText: 'Coffe Museum',
        },
        {
          href: '/destinations/mysore',
          src: '/dest/jahari.jpg',
          alt: 'Mysore Silk',
          mainText: 'Discover Silk and Spices',
          secondaryText: 'Jahari Waterfalls',
        },
        {
          href: '/destinations/jaipur',
          src: '/dest/baba.jpg',
          alt: 'Traditional Jewelry',
          mainText: 'Find Handcrafted Jewels',
          secondaryText: 'Baba Budangiri',
        },
        {
          href: '/destinations/goa',
          src: '/dest/Hire.jpg',
          alt: 'Goan Cashews',
          mainText: 'Taste Local Delicacies',
          secondaryText: 'Hirekolale Lake',
        },
        {
          href: '/destinations/kochi',
          src: '/dest/mulan.jpg',
          alt: 'Kochi Spices',
          mainText: 'Spice Up Your Life',
          secondaryText: 'Mullayanagiri',
        },
        {
          href: '/destinations/leh',
          src: '/dest/hebbe.jpg',
          alt: 'Leh Woolens',
          mainText: 'Warm Up with Woolens',
          secondaryText: 'Hebbe WaterFalls',
        },
        {
          href: '/destinations/agra',
          src: '/dest/Siri.jpg',
          alt: 'Agra Marble',
          mainText: 'Marvel at Marble Crafts',
          secondaryText: 'Siri Cafe',
        },
        // Add more destinations as needed
      ];
      const dest2 = [
        {
          href: '/destinations/gokarna',
          src: '/dest/koda.jpg',
          alt: 'Coffee Museum',
          mainText: 'Explore Traditional Markets',
          secondaryText: 'Shri Kodanda Ramaswamy Temple Hiremagalur',
        },
        {
          href: '/destinations/mysore',
          src: '/dest/Sringeri.jpg',
          alt: 'Mysore Silk',
          mainText: 'Discover Silk and Spices',
          secondaryText: 'Sringeri Temple',
        },
        {
          href: '/destinations/jaipur',
          src: '/dest/babaa.jpg',
          alt: 'Traditional Jewelry',
          mainText: 'Find Handcrafted Jewels',
          secondaryText: 'Baba Budangiri',
        },
        {
          href: '/destinations/goa',
          src: '/dest/hora.jpg',
          alt: 'Goan Cashews',
          mainText: 'Taste Local Delicacies',
          secondaryText: 'Horanadu Annapoorneshwari Temple',
        },
        {
          href: '/destinations/kochi',
          src: '/dest/jamia.jpg',
          alt: 'Kochi Spices',
          mainText: 'Spice Up Your Life',
          secondaryText: 'Jamia Masjid Chikmagalur',
        },
        {
          href: '/destinations/leh',
          src: '/dest/joseph.jpg',
          alt: 'Leh Woolens',
          mainText: 'Warm Up with Woolens',
          secondaryText: 'St. Josephs Cathedral',
        },
        {
          href: '/destinations/agra',
          src: '/dest/parsawan.jpg',
          alt: 'Agra Marble',
          mainText: 'Marvel at Marble Crafts',
          secondaryText: 'Sri Parsawanath Tirthankara Jain Temple',
        },
        {
            href: '/destinations/agra',
            src: '/dest/devi.jpg',
            alt: 'Agra Marble',
            mainText: 'Marvel at Marble Crafts',
            secondaryText: 'Deviramma Temple',
          },
        // Add more destinations as needed
      ];
      const dest3 = [
        {
          href: '/destinations/gokarna',
          src: '/dest/beans.jpg',
          alt: 'Coffee Museum',
          mainText: 'Explore Traditional Markets',
          secondaryText: 'Where to purchase the best Coffe beans ?',
        },
        {
          href: '/destinations/mysore',
          src: '/dest/street.jpg',
          alt: 'Mysore Silk',
          mainText: 'Discover Silk and Spices',
          secondaryText: 'What to buy in Chikmagalur ?',
        },
        {
          href: '/destinations/jaipur',
          src: '/dest/sandal.webp',
          alt: 'Traditional Jewelry',
          mainText: 'Find Handcrafted Jewels',
          secondaryText: 'where to buy Sandalwood in Chikmagalur ?',
        },
        {
          href: '/destinations/kochi',
          src: '/dest/spices.jpg',
          alt: 'Kochi Spices',
          mainText: 'Spice Up Your Life',
          secondaryText: 'Where do you get the Best spices in Chikmagalur',
        },
        {
          href: '/destinations/leh',
          src: '/dest/coffeeseeds.jpg',
          alt: 'Leh Woolens',
          mainText: 'Warm Up with Woolens',
          secondaryText: 'Types of Coffe beans in Karnataka',
        },
        {
          href: '/destinations/agra',
          src: '/dest/girl.jpg',
          alt: 'Agra Marble',
          mainText: 'Marvel at Marble Crafts',
          secondaryText: 'Unravelling the Timeless Charm of Soft Silk Sarees',
        },
        {
            href: '/destinations/agra',
            src: '/dest/handicraft.jpg',
            alt: 'Agra Marble',
            mainText: 'Marvel at Marble Crafts',
            secondaryText: 'Best Places to Buy Handicraft',
          },
        {
            href: '/destinations/goa',
            src: '/dest/temple.jpg',
            alt: 'Goan Cashews',
            mainText: 'Taste Local Delicacies',
            secondaryText: 'Buy cultural ornaments in Chikmagalur',
          },
        // Add more destinations as needed
      ];
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-10'></div>
      <div  className="relative h-[50vh] flex items-center justify-center bg-black text-white" >
       <Image
        src="/dest/chikmagalur.jpg" 
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
          CHIKMAGALUR
        </h1>
        </div>
      </div>
      <div id="top-bar" className="sticky top-[60px] z-30 bg-black bg-opacity-100 border-b-2 border-gray-700">
      <nav className="flex justify-center items-center space-x-4 md:py-4 py-2 md:px-5 px-2 w-full text-white">
        <Swiper
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode]}
          spaceBetween={0}
          slidesPerView={3.5} // Default to 3 for mobile
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
                initialSlide: 0,
                spaceBetween: 10
            }
          }}
        >
          {NavLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <Link href={link.href}>
                <div onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`flex flex-col md:flex-row  items-center justify-center md:text-sm text-base space-x-2 transition duration-150 cursor-pointer md:pb-1 ${activeSection === link.href.substring(1) ? 'border-b-2 border-yellow-500' : ''}`}>
                  <img src={link.icon} alt={link.label} className="md:w-5 md:h-5 w-8 h-8 md:mr-2" />
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
  
    <h2 className="text-2xl font-semibold text-yellow-500">Chikmagalur Tourism</h2>
    <p className="md:text-base text-sm text-gray-400 mt-2">
    Nestled in the serene foothills of the Western Ghats in Karnataka, India, Chikmagalur is a picturesque town that captivates visitors with its mesmerizing natural beauty and tranquil ambiance. Known as the "Coffee Land of Karnataka," Chikmagalur is revered for its lush coffee plantations that sprawl across the rolling hills, exuding the rich aroma of freshly brewed coffee. This charming town is not just a haven for coffee lovers but also a sanctuary for nature enthusiasts, trekkers, and anyone seeking solace away from the hustle and bustle of city life.
Weather in Chikmagalur: A Year-Round Delight
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${!readMore ? 'hidden sm:block' : 'block'}`}>
    Chikmagalur boasts a moderate climate, with temperatures from 11°C to 35°C, making it welcoming year-round. The cooler months, September to March, are perfect for exploring, while the monsoon season, June to September, offers lush landscapes and quieter visits. Post-monsoon, waterfalls are a splendid sight, and summer is ideal for the cooler highlands.
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${readMore ? 'block' : 'block'}`}>
    Chikmagalur, "younger daughter's town," has a rich history dating back to dynasties like the Hoysalas and Vijayanagara. 
    </p>
    <p className={`md:text-base text-sm text-gray-400 mt-2 ${readMore ? 'block' : 'hidden'}`}>
    The region flourished under the Hoysalas in the 12th century, notable for its architectural achievements. Coffee cultivation, initiated in the 17th century by Baba Budan, significantly impacted its culture and economy, blending tradition with modernity.
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
          <img src="/dest/chikmagmap.png" alt="Wayanad District" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <h3 className="text-lg leading-6 font-medium text-white-900">
          Chikmaglur District
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-yellow-500 border-b pb-2 border-gray-200">
          Location in Karnataka
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
    Sep-March
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
  <h2 className="text-3xl font-bold md:my-6 my-4 text-white"><span className='text-yellow-500'>Tour </span> Packages </h2>
</div>
        <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderab" />
    </div>
        </section>
        <section id="attraction" className='md:px-10 px-4'>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mt-8  mb-4 text-white"><span className='text-yellow-500'>Attractions </span> in Chikmaglur  </h2>
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
    <DestShop destinations= {dest1}/>
    </div>
    </section>
    <section id="activities" className='md:px-10 px-2'>
        <div className="text-center ">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Activities </span> in Chikmagalur  </h2>
</div>
        <div className="text-center md:px-0 px-2">
      <p className="text-white text-sm md:text-base">
      {displayTexta}</p>
      <button
        onClick={toggleShowna}
        className="text-gray-400 mt-2 flex items-center justify-center mx-auto"
      >
        Show {isShowna ? 'less' : 'more'}
        <FontAwesomeIcon icon={isShowna ? faChevronUp : faChevronDown} className="ml-1" />
      </button>
    </div>
    <div className='px-0 md:px-0'>
    <TrekSlider destination={destinations4} sliderId="destsliderc" />
    </div>
        </section>
    <section id="food" className='md:mt-10 px-4 md:px-0'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold md:mb-5 mt-4 mb-5 text-center">
      <span className='text-yellow-500'>Food </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 md:gap-6 md:px-40 md:pb-0 pb-0 p-0 ">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[200px]"
    >
      <Link href="/destinations/wayanad">
        <Image
          src='/dest/koli.avif'
          alt="Spices of Wayanad"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-white font-bold md:text-2xl text-base">Explore the rich flavors</div>
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
          <div className="text-white font-bold md:text-xl text-sm">Taste the ocean's bounty</div>
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
          <div className="text-white font-bold md:text-xl text-sm">Savor the sweet and savory</div>
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
          <div className="text-white font-bold md:text-xl text-sm">Delight in traditional tastes</div>
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
          <div className="text-white font-bold md:text-xl text-sm">Indulge in the aroma of luxury</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>

<section id="stays" className='md:px-10 px-2 '>
        <div className="text-center ">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Stays </span> in Chikmagalur  </h2>
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
    <TrekSlider destination={destinations3}  sliderId="destsliderstay" />
    </div>
    </section>
    <section id="shopping" className='md:px-10 px-4'>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Shopping </span> </h2>
</div>
  <div >
    <DestShop destinations= {dest3}/>
    </div>
        </section>
<section id="culture" className='md:mt-10 mt-8 px-4 md:px-0'>
  <div className=" text-white">
    <h2 className="text-3xl font-bold md:mb-5  text-center">
      <span className='text-yellow-500'>Culture </span>
    </h2>
  </div>
  <div className="grid md:grid-cols-6 grid-cols-1 md:gap-6 md:px-40 md:pb-0 pb-0 p-0 pt-5">
  <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-2 md:col-span-3 relative overflow-hidden w-full rounded-lg md:h-[460px] h-[255px]"
    >
      <Link href="/destinations/wayanad">
        <Image
          src='/dest/museum.jpg'
          alt="Spices of Wayanad"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-white font-bold md:text-2xl text-lg">Explore the rich flavors</div>
        </div>
      </Link>
    </motion.div>
<div className="grid md:grid-cols-1 grid-cols-2 gap-4 col-span-3 md:mt-0 
mt-4">
<motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:row-span-2 relative overflow-hidden w-full rounded-lg md:h-[220px] h-[200px]"
    >
      <Link href="/destinations/gokarna">
        <Image
          src='/dest/drum.webp'
          alt="Seafood of Gokarna"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-white font-bold md:text-xl text-sm">Taste the ocean's bounty</div>
        </div>
      </Link>
    </motion.div>


    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 md:col-span-1 relative overflow-hidden w/full rounded-lg md:h-[220px] h-[200px]"
    >
      <Link href="/destinations/srinagar">
        <Image
          src='/dest/dola.jpg'
          alt="Kashmiri Cuisine"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 p-3 md:p-5">
          <div className="text-white font-bold md:text-xl text-sm">Delight in traditional tastes</div>
        </div>
      </Link>
    </motion.div>
    </div>
  </div>
</section>

   
        <section id="religioussites" className='md:px-10 px-4' >
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Religious Sites </span> in Chikmagalur  </h2>
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
    <DestShop destinations= {dest2}/>
    </div>
        </section>
    
    <section id="camping" className='md:px-10 px-2 '>
        <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Camping Sites </span> in Chikmagalur  </h2>
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
    <TrekSlider destination={destinations5}  sliderId="destslidercamp" />
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
<h2 className="md:text-4xl text-xl font-semibold md:mb-4 text-white md:px-10 px-4">Related destinations for Chikmagalur</h2>
    <RelatedDestinations />
    </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Destmainn

