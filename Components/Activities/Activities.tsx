'use client'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import Header from '../Navbar/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { TbCircleCheck, TbCircleX  } from 'react-icons/tb';
import Actaccordian from './Actaccordian';
import { FaCaretUp, FaCaretDown, FaCircle } from 'react-icons/fa';

const NavLinks = [
    { href: '#overview', label: 'Overview', icon: '/food/searching.png' },
    { href: '#higlight', label: 'Highlights', icon: '/food/travel.png' },
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
  const faqs=[
    {
      "question": "What is your return policy?",
      "answer": "We accept returns within 30 days of purchase, provided the item is in its original condition."
    },
    {
      "question": "How long does shipping take?",
      "answer": "Shipping times vary by location. Generally, orders are delivered within 3-5 business days."
    },
    {
      "question": "Do you offer international shipping?",
      "answer": "Yes, we offer international shipping to select countries. Shipping rates and times vary by destination."
    },
    {
      "question": "How can I track my order?",
      "answer": "Once your order has been shipped, you will receive an email with tracking information."
    },
    {
      "question": "Can I change or cancel my order?",
      "answer": "Orders can be changed or cancelled within 24 hours of placement. Please contact customer service for assistance."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
      "question": "Is my personal information secure?",
      "answer": "We take your privacy seriously and use industry-standard security measures to protect your information."
    },
    {
      "question": "Do you have a physical store?",
      "answer": "No, we are exclusively an online store, which allows us to offer a wider selection of products at competitive prices."
    },
    {
      "question": "How do I make a return or exchange?",
      "answer": "Please contact our customer service team with your order number, and they will guide you through the process."
    },
    {
      "question": "Do you offer gift cards?",
      "answer": "Yes, we offer digital gift cards in various denominations. They are sent via email and can be used to shop online."
    },
  ]
 const days= [
    {
      "day": "Day 1",
      "cityName": "Paris",
      "description": [
        "Arrival and check-in at the hotel.",
        "Evening walk along the Seine.",
        "Visit the Eiffel Tower."
      ],
      "meals": "Welcome Dinner",
    },
    {
      "day": "Day 2",
      "cityName": "Paris",
      "description": [
        "Morning visit to the Louvre.",
        "Afternoon stroll through Montmartre.",
        "Dinner at a local bistro."
      ],
      "meals": "Breakfast, Lunch, Dinner",
      "image": "/dest/coffee.jpg",
      "imagealt": "Louvre Museum"
    },
]
type OpenDays = {
    [key: number]: boolean;
  };
const Activities = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [readMore, setReadMore] = useState(false);
    const [openDay, setOpenDay] = useState<OpenDays>({});
    const toggleOpen = (index: number) => {
        setOpenDay((prevOpenDays: { [key: number]: boolean }) => ({
          ...prevOpenDays,
          [index]: !prevOpenDays[index] 
        }));
      }
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
  return (
    <div className='bg-white'>
      <Header />
      <div className="absolute left-[16vw] bottom-[42vh] transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-7xl text-5xl z-10 font-bold">
    Common Name
  </div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        modules={[EffectFade,Autoplay]}
        autoplay={{
            delay: 1500,
          }}
      >
        <SwiperSlide>
            <div className='relative h-[400px] w-full'>
            <Image src="/dest/bhadra.jpg" className='' objectFit='cover' layout='fill' alt='bhardra' />
       
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative h-[400px] w-full'>
            <Image src="/dest/devi.jpg" className='' objectFit='cover' layout='fill' alt='bhardra' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative h-[400px] w-full'>
            <Image src="/dest/drum.jpg" className='' objectFit='cover' layout='fill' alt='bhardra' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative h-[400px] w-full'>
            <Image src="/dest/hebbe.jpg" className='' objectFit='cover' layout='fill' alt='bhardra' />
            </div>
        </SwiperSlide>
      </Swiper>
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
              slidesPerView: 9,
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
                  className={`flex flex-col md:flex-row  items-center justify-center md:text-xl text-base space-x-2 transition duration-150 cursor-pointer md:pb-1 ${activeSection === link.href.substring(1) ? 'border-b-2 border-yellow-500' : ''}`}>
                  {link.label}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </div>
    <div className='flex flex-row mx-8 gap-3 ' >

    <div className="px-2 md:w-[75%]" >
    <section id="overview" >
        <div className="bg-gray-200 text-black md:mt-5 mt-4 p-4 rounded-xl shadow-md ">
    <h2 className="text-2xl font-semibold text-black">Overview</h2>
    <p className="md:text-base text-sm text-black mt-2">
    Nestled in the serene foothills of the Western Ghats in Karnataka, India, Chikmagalur is a picturesque town that captivates visitors with its mesmerizing natural beauty and tranquil ambiance. Known as the "Coffee Land of Karnataka," Chikmagalur is revered for its lush coffee plantations that sprawl across the rolling hills, exuding the rich aroma of freshly brewed coffee. This charming town is not just a haven for coffee lovers but also a sanctuary for nature enthusiasts, trekkers, and anyone seeking solace away from the hustle and bustle of city life.
Weather in Chikmagalur: A Year-Round Delight
    </p>
    <p className={`md:text-base text-sm text-black mt-2 ${!readMore ? 'hidden sm:block' : 'block'}`}>
    Chikmagalur boasts a moderate climate, with temperatures from 11°C to 35°C, making it welcoming year-round. The cooler months, September to March, are perfect for exploring, while the monsoon season, June to September, offers lush landscapes and quieter visits. Post-monsoon, waterfalls are a splendid sight, and summer is ideal for the cooler highlands.
    </p>
    <p className={`md:text-base text-sm text-black mt-2 ${readMore ? 'block' : 'block'}`}>
    Chikmagalur, "younger daughter's town," has a rich history dating back to dynasties like the Hoysalas and Vijayanagara. 
    </p>
    <p className={`md:text-base text-sm text-black mt-2 ${readMore ? 'block' : 'hidden'}`}>
    The region flourished under the Hoysalas in the 12th century, notable for its architectural achievements. Coffee cultivation, initiated in the 17th century by Baba Budan, significantly impacted its culture and economy, blending tradition with modernity.
    </p>
    <button
      className="text-yellow-600 text-sm hover:underline mt-4 inline-block"
      onClick={() => setReadMore(!readMore)}
    >
      {readMore ? 'Read Less' : 'Read More'}
    </button>
  </div>
  </section>
  <section id='higlight'>
  <div className="text-black  mx-auto rounded-xl shadow-md mt-5 p-4 bg-gray-200">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Skandagiri Trek Highlights
      </h2>
      <ul className="list-none space-y-2">
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Enjoy the exciting overnight trek of 8 km from Bangalore assisted by a professional guide</span>
        </li>
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Book our premium package and get a hassle-free pickup from multiple locations across Bangalore</span>
        </li>
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Revel in the natural beauty of the misty mountain tops of Skandagiri at an altitude of 4750 ft above sea level</span>
        </li>
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Revel in the natural beauty of the misty mountain tops of Skandagiri at an altitude of 4750 ft above sea level</span>
        </li>
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Revel in the natural beauty of the misty mountain tops of Skandagiri at an altitude of 4750 ft above sea level</span>
        </li>
        <li className="flex items-center">
          <TbCircleCheck className='text-yellow-500 mr-2' />
          <span>Revel in the natural beauty of the misty mountain tops of Skandagiri at an altitude of 4750 ft above sea level</span>
        </li>
        
      </ul>
    </div>
  </section>
  <section id='iternary' className='p-4 bg-gray-200 rounded-xl shadow-md mt-5'>
  <div className="text-xl font-semibold mb-5 ">ITINERARY</div>
                <div className="container mx-auto">
                    {days.map((days, index) => (
                          <div key={index} className="border-b border-black pb-4 mb-4">
                          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index)}>
                            <div className="text-xl font-semibold">{days.day} : {days.cityName}</div>
                            <span>
                              {openDay[index] ? <FaCaretUp /> : <FaCaretDown />}
                            </span>
                          </div>
                          {openDay[index] && (
                            <div className="mt-4">
                              <div className="flex flex-col md:flex-row">
                                <div className="flex-1 p-4 pl-0 pt-0">
                                  {days.description && days.description.map((des, descIndex) => (
                                    <p key={descIndex} className="mb-1 flex flex-row">
                                    <FaCircle className="w-[5px] h-[5px] pr-2 pt-[9px]" />
                                      {des}
                                    </p>
                                  ))}
                                  <p className="font-semibold pt-4">Meals : {days.meals}</p>
                                </div>
                                {days.image && (
                                  <div className="w-auto h-40 relative rounded-lg mx-4">
                                    <Image
                                      src={days.image}
                                      alt={days.imagealt}
                                      layout='fill'
                                      objectFit='cover'
                                      className='rounded-lg'
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          </div>
                    ))}
                </div>
  </section>
       </div>  
       <div className='w-[25%]'>
       <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md h-[200px] mt-5 ">
      <div className="text-sm">
        Starting from <span className="line-through">INR 1,740</span>
      </div>
      <div className="text-4xl font-bold py-2">
        INR 975
        <span className="text-lg font-normal"> per Adult</span>
      </div>
      <div className="text-yellow-500 text-lg font-semibold mb-4">
        43% Off
      </div>
      <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full">
        Book Now
      </button>
    </div>
    <form className="bg-gray-500 p-4 rounded-xl mt-5 shadow-md">
            <h3 className="text-lg mb-4 text-yellow-500">Enquiry Form</h3>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phoneno">
                Phone No
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="number" placeholder="Your Phone Number" />
            </div>
            <div className="">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"  placeholder="Your Message" />
            </div>
            <div className="mb-4 flex items-center">
    <input
      id="callback-checkbox"
      type="checkbox"
      className="mr-2 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label
      htmlFor="callback-checkbox"
      className="text-gray-300 text-sm font-bold"
    >
      Expecting a Callback
    </label>
  </div>
            <div className="flex items-center justify-between">
              <button className="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send Enquiry
              </button>
            </div>
          </form>
          </div> 
  </div>
  <section>
  <div className="bg-gray-200 text-black p-4 rounded-xl shadow-md space-y-6 md:mx-8 mx-2 mt-5">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Bangalore Walking Tour Policies
      </h2>
      <div className="flex md:flex-row flex-col ">
        <div className='md:w-[50%]'>
          <h3 className="text-xl font-semibold mb-2">Confirmation Policy</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <TbCircleCheck className='text-yellow-500 mr-2' />
              <span>The customer receives a confirmation voucher via email within 15 minutes of successful booking. </span>
            </li>
            <li className="flex items-start">
              <TbCircleCheck className='text-yellow-500 mr-2' />
              <span>The customer receives a confirmation voucher via email within 15 minutes of successful booking.</span>
            </li>
          </ul>
        </div>
        <div className='md:w-[50%]'>
          <h3 className="text-xl font-semibold mb-2">Cancellation Policy</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <TbCircleX className='text-yellow-500 mr-2' />
              <span>If cancellation is made 30 days or more before the date of travel, 15.0% of total booking cost will be charged as cancellation fees.</span>
            </li>
            <li className="flex items-start">
              <TbCircleX className='text-yellow-500 mr-2' />
              <span>If cancellation is made between 15 days to 30 days before the date of travel, 25.0% of total booking cost will be charged as cancellation fees.</span>
            </li>
            <li className="flex items-start">
              <TbCircleX className='text-yellow-500 mr-2' />
              <span>If cancellation is made between 7 days to 15 days before the date of travel, 50.0% of total booking cost will be charged as cancellation fees.</span>
            </li>
            <li className="flex items-start">
              <TbCircleX className='text-yellow-500 mr-2' />
              <span>If cancellation is made within 7 days before the date of travel, total booking cost will be charged as cancellation fees.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className='md:mx-8 mx-2 mt-5'>
  <div className="p-4 bg-gray-200 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((faq, index) => (
        <Actaccordian key={index} title={faq.question}>
          <p>{faq.answer}</p>
        </Actaccordian>
      ))}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Activities
