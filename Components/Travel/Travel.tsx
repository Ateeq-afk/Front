'use client'
import React,{useState,useEffect,useRef} from 'react'
import Header from '../Navbar/Header/Header'
import Footer from '../Navbar/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGift, faPercent, faUserClock, faLock, faTag, faSuitcase, faCalendarCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,EffectCoverflow  } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"
type FaqContent = {
    General: { question: string; answer: string }[];
    Safety: { question: string; answer: string }[];
    Service: { question: string; answer: string }[];
    Policy: { question: string; answer: string }[];
    Booking: { question: string; answer: string }[];
    Payment: { question: string; answer: string }[];
  };
  const tabs: (keyof FaqContent)[] = ['General', 'Safety', 'Service', 'Policy', 'Booking', 'Payment'];
  type Benefit = {
    icon: IconDefinition;
    title: string;
    description: string;
  };
const Travel = () => {
    // Titles and descriptions for each benefit card
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    // Array of background images
    const closePopup = () => {
        setSelectedBenefit(null);
      };
    useEffect(() => {
        // Update isMobile based on the actual window width
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
      
        // Handle window resize
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
      }, []);
const benefits: Benefit[] = [
    {
      icon: faGift,
      title: 'Giveaway',
      description: 'Unlock your adventure with our exclusive giveaway.'
    },
    {
      icon: faPercent,
      title: 'Save 50% Today',
      description: 'Save 50% Today: Half Price, Full Value!'
    },
    {
      icon: faUserClock,
      title: '24/7 Travel Concierge',
      description: 'Journey nonstop with our 24/7 concierge service.'
    },
    {
      icon: faLock,
      title: 'Member Only Invites',
      description: 'Exclusive Access: Member-Only Minutes.'
    },
    {
      icon: faTag,
      title: 'Fixed Discounts',
      description: 'Fixed Discounts on Extended Trips, Beyond 2D/1N.'
    },
    {
      icon: faSuitcase,
      title: 'Customized Travel Plans',
      description: 'Your journey, your way: Customized Travel Plans.'
    },
    {
      icon: faCalendarCheck,
      title: 'No Blackout Dates',
      description: 'Travel when you want: No Blackout Dates, no restrictions.'
    },
    {
      icon: faCreditCard,
      title: 'EMI Option Available',
      description: 'Budget-friendly with Monthly EMI Options.'
    }
  ];
  const adventures = [
    { src: '/pass/1_Kudremukh.webp', alt: 'Trek1' },
    { src: '/pass/2_Ettina-Bhuja.webp', alt: 'Trek2' },
    { src: '/pass/3_belkal theertha Falls Trek.webp', alt: 'Trek3' },
    { src: '/pass/4_Bandaje_11zon.webp', alt: 'Trek4' },
    { src: '/pass/5_Ermayi and Didupe Falls Trek.webp', alt: 'Trek5' },
    { src: '/pass/6_Gokarna Beach Trek.webp', alt: 'Trek6 ' },
    { src: '/pass/7_Thekkady.webp', alt: 'Tour1' },
    { src: '/pass/8_Kodaikanal.webp', alt: 'Tour2' },
    { src: '/pass/9_Pondicherry.webp', alt: 'Tour3' },
    { src: '/pass/10_Goa.webp', alt: 'Tour4' },
    { src: '/pass/11_gokarna-murudeshwara.webp', alt: 'Tour5' },
    { src: '/pass/12_Hampi.webp', alt: 'Tour6' },
    ];
  // JSX for each benefit card
  const backgroundImages = [
    'https://source.unsplash.com/random/?mountains',
    'https://source.unsplash.com/random/?beach',
    'https://source.unsplash.com/random/?jungle',
  ];
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const RoundCounter = ({ count, label }) => (
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2">
        <span className="text-2xl text-yellow-500 font-semibold">{count}</span>
      </div>
      <p className="text-sm text-white">{label}</p>
    </div>
  );
  
    const cardVariants = {
        offscreen: {
          y: 50,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
    // State for the active tab
    const cards = [
      {
        title: "Trek Pass",
        description: "Travel to 6 treks, originally at ₹24,000, now just ₹12,000!",
        bgClass: "bg-purple-500" // Purple circle for Trek Pass
      },
      {
        title: "Tour Pass",
        description: "Access to 6 tours, slashed from ₹24,000 to only ₹12,000!",
        bgClass: "bg-blue-500" // Blue circle for Tour Pass
      }
    ];
    const faqContent = {
        General: [
        { question: ' How many participants are there on a trip?', answer: 'We typically host 12-20 travelers in a single batch for our tours, and for trekking adventures, groups usually consist of 20-30 travelers per batch. Larger groups are possible during long weekends, ensuring a better experience for all.' },
        { question: 'Do your trips have any age limitations?', answer: 'Yes, participants must be 18 years or older. However, guardians or parents accompanying the group are welcome to bring their children along for the trek or tour.' },
        {
        question: ' Is it possible to make last-minute modifications to the trek or trip?',
        answer: 'No, changes cannot be made within 7 days of the travel date. Please confirm your travel plans at least 7 days before your scheduled departure to avoid the trek or tour being considered as lapsed.'
        },
        {
        question: 'How frequently am I allowed to travel within a month using the travel pass?',
        answer: 'With our travel pass, you are entitled to travel once per month. Additional treks or tours within the same month require payment of the specified price for that particular journey.'
        },
        {
        question: 'Are the listed Treks suitable for beginners?',
        answer: 'Absolutely! We cater to all levels of experience and provide detailed information on the difficulty level for each Trek.'
        }
        ],
        Safety: [
        { question: ' What support is available if I encounter issues during my adventure?', answer: 'We provide 24/7 support for any issues or emergencies that may arise during your Trip/Tour. Your safety and satisfaction are our top priorities.' },
        { question: ' Is it safe for a female to travel solo on your treks and tours?   ', answer: 'As a travel company dedicated to safe and enriching experiences, we ensure that solo female travel on our treks and tours is secure and enjoyable. ' },
        {
        question: ' What safety measures are in place for the adventures?',
        answer: 'We ensure all adventures meet strict safety standards and are led by qualified professionals.'
        },
        {
        question: 'Are there female trek captains or guides available for your adventure treks and tours?  ',
        answer: 'Absolutely. We are proud to offer female trek captains and guides on many of our adventure tours.'
        },
        {
        question: 'Are there any specific health requirements before we embark on a Trek?',
        answer: 'Participants should be in good health and may be required to sign a waiver before embarking on a Trek.'
        }
        ],
        Service: [
        { question: 'How does your travel company facilitate transportation for tours and treks ?', answer: 'Our travel company provides end-to-end transportation for all tours and treks, ensuring a seamless and comfortable journey for our clients.' },
        { question: 'What makes the experiences offered by your travel company unique?', answer: 'Our travel company stands out by offering first-hand experiences, ensuring our clients enjoy authentic and immersive journeys that are both memorable and personal.' },
        ],
        Policy: [
        { question: 'What is the procedure if a trip or trek gets canceled?', answer: 'In case of cancellation, we follow specific policies for rescheduling due to circumstances like natural disasters, governmental actions, conflicts, public disturbances, national crises, rebellions, epidemics, strikes, transportation challenges, or delays.' },
        { question: ' Will I get a refund if I cancel my Travel pass?', answer: 'No, the Travel pass is non-refundable.' },
        { question: ' Are there Travel pass exclusive trips/treks?', answer: 'Yes, there are invite-only trips/treks exclusively for Travel pass owners.' },
        ],
        Booking: [
        { question: 'Can I gift my Travel Pass?', answer: 'You can gift a new pass to someone, but a registered pass cannot be transferred.' },
        { question: 'Can I pause my Travel Pass?', answer: 'No, the Travel pass cannot be paused.' },
        ],
        Payment: [
        { question: 'Are installment options like EMI available for payment?', answer: 'Yes, we offer EMI (Equated Monthly Installment) options on credit cards and select debit cards.' },
        { question: 'What payment methods are accepted?', answer: 'We accept all credit cards, Debit cards, UPI payments, Netbanking, Wallets and EMI.' },
        ],
        };
        const treks = [
            'Kudremukh Trek', 'Nethravathi Trek', 'Bandaje Falls Trek', 'Gangadikal Trek',
            'Gokarna Beach Trek', 'Kumara Parvatha Coorg Trek', 'Tadiandamol Trek', 'Ethina Bhuja Trek',
            'Ombattu Gudda Trek', 'Ermayi and Didupe Falls Trek', 'Karwar Beach Trek', 'Kurinjal Trek',
            'Nishani Motte Trek', 'Kumara Parvatha Kukke Trek', 'Narasimha Parvatha Trek', 'Kodachadri Trek',
            'Galibeedu Trek', 'Meruthi Hill Trek', 'Belkal Theertha Falls Trek', 'Pandavara Betta Trek',
          ];
          const tours = [
            'Wayanad Weekend Getaway', 'Chikmagalur Weekend Getaway', 'Hampi Weekend Getaway', 'Kodaikanal Weekend Getaway',
            'Munnar Weekend Getaway', 'Coorg Weekend Getaway', 'Ooty Weekend Getaway', 'Pondicherry Weekend Getaway'  ,
            'Sakleshpur Weekend Getaway', 'Gokarna-Murudeshwar WG', 'Kannur Weekend Getaway', 'Udupi-Mangalore WG',
            'Chikmagalur Backpacking Tour', 'Kodaikanal Backpacking Tour', 'Ooty Backpacking Tour', 'Valparai Weekend Getaway',
            'Thekkady Weekend Getaway', 'BR Hills Weekend Getaway', 'Badami Weekend Getaway', 'Dandeli Weekend Getaway',
            ];
          const imageContainerVariants = {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2 } }
          };
        //   const testimonials = [
        //     {
        //       name: 'Maria Menounos',
        //       title: 'Actress & TV Host',
        //       testimony: 'I feel on top of the world. I feel incredibly '
        //     },
        //     {
        //       name: 'Serena Williams',
        //       title: 'American Professional Tennis Player',
        //       testimony: 'Tony Robbins helped me discover what I am really made of. With Tony\'s help, I\'ve set new standards for myself, and I\'ve taken my tennis game—and my life—to a whole new level!'
        //     },
        //     {
        //       name: 'Marc Benioff',
        //       title: 'Founder, Chairman and CEO of Salesforce',
        //       testimony: 'Tony Robbins and his strategies and his tools, have been at the core of our culture from the beginning. He has been one of the critical keys to Salesforce.com\'s leadership in cloud computing and its growth into an over $6 billion dollar company.'
        //     }
        //   ];
        const bulletStyle = {
            backgroundColor: '#D1D5DB', // Gray color for inactive bullets
            width: '12px',
            height: '12px',
            display: 'inline-block',
            borderRadius: '50%',
          };
        
          const bulletActiveStyle = {
            backgroundColor: '#000000', // Black color for active bullets
            width: '12px',
            height: '12px',
            display: 'inline-block',
            borderRadius: '50%',
          };
            const testimonials = [
    {
      quote: "When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen...When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen...",
      name: "Selena Rock",
      title: "CTO",
      image:"/home/ANDAMAN.jpg"
    },
     {
        quote: "When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen...",
        name: "Selena Rock",
        title: "CTO"
      },
      {
        quote: "When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen...",
        name: "Selena Rock",
        title: "CTO"
      },
    // ... more testimonials
  ];
  return (
    <div className='bg-white text-black'>
        <Header />
        <div className="relative h-screen flex items-center justify-center pt-20">
        {/* Dynamic background image */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        {/* Hero content here */}
        <div className="relative flex items-center justify-between w-full max-w-[1200px] px-4 mx-auto">
     {/* Card 1: Trek Pass */}
     <motion.div className="w-[350px] h-[500px] bg-gradient-to-b from-blue-200 via-blue-100 to-white rounded-2xl overflow-hidden shadow-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-6">
<div className="text-xl font-bold text-gray-600">TREK PASS</div>
 <div className="text-s font-semibold justify-centre">The Trek Pass is a specialized pass designed for outdoor enthusiasts who love exploring nature through trekking. Our pass allows adventurers to experience everything from serene scenic paths to challenging terrains. Embracing our motto, "Create a Fitness Culture and Interact with Nature," the Trek Pass is more than just access to trails; it's an affordable gateway for everyone to outdoor adventures, ensuring that the joys and lessons of nature are accessible to all, regardless of budget.
</div>
<div className="space-y-4">
<div className="flex justify-around items-center text-center">
<div className="flex space-x-10">
<div>
 <p className="text-5xl text-yellow-500 font-semibold">6</p>
 <p className="text-xs text-gray-500">TREKS</p>
</div>
<div>
<p className="text-5xl text-yellow-500 font-semibold">
12 <span className="text-xs -mr-0 text-yellow-500">months</span>
</p>
 <p className="text-xs text-gray-500">VALIDITY</p>
</div>
</div>
</div>
</div>
<button className="mt-4 text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
LEARN MORE
</button>
</div>
</motion.div>
     {/* Central content */}
     <motion.div className="flex-1 mx-4 text-center z-10"
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible">
       <h1 className="text-[40px] font-bold mb-4 text-white">Explore the Wonders</h1>
       <p className="mb-4 text-white">What the journey brings to your life</p>
       <button className="text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
           JOIN NOW
       </button>
       {/* New section with round counters */}
       <div className="flex justify-center space-x-8 mt-8">
         <div>
           <RoundCounter count="6" label="Treks" />
           <RoundCounter count="20" label="Treks to Choose from" />
           <RoundCounter count="50%" label="Flat Discount" />
         </div>
         <div className="self-center">
           <div className="w-px h-20 bg-white bg-opacity-50"></div>
         </div>
         <div>
           <RoundCounter count="6" label="Tours" />
           <RoundCounter count="20" label="Tours to Choose from" />
           <RoundCounter count="50%" label="Flat Discount" />
         </div>
       </div>
     </motion.div>
     <motion.div className="w-[350px] h-[500px] bg-gradient-to-b from-blue-200 via-blue-100 to-white rounded-2xl overflow-hidden shadow-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-6">
<div className="text-xl font-bold text-gray-600">TOUR PASS</div>
 <div className="text-s font-semibold justify-centre">The Tour Pass is an ideal choice for those who seek to escape the hustle of daily life and find solace in diverse cultural experiences. This pass enables travelers to delve into the heart of various cities, experiencing their unique heritage, lively markets, and peaceful natural settings. In line with our principle, "Escape Daily Life, Depression, and Relax in Nature," the Tour Pass is more than just a travel ticket; it's an affordable opportunity for everyone to embark on journeys that rejuvenate the mind and spirit.
</div>
<div className="space-y-4">
<div className="flex justify-around items-center text-center">
<div className="flex space-x-10">
<div>
 <p className="text-5xl text-yellow-500 font-semibold">6</p>
 <p className="text-xs text-gray-500">TOURS</p>
</div>
<div>
<p className="text-5xl text-yellow-500 font-semibold">
12 <span className="text-xs -mr-0 text-yellow-500">months</span>
</p>
 <p className="text-xs text-gray-500">VALIDITY</p>
</div>
</div>
</div>
</div>
<button className="mt-4 text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
LEARN MORE
</button>
</div>
</motion.div>
   </div>
      </div>

      {/* New About Section */}
     
     
  <div className='flex flex-row bg-gray-100 mt-10'>
  <Swiper
      modules={[ Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={false} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 100, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      // Responsive breakpoints
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
        1000: {
            slidesPerView: 6,
          },
      }}
    >
      {treks.map((trek, index) => (
        <SwiperSlide key={index}>
          <div className="py-4 flex flex-row font-bold rounded-lg text-center text-sm justify-center items-center">
            <h3  style={{
  background: 'linear-gradient(to right, #FE5A1C, #FF9E28)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent', // Fallback for browsers that do not support background-clip
  display: 'inline' // This is necessary for the gradient to apply correctly
}}>{trek}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    
    <div className='flex flex-row bg-gray-100 mt-5'>
    <Swiper
      modules={[ Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={false} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 100, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      // Responsive breakpoints
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
         768: {
          slidesPerView: 4,
        },
        1000: {
            slidesPerView: 6,
          },
      }}
    >
      {tours.map((trek, index) => (
        <SwiperSlide key={index}>
          <div className="py-4 flex flex-row font-bold rounded-lg text-center text-sm justify-center items-center ">
            <h3  style={{
  background: 'linear-gradient(to right, #56CCF2, #2F80ED)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent', // Fallback for browsers that do not support background-clip
  display: 'inline' // This is necessary for the gradient to apply correctly
}}>{trek}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
    <div className='w-full h-[150px] relative mt-5 '>
        <Image src="/home/mountain.jpg" objectFit='cover' layout='fill' alt='mountain strip travel pass'/>
    </div>
    <div className="bg-black md:p-10 py-4">
      <div className="max-w-6xl mx-auto rounded-2xl bg-black shadow-md overflow-hidden">
        <div className="md:p-5">
          <h1 className="md:text-3xl text-xl font-bold text-center text-yellow-500">What you get ?</h1>
        </div>
        <div className="md:grid grid-cols-2 md:grid-cols-4 gap-4 p-5 hidden">
          {benefits.map((benefit, index) => (
    <div key={index} className="flex flex-col items-center relative h-[200px] ">
    {/* Outer circular shadow */}
    <div className="relative bg-white rounded-full p-6 shadow-lg z-10">
      {/* Circular gradient border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-300 rounded-full  flex justify-center items-center">
      <FontAwesomeIcon icon={benefit.icon} className=" text-xl text-yellow-500" />
      </div>
      {/* <div className="relative flex justify-center items-center">
        <div className="bg-white rounded-full w-[70px] h-[70px] flex justify-center items-center text-center z-10">
          <FontAwesomeIcon icon={benefit.icon} className=" text-3xl text-yellow-500" />
        </div>
      </div> */}
    </div>

    {/* Rectangular card */}
    <div className="absolute top-[25px]  ">
      <div className="h-[150px] w-[260px] bg-gradient-to-r from-white to-gray-300 rounded-lg  flex flex-col items-center justify-center ">
      {/* Title and Description */}
      <h2 className="mt-4 text-lg font-semibold">{benefit.title}</h2>
      <div className="text-sm text-gray-600 w-[200px] text-center ">  {benefit.description}</div>
      </div>
    </div>
  </div>
          ))}
        </div>
     
      <div>
      <div className="grid grid-cols-2 gap-4 mx-6 my-4 md:hidden">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-300 rounded-xl h-[100px]" onClick={() => setSelectedBenefit(benefit)}>
            {/* <div className="relative bg-white rounded-full p-5 shadow-lg flex items-center justify-center"> */}
              <FontAwesomeIcon icon={benefit.icon} className="text-2xl text-yellow-500" />
            {/* </div> */}
            <div className="mt-2 text-center text-sm font-semibold">{benefit.title}</div>
          </div>
        ))}
      </div>


      {/* Popup */}
      {selectedBenefit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closePopup}>
          <div className="flex justify-center items-center h-full">
            <div className="bg-gradient-to-r from-white to-gray-300 rounded-lg p-5 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {/* Selected Benefit Details */}
              <FontAwesomeIcon icon={selectedBenefit.icon} className="text-2xl text-yellow-500 mb-4" />
              <h2 className="text-lg font-semibold">{selectedBenefit.title}</h2>
              <div className="text-sm text-gray-600 text-center">{selectedBenefit.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  
    <div className="mx-10 py-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* <div className='w-full'> */}
        {/* Title with each word on a new line */}
        <div className=" md:flex flex-col  w-3/4">
          <h2 className="text-4xl font-bold text-black uppercase ml-14">
            <span className="block">What they</span>
            <span className="block">say</span>
          </h2>
          </div>
          <div className="w-2 bg-yellow-500 h-24 "></div>
        
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        className="mySwiper my-unique-swiper  w-full md:w-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center px-6 py-20 bg-white rounded-2xl shadow-xl w-full md:max-w-3xl mx-auto space-x-4">
              <div className="flex justify-center items-center flex-col w-[200px]">
                <div className="h-16 w-16 rounded-full relative">
                  <Image src={testimonial.image} alt="Avatar of the testimonial author" layout='fill' objectFit='cover' className='rounded-full' />
                </div>
                <div className="text-lg font-semibold text-black mt-4">{testimonial.name}</div>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
              <div className="ml-4 flex-1 relative">
                <p className="text-gray-600 mt-2 before:content-['\201C'] before:absolute before:text-6xl before:-top-6 before:-left-4 before:text-yellow-500 after:content-['\201D'] after:absolute after:text-6xl after:-bottom-[55px] after:-right-4 after:text-yellow-500">{testimonial.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>


  
    <div className="bg-black py-12">
          <div className="container mx-auto">
          <h2 className="md:text-4xl  text-3xl font-bold text-center mb-5 text-yellow-500">FAQ's</h2>
          <div className="flex justify-center  md:pb-10 pb-5">
                  <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
                </div>
          <div className="flex justify-center mb-6 w-auto border-b border-yellow-500">
          {tabs.map((tab, index) => (
          <button
          key={index}
          className={`md:px-4 px-2 py-2 text-xxs sm:text-xxs  md:text-lg border-b-2 ${activeTab === tab ? 'text-yellow-500 border-yellow-500' : 'text-gray-400 border-gray-700'}`}
          onClick={() => setActiveTab(tab)}
          >
          {tab}
          </button>
          ))}
          </div>
          <div className="max-w-4xl mx-auto px-4">
          {faqContent[activeTab]?.map((item, index) => (
          <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">{index + 1}. {item.question}</h3>
          <p className="text-gray-400 mt-2">{item.answer}</p>
          </div>
          ))}
          </div>
          </div>
          </div>
          <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Content Area */}
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          <h2 className="text-5xl font-bold text-black mb-4">
  Why should you avail the <span className="text-yellow-500">Tour Pass</span>.
</h2>
  <div className="flex items-center mb-6">
    {/* <div className="flex-grow h-0.5 bg-yellow-500 w-0.5"></div> */}
    {/* <div className="text-orange-600 font-semibold uppercase">About our Company</div> */}
    {/* <div className="flex-grow h-0.5 bg-orange-600 ml-3"></div> */}
  </div>
  <div className="flex">
  <div>
    <p className="text-lg text-gray-800 mb-4">
      Our team of engineers and technicians are professionally trained to fix. We aim to relieve the stress & inconvenience of a broken heating appliance, we are truly where quality meets excellence.
    </p>
    <p className="text-sm text-gray-600 mb-6">
      Benefit of the socie where we operate. A success website obusly needs great design to be one of the top 10 IT companies in India.
    </p>
  </div>
  <div className="flex flex-col ml-4">
    <div className="h-full bg-yellow-500 w-1"></div>
  </div>
</div>
  <Link href="/read-more">
    <div className="text-blue-500 font-semibold hover:underline">Read More</div>
  </Link>
</div>
          {/* Image Area */}
  {/* Decorative shapes */}
  {/* Image container */}
  <div className="w-1/2">
  <img src="/home/trp.png" alt="About our Company" className="w-full h-auto object-cover -py-4" />
</div>
  {/* Button */}
  <button className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    More About Us
  </button>
</div>
      </section>
          <section className="bg-gray-100 py-10 px-6">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    {/* Content Area */}
    <div className="w-full lg:w-1/2 flex lg:order-2">
      <div className="bg-yellow-500 w-1 mr-4"></div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold text-black mb-4">
          Why should you avail the <span className="text-yellow-500">Tour Pass</span>.
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          Our team of engineers and technicians are professionally trained to fix. We aim to relieve the stress & inconvenience of a broken heating appliance, we are truly where quality meets excellence.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Benefit of the socie where we operate. A success website obusly needs great design to be one of the top 10 IT companies in India.
        </p>
        <Link href="/read-more">
          <div className="text-blue-500 font-semibold hover:underline">Read More</div>
        </Link>
      </div>
    </div>
    {/* Image container */}
    <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:order-1">
      <img src="/home/trp.png" alt="About our Company" className="w-full h-auto object-cover" />
    </div>
  </div>
</section>
  <Footer />
 </div>
  )
}

export default Travel
