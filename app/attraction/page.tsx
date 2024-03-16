'use client'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TrekSlider from '@/Components/Home/Trekslider/Trekslide';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci"; // Import the icon
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination  } from 'swiper/modules';
import Actaccordian from '@/Components/Activities/Actaccordian';
import Header from '@/Components/Navbar/Header/Header'
import Footer from '@/Components/Navbar/Footer/Footer'
import EnquiryForm from '@/Components/Book/EnquiryForm';

const NavLinks = [
  { href: '#overview', label: 'Overview', icon: '/food/searching.png' },
  { href: '#booking', label: 'Booking', icon: '/food/act.png' },
  { href: '#relatedactivities', label: 'Related Activities', icon: '/food/hotel.png' },
  { href: '#faq', label: 'FAQ', icon: '/food/hotel.png' },
  { href: '#similaractivities', label: 'Similar Activities', icon: '/food/culture.png' },
  { href: '#blogs', label: 'Blogs', icon: '/food/shop.png' },
]

const attractions = [
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  // ... Add other attractions here

];
const YourNewAttractionsArray = [
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  {
    name: 'Windsor Castle',
    location: 'Windsor & Eton',
    description: 'The world\'s largest and oldest continuously occupied fortress, Windsor Castle is a majestic vision of battlements and towers. Used for state occasions, it...',
    imageUrl: '/home/ANDAMAN.jpg', // Replace with your image paths
  },
  // ... Add other attractions here

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
const Page = () => {
    const [readMore, setReadMore] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className='bg-white'>
           
      {/* <div className='h-[90px] bg-black '></div> */}
      <Header />
      <div className="relative h-[60vh] flex items-center justify-center bg-black text-white">
  <Image
    src="/home/Gokarna Beach Trek.webp"
    alt="Wayanad"
    layout="fill"
    objectFit="cover"
    className="opacity-50"
  />
  {/* Overlay div */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="absolute top-[25vh] text-center z-10 p-4">
    <h1 className="md:text-7xl text-5xl font-bold mb-4 text-yellow-500">
      CHIKMAGALUR
    </h1>
    <div className="flex items-center justify-center text-lg md:text-xl">
      <CiLocationOn className="text-white mr-2" />
      <span>Karnataka, India</span>
    </div>
  </div>
</div>

   
      <div id="top-bar" className="sticky top-[60px] z-30 bg-black bg-opacity-100">
     
    </div>
    <div className="bg-black text-black py-2 px-4">
    <nav className="text-black" aria-label="Breadcrumb">
      <ol className="list-none p-0 flex flex-wrap">
        <li className="flex items-center">
          <a href="/" className="text-gray-300 hover:text-yellow-500 text-xs sm:text-sm">Home</a>
          <span className="text-gray-700 mx-2">/</span>
        </li>
        <li className="flex items-center">
          <a href="/destinations" className="text-gray-300 hover:text-yellow-500 text-xs sm:text-sm">Destinations</a>
          <span className="text-gray-700 mx-2">/</span> 
        </li>
        <li className="flex items-center">
          <a href="#" className="text-gray-300 hover:text-yellow-500 text-xs sm:text-sm">Wayanad</a>
          <span className="text-gray-700 mx-2">/</span>
        </li>
        <li className="flex items-center text-white font-semibold text-xs sm:text-sm">
          20 Things in Wayanad
        </li>
      </ol>
    </nav>
</div>

    <div className='flex md:flex-row md:mx-8 md:gap-3 flex-col' >

    <div className="md:px-2 md:w-[75%] order-2" >
    
    <section id="overview" >
    <div className="bg-gray-300 text-black mt-5 md:mt-8 p-4 md:rounded-xl shadow-md ">
    <div className="flex items-left">
    <div className="bg-yellow-500 w-1 md:h-6  h-[15px] mr-4 mt-[6px]"></div>
    <h2 className="text-xl md:text-3xl font-semibold">Chikmagalur Overview</h2>
    </div>
    <p className="text-sm md:text-base mt-2">
        Nestled in the serene foothills of the Western Ghats in Karnataka, India, Chikmagalur is a picturesque town...
        {/* Content abbreviated for brevity */}
    </p>
    <p className={`text-sm md:text-base mt-2 ${!readMore ? 'hidden md:block' : 'block'}`}>
        Chikmagalur boasts a moderate climate, with temperatures from 11°C to 35°C...
        {/* Content abbreviated for brevity */}
    </p>
    <p className={`text-sm md:text-base mt-2 ${readMore ? 'block' : 'block'}`}>
        Chikmagalur, "younger daughter's town," has a rich history...
        {/* Content abbreviated for brevity */}
    </p>
    <p className={`text-sm md:text-base mt-2 ${readMore ? 'block' : 'hidden'}`}>
        The region flourished under the Hoysalas in the 12th century...
        {/* Content abbreviated for brevity */}
    </p>
    <button
      className="text-yellow-600 text-sm hover:underline mt-4 inline-block"
      onClick={() => setReadMore(!readMore)}
    >
      {readMore ? 'Read Less' : 'Read More'}
    </button>
</div>

  </section>
  <div>
  <h1 className="text-xl md:text-2xl font-bold mt-5 px-3 mb-3 text-black">
    Ponte Vecchio, the meeting point of Florentine socio-economic life
  </h1>
  <img
    src="/about/solo.jpg"
    alt="Duomo di Milano"
    className="max-w-full w-full h-auto px-4 py-1 rounded-lg mb-3 md:mb-4"  // Responsive margin for better spacing on smaller screens
  />
  <p className="text-sm md:text-base mb-3 px-2 md:mb-4 text-black">
    With a height of 158 meters and the famous statue of the Madonnina that watches over the city, the
    Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
    {/* Placeholder for additional content */}
  </p>
  <h1 className="text-xl md:text-2xl font-bold mb-3 px-3 md:mb-4 text-black">
    Ponte Vecchio, the meeting point of Florentine socio-economic life
  </h1>
  <img
    src="/about/solo.jpg"
    alt="Duomo di Milano"
    className="max-w-full w-full h-auto rounded-lg px-4 mb-3 md:mb-4"  // Consistent responsive margin for images
  />
  <p className="text-sm md:text-base mb-3 px-2 md:mb-4 text-black">
    With a height of 158 meters and the famous statue of the Madonnina that watches over the city, the
    Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
    {/* Placeholder for additional content */}
  </p>
  {/* Additional content adjusted for consistency */}
</div>


  
  
  
       </div>  
       <div className='md:w-[25%] order-1 px-2 md:order-2'>
        {/* <div className='sticky top-[20px] md:top-[100px]'> */}
  <div className="bg-gray-300 text-black mt-8 md:mt-5 p-4 md:rounded-xl shadow-md sticky top-[20px] md:top-[100px]">
    <div className="space-y-4">
      <p><span className="font-semibold">Label:</span> Must Visit</p>
      <p><span className="font-semibold">How to reach:</span> Bus,Metro</p>
      <p><span className="font-semibold">Timings:</span> Anytime</p>
      <p><span className="font-semibold">Time Required:</span> 1-2 hours</p>
      <p><span className="font-semibold">Entry Fee:</span> Free</p>
    </div>
        <div className="py-3">
            <p className="text-black font-semibold text-lg">Planning a trip? Ask us a question!</p>
            <div className='flex justify-center items-center'>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition duration-300">
                Enquire Now
            </button>
        </div>
    </div>
    </div>
    </div>
{/* </div> */}

  </div>
  
  <section id='mustseeattractions' className='relative bg-black md:mt-5 p-4 px-10'>
  <div className="text-center">
        <h3 className="text-xl md:text-3xl font-bold  text-white">
            <span className='text-yellow-500'>Must Visit</span> Attractions</h3>
            <div className="flex justify-center md:pb-5 md:mt-5 my-2">
        <hr className="border-t-2 border-white md:w-[30PX] w-[30px]" />
      </div>
       
    </div>
  
  <Swiper
      spaceBetween={20}
      slidesPerView={3.3}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      }}
      navigation={false}
    >
      {YourNewAttractionsArray.map((attraction, index) => (
        <SwiperSlide key={index}>
          <div className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative w-full h-[300px] ">
              <Image
                src={attraction.imageUrl}
                alt={attraction.name}
                layout="fill"
                objectFit="cover"
                className="hover:opacity-75 transition-opacity duration-300 rounded-xl"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{attraction.name}</h3>
              <p className="text-xs">{attraction.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  {/* Swiper Pagination for better mobile navigation */}
  
  {/* Adjusted Custom navigation buttons to use Swiper's default classes for compatibility */}

</section>

<section id='newsection' className='relative bg-black md:p-4 md:px-10'>
<div className="text-center">
        <h3 className="text-xl md:text-3xl font-bold  text-white">
            <span className='text-yellow-500'>Related</span> Attractions </h3>
            <div className="flex justify-center md:pb-5 md:mt-5 my-2">
        <hr className="border-t-2 border-white md:w-[30PX] w-[30px]" />
      </div>
       
    </div>
  
  <Swiper
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
      }}
      navigation={false}
    >
      {YourNewAttractionsArray.map((attraction, index) => (
        <SwiperSlide key={index}>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full md:h-48 h-32">
              <Image
                src={attraction.imageUrl}
                alt={attraction.name}
                layout="fill"
                objectFit="cover"
                className="hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{attraction.name}</h3>
              <p className="text-sm">{attraction.location}</p>
              <p className="text-xs line-clamp-3">{attraction.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  {/* Custom navigation buttons */}

</section>

    
  <section id='faq' className='md:mx-8 md:mt-5 '>
  <div className="p-4 bg-gray-300 md:rounded-xl shadow-md">
      <h1 className="md:text-3xl text-black font-bold mb-4 text-xl">FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((faq, index) => (
        <Actaccordian key={index} title={faq.question}>
          <p>{faq.answer}</p>
        </Actaccordian>
      ))}
      </div>
    </div>
  </section>
  <section id='relatedactivities' className='bg-black md: p-4 mt-5'>
  <div className="text-center">
        <h3 className="text-xl md:text-3xl font-bold  text-white">
            <span className='text-yellow-500'>Related</span> Activities </h3>
            <div className="flex justify-center md:pb-5 md:mt-5 my-2">
        <hr className="border-t-2 border-white md:w-[30PX] w-[30px]" />
      </div>
       
    </div>
<TrekSlider destination={destinations4}  sliderId="destsliderab" />
  </section>
  <section id='blogs'>
  <div className="bg-gray-300 md:px-8 px-4 py-4 md:max-w-[1120px] md:p-6 md:rounded-xl md:my-5  mx-auto">
  <div className="md:text-3xl text-black font-bold mb-6 text-xl">Our Stories</div>
  <div className="flex flex-col md:flex-row">
    <div className="md:w-2/3 md:pr-4">
      <div className="">
        <img className="w-full md:h-96 h-48 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Featured story image" />
        <div className="mt-2">
          <h3 className="text-xl text-gray-700 font-semibold">
             introduces new tourist rules for 2024, including an entry fee and </h3>
          <p className="text-gray-600 md:mt-2 line-clamp-2">In an effort to regulate the number of tourists within the city, Venice is introducing a new booking system for visitors.</p>
        </div>
      </div>
    </div>
    <div className="md:w-1/3">
      <div className="space-y-4 md:mt-0 mt-2">
        <div className="flex items-center md:space-x-4 space-x-2">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="md:text-lg text-gray-600 font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:mt-0 mt-2">
        <div className="flex items-center md:space-x-4 space-x-2">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="md:text-lg text-gray-600 font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:mt-0 mt-2">
        <div className="flex items-center md:space-x-4 space-x-2">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="md:text-lg text-gray-600 font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:mt-0 mt-2">
        <div className="flex items-center md:space-x-4 space-x-2">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="md:text-lg text-gray-600 font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:mt-0 mt-2">
        <div className="flex items-center md:space-x-4 space-x-2">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="md:text-lg text-gray-600 font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </section>
  {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} source='attractions'/>}
  <Footer />
    </div>
  )
}

export default Page


