'use client'
import React,{useState,useEffect,useRef} from 'react'
import Header from '../Navbar/Header/Header'
import Footer from '../Navbar/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGift, faPercent, faUserClock, faLock, faTag, faSuitcase, faCalendarCheck, faCreditCard, faHandPointer } from '@fortawesome/free-solid-svg-icons';
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
  type RoundCounterProps = {
    count: string;
    label: string;
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
      description: 'Journey non-stop with our 24/7 concierge service.'
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

  const RoundCounter: React.FC<RoundCounterProps> = ({ count, label }) => (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-1">
        <span className="text-[26px] text-yellow-500 font-semibold">{count}</span>
      </div>
      <p className="text-sm text-white mb-2">{label}</p>
    </div>
  );
//   const RoundCountera: React.FC<RoundCounterProps> = ({ originalPrice, discountedPrice, label }) => (
  
//     <div className="flex flex-col items-center justify-center md:hidden">
//           <div className=" bg-white rounded-full px-8 py-1 text-center shadow-4xl">
//           <div className="text-lg line-through text-gray-500">{originalPrice}</div>
//     <div className="text-lg font-semibold text-yellow-500 ">{discountedPrice}</div>
   
//   </div>
//       {/* <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-1">
//         <span className="text-[26px] text-yellow-500 font-semibold">{discountedPrice}</span>
//       </div> */}
//       <p className="text-sm text-white">{label}</p>
//     </div>
//   );
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

    const faqContent = {
        General: [
        { question: ' How many participants are there on a trip?', answer: 'We typically host 12–20 travellers in a single batch for our tours, and for trekking adventures, groups usually consist of 20–30 travellers per batch. Larger groups are possible during long weekends, ensuring a better experience for all.' },
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
        answer: 'Absolutely! We cater for all levels of experience and provide detailed information on the difficulty level for each Trek.'
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
        { question: 'What is the procedure if a trip or trek gets cancelled?', answer: 'In case of cancellation, we follow specific policies for rescheduling due to circumstances like natural disasters, governmental actions, conflicts, public disturbances, national crises, rebellions, epidemics, strikes, transportation challenges, or delays.' },
        { question: ' Will I get a refund if I cancel my Travel pass?', answer: 'No, the Travel pass is non-refundable.' },
        { question: ' Are there Travel pass exclusive trips/treks?', answer: 'Yes, there are invite-only trips/treks exclusively for Travel pass owners.' },
        ],
        Booking: [
        { question: 'Can I gift my Travel Pass?', answer: 'You can gift a new pass to someone, but a registered pass cannot be transferred.' },
        { question: 'Can I pause my Travel Pass?', answer: 'No, the Travel pass cannot be paused.' },
        ],
        Payment: [
        { question: 'Are installment options like EMI available for payment?', answer: 'Yes, we offer EMI (Equated Monthly Installment) options on credit cards and select debit cards.' },
        { question: 'What payment methods are accepted?', answer: 'We accept all credit cards, debit cards, UPI payments, Net banking, Wallets and EMI.' },
        ],
        };
        // const treks = [
        //     'Kudremukh Trek', 'Nethravathi Trek', 'Bandaje Falls Trek', 'Gangadikal Trek',
        //     'Gokarna Beach Trek', 'Kumara Parvatha Coorg Trek', 'Tadiandamol Trek', 'Ethina Bhuja Trek',
        //     'Ombattu Gudda Trek', 'Ermayi and Didupe Falls Trek', 'Karwar Beach Trek', 'Kurinjal Trek',
        //     'Nishani Motte Trek', 'Kumara Parvatha Kukke Trek', 'Narasimha Parvatha Trek', 'Kodachadri Trek',
        //     'Galibeedu Trek', 'Meruthi Hill Trek', 'Belkal Theertha Falls Trek', 'Pandavara Betta Trek',
        //   ];
        const treks = [
            { name: 'Kudremukh Trek', link: 'kudremukh-trek' },
            { name: 'Nethravathi Trek', link: 'nethravathi-trek' },
            { name: 'Bandaje Falls Trek', link: 'bandaje-falls-trek' },
            { name: 'Gangadikal Trek', link: 'gangadikal-trek' },
            { name: 'Gokarna Beach Trek', link: 'gokarna-beach-trek' },
            { name: 'Kumara Parvatha Coorg Trek', link: 'kumara-parvatha-coorg-trek' },
            { name: 'Tadiandamol Trek', link: 'tadiandamol-trek' },
            { name: 'Ethina Bhuja Trek', link: 'ethina-bhuja-trek' },
            { name: 'Ombattu Gudda Trek', link: 'ombattu-gudda-trek' },
            { name: 'Ermayi and Didupe Falls Trek', link: 'ermayi-and-didupe-falls-trek' },
            { name: 'Karwar Beach Trek', link: 'karwar-beach-trek' },
            { name: 'Kurinjal Trek', link: 'kurinjal-trek' },
            { name: 'Nishani Motte Trek', link: 'nishani-motte-trek' },
            { name: 'Kumara Parvatha Kukke Trek', link: 'kumara-parvatha-kukke-trek' },
            { name: 'Narasimha Parvatha Trek', link: 'narasimha-parvatha-trek' },
            { name: 'Kodachadri Trek', link: 'kodachadri-trek' },
            { name: 'Galibeedu Trek', link: 'galibeedu-trek' },
            { name: 'Meruthi Hill Trek', link: 'meruthi-hill-trek' },
            { name: 'Belkal Theertha Falls Trek', link: 'belkal-theertha-falls-trek' },
            { name: 'Pandavara Betta Trek', link: 'pandavara-betta-trek' },
          ];
            
          const tours = [
            { name: 'Wayanad Weekend Getaway', link: 'wayanad-weekend-getaway' },
            { name: 'Chikmagalur Weekend Getaway', link: 'chikmagalur-weekend-getaway' },
            { name: 'Hampi Weekend Getaway', link: 'hampi-weekend-getaway' },
            { name: 'Kodaikanal Weekend Getaway', link: 'kodaikanal-weekend-getaway' },
            { name: 'Munnar Weekend Getaway', link: 'munnar-weekend-getaway' },
            { name: 'Coorg Weekend Getaway', link: 'coorg-weekend-getaway' },
            { name: 'Ooty Weekend Getaway', link: 'ooty-weekend-getaway' },
            { name: 'Pondicherry Weekend Getaway', link: 'pondicherry-weekend-getaway' },
            { name: 'Sakleshpur Weekend Getaway', link: 'sakleshpur-weekend-getaway' },
            { name: 'Gokarna-Murudeshwar WG', link: 'gokarna-murudeshwar-weekend-getaway' },
            { name: 'Kannur Weekend Getaway', link: 'kannur-weekend-getaway' },
            { name: 'Udupi-Mangalore WG', link: 'udupi-mangalore-weekend-getaway' },
            { name: 'Chikmagalur Backpacking Tour', link: 'chikmagalur-backpacking-tour' },
            { name: 'Kodaikanal Backpacking Tour', link: 'kodaikanal-backpacking-tour' },
            { name: 'Ooty Backpacking Tour', link: 'ooty-backpacking-tour' },
            { name: 'Valparai Weekend Getaway', link: 'valparai-weekend-getaway' },
            { name: 'Thekkady Weekend Getaway', link: 'thekkady-weekend-getaway' },
            { name: 'BR Hills Weekend Getaway', link: 'br-hills-weekend-getaway' },
            { name: 'Badami Weekend Getaway', link: 'badami-weekend-getaway' },
            { name: 'Dandeli Weekend Getaway', link: 'dandeli-weekend-getaway' },
          ];
          
          
          
       
          const imageContainerVariants = {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2 } }
          };

            const testimonials = [
    {
      quote: "As a solo traveller, opting for the Tour Pass was a no-brainer, especially since it was half the price of what I previously paid with Backpackers United. It's truly been worth every penny! The pass led me to unique and stunning locations with impressive safety measures for solo travellers. Having travelled before, I can confidently say that the overall experience has been fantastic. I highly recommend it to female solo travellers seeking safe and enriching adventures.",
      name: "Riya Singh",
      title: "Solo Traveler",
      image:"/about/solo.jpg"
    },
     {
        quote: "Both my wife and I work in the IT industry and were looking for a lifestyle shift. We came across the Trek Pass for just 12k, an amazing deal. The experience has been rewarding with treks that are well-organized, boosting our fitness and easing stress. Some treks were overcrowded, likely due to the peak season, but despite this, the overall advantages and value we've gained make it an excellent investment for us.",
        name: "Yogesh Waghmare",
        title: "Corporate Profesional",
        image:"/about/it.jpg"
      },
      {
        quote: "As a budget-conscious college student with a passion for trekking, the Trek Pass on EMI was an ideal choice. It's enabled affordable adventures with friends, offering a mix of thrilling and more relaxed treks. More challenging options would be welcome, but overall, it's a great fit for students who want to trek without overspending.",
        name: "Sunil Gowda",
        title: "College Student",
        image:"/about/yogesh.jpg"
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
     <motion.div className="hidden md:block w-[350px] h-[500px] bg-gradient-to-b from-orange-200 via-yellow-100 to-white rounded-2xl overflow-hidden shadow-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-6">
<div className="text-xl font-bold text-yellow-800">TREK PASS</div>
 <div className=" md:font-semibold text-justify">
 The Trek Pass gives outdoor enthusiasts the chance to explore a variety of terrains, from tranquil scenic paths to challenging trails. Aligning with our motto "Create a Fitness Culture and Interact with Nature," it provides affordable access to the beauty of nature. With this pass, you can choose 6 treks from 20 destinations over 12 months, combining fitness with the exploration of nature's wonders.
</div>
{/* <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>
    Special Deal: <span className="line-through" style={{ color: '#9CA3AF', margin: '0 10px', fontWeight: '400' }}>₹24,000</span>
    <span className='font-bold' style={{ fontSize: '26px', color: '#EF4444' }}>₹12,000/-</span>
</div> */}

<div>
    <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>Special Deal:<span className="line-through" style={{ color: '#9CA3AF', fontWeight: '400', fontSize: '20px' }}>₹24,000
</span> </div> </div> 
<div className='text-yellow-800 font-extrabold text-2xl '> ₹12,000/-
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
12 

</p>
 <p className="text-xs text-gray-500">MONTHS VALIDITY</p>
</div>
</div>
</div>
</div>
<Link href="#trek-pass">
<button className="mt-4 text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
LEARN MORE
</button>
</Link>
</div>
</motion.div>
     {/* Central content */}
     <motion.div className="flex-1 mx-4 text-center z-10"
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible">
       <h1 className="text-[48px] font-bold  text-white">Explore the Wonders</h1>
       <p className="mb-4 text-[18px] text-white">What the journey brings to your life</p>
       <Link href="/travel-pass/book">
       <button className="text-black bg-yellow-400 border border-yellow-400 font-bold py-4 px-8 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
           UNLOCK NOW
       </button>
       </Link>
       {/* New section with round counters */}
       <div className="flex justify-center space-x-8 mt-4">
         <div>
         <div className="hidden md:inline">
      <RoundCounter count="6" label="Treks" />
    </div>
           <RoundCounter count="50%" label="Flat Discount" />
           <RoundCounter count="20" label="Treks to Choose from" />
 
         </div>
         <div className="self-center">
           <div className="w-px h-20 bg-white bg-opacity-50"></div>
         </div>
         <div>
         <div className="hidden md:inline">
      <RoundCounter count="6" label="Tours" />
    </div>
           <RoundCounter count="50%" label="Flat Discount" />
           <RoundCounter count="20" label="Tours to Choose from" />
         
         </div>
       </div>
       {/* <div className='md:hidden bg-gradient-to-r from-yellow-500 to-white  rounded-full px-2 py-2 flex items-center justify-center'>
       <p className="text-lg font-semibold mr-4 ">Trek pass</p>
    <div className="border-r-2 border-black h-6 mx-4"></div>
    <div className="text-xl font-bold">
        <span className="line-through text-gray-500">₹24000</span>
        <span className="ml-2">₹12000/-</span>
    </div>
       </div> */}
       <div className="md:hidden mb-4 flex items-center justify-center">
    <div className="w-[35%] bg-black text-yellow-500 h-10 rounded-l-full flex items-center justify-center">
        <p className="text-lg font-semibold mr-4">Trek pass</p>
    </div>
    <div className="w-[65%] bg-white h-10 rounded-r-full flex items-center justify-center">
        <div className="text-xl font-bold">
            <span className="line-through text-gray-500">₹24000</span>
            <span className="ml-2 text-yellow-500 font-bold">₹12000/-</span>
        </div>
    </div>
</div>
<div className="md:hidden  flex items-center justify-center">
    <div className="w-[35%] bg-black text-yellow-500 h-10 rounded-l-full flex items-center justify-center">
        <p className="text-lg font-semibold mr-4">Tour pass</p>
    </div>
    <div className="w-[65%] bg-white h-10 rounded-r-full flex items-center justify-center">
        <div className="text-xl font-bold">
            <span className="line-through text-gray-500">₹42000</span>
            <span className="ml-2 text-yellow-500 font-bold">₹21000/-</span>
        </div>
    </div>
</div>
  
     </motion.div>
     <motion.div className="hidden md:block w-[350px] h-[500px] bg-gradient-to-b from-orange-200 via-yellow-100 to-white rounded-2xl overflow-hidden shadow-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-6">
<div className="text-xl font-bold text-yellow-800">TOUR PASS</div>
 <div className=" font-semibold text-justify">
 The Tour Pass offers an escape to diverse city cultures, from  historic landmarks to lively markets, perfect for those looking to break from routine and enjoy unique experiences.  In line with our ethos, "Escape Daily Life, Depression, and Relax in Nature," this pass is much more than just a ticket. It offers the flexibility to select 6 from 20 destinations for exploration over 12 months,  ensuring a relaxed travel experience.
</div>
<div>
    <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>Special Deal:<span className="line-through" style={{ color: '#9CA3AF', fontWeight: '400', fontSize: '20px' }}>₹42,000
</span>  </div> </div> 
<div className='text-yellow-800 font-extrabold text-2xl '> ₹21,000/-
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
12 
</p>
 <p className="text-xs text-gray-500"> MONTHS VALIDITY</p>
</div>
</div>
</div>
</div>
{/* <Link href="#tour-pass"> */}
<a href="#tour-pass">
<button className="mt-4 text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
LEARN MORE
</button>
</a>
{/* </Link> */}
</div>
</motion.div>
   </div>
      </div>

      {/* New About Section */}
     
   
    {/* <div className='w-full h-[150px] relative mt-5 '>
        <Image src="/home/mountain.jpg" objectFit='cover' layout='fill' alt='mountain strip travel pass'/>
    </div> */}
       <motion.div className=" md:hidden w-auto h-auto bg-gradient-to-b from-orange-200 via-yellow-100 to-white overflow-hidden shadow-xl rounded-xl mx-2 mt-2"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-4 gap-2">
<div className="text-xl font-bold text-yellow-800">TREK PASS</div>
 <div className="text-justify">
 The Trek Pass gives outdoor enthusiasts the chance to explore a variety of terrains, from tranquil scenic paths to challenging trails. Aligning with our motto "Create a Fitness Culture and Interact with Nature," it provides affordable access to the beauty of nature. With this pass, you can choose 6 treks from 20 destinations over 12 months, combining fitness with the exploration of nature's wonders.
</div>
{/* <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>
    Special Deal: <span className="line-through" style={{ color: '#9CA3AF', margin: '0 10px', fontWeight: '400' }}>₹24,000</span>
    <span className='font-bold' style={{ fontSize: '26px', color: '#EF4444' }}>₹12,000/-</span>
</div> */}

<div>
    <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>Special Deal:<span className="line-through" style={{ color: '#9CA3AF', fontWeight: '400', fontSize: '20px' }}>₹24,000
</span>  </div> </div> 
<div className='text-yellow-800 font-extrabold text-2xl '> ₹12,000/-
                      </div>
<div className="space-y-4">
<div className="flex justify-around items-center text-center">
<div className="flex space-x-3">

<div>

 <p className="md:text-5xl text-4xl text-yellow-500 font-semibold">6</p>
 <p className="text-xs text-gray-500">TREKS</p>
</div>
<div>
<p className="md:text-5xl text-4xl text-yellow-500 font-semibold">
12 

</p>
 <p className="text-xs text-gray-500">MONTHS VALIDITY</p>
</div>
<div className='flex justify-center items-center'>
<Link href="#trek-pass">
<button className=" text-black bg-yellow-400 border border-yellow-400 font-bold w-40 h-10 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
Learn More
</button>
</Link>
</div>
</div>
</div>
</div>

</div>
</motion.div>
<motion.div className=" md:hidden w-auto h-auto bg-gradient-to-b from-orange-200 via-yellow-100 to-white overflow-hidden shadow-xl m-2 rounded-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible">
<div className="flex flex-col items-center justify-between h-full p-4 gap-2">
<div className="text-xl font-bold text-yellow-800">TOUR PASS</div>
 <div className="text-justify">
 The Tour Pass offers an escape to diverse city cultures, from  historic landmarks to lively markets, perfect for those looking to break from routine and enjoy unique experiences.  In line with our ethos, "Escape Daily Life, Depression, and Relax in Nature," this pass is much more than just a ticket. It offers the flexibility to select 6 from 20 destinations for exploration over 12 months,  ensuring a relaxed travel experience.
</div>
{/* <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>
    Special Deal: <span className="line-through" style={{ color: '#9CA3AF', margin: '0 10px', fontWeight: '400' }}>₹24,000</span>
    <span className='font-bold' style={{ fontSize: '26px', color: '#EF4444' }}>₹12,000/-</span>
</div> */}

<div>
    <div style={{ fontSize: '20px', fontWeight: '600', color: '#4B5563' }}>Special Deal:<span className="line-through" style={{ color: '#9CA3AF', fontWeight: '400', fontSize: '20px' }}>₹42,000
</span>  </div> </div> 
<div className='text-yellow-800 font-extrabold text-2xl '> ₹21,000/-
                      </div>
<div className="space-y-4">
<div className="flex justify-around items-center text-center">
<div className="flex space-x-3">

<div>

 <p className="md:text-5xl text-4xl text-yellow-500 font-semibold">6</p>
 <p className="text-xs text-gray-500">TOURS</p>
</div>
<div>
<p className="md:text-5xl text-4xl text-yellow-500 font-semibold">
12 

</p>
 <p className="text-xs text-gray-500">MONTHS VALIDITY</p>
</div>
<div className='flex justify-center items-center'>
<a href="#tour-pass">
<button className=" text-black bg-yellow-400 border border-yellow-400 font-bold w-40 h-10 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
Learn More
</button>
</a>
</div>
</div>
</div>
</div>

</div>
</motion.div>
    <div className="bg-black md:p-10 py-5">
      <div className="max-w-6xl mx-auto rounded-2xl bg-black shadow-md overflow-hidden">
        <div className="md:p-5">
          <h1 className="md:text-[40px] text-3xl font-bold text-center text-yellow-500">What you get ?</h1>
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
      <div className="grid grid-cols-2 gap-4 mx-6 my-4 md:hidden relative">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-300 rounded-xl h-[100px] " onClick={() => setSelectedBenefit(benefit)}>
            {/* <div className="relative bg-white rounded-full p-5 shadow-lg flex items-center justify-center"> */}
              <FontAwesomeIcon icon={benefit.icon} className="text-2xl text-yellow-500" />
            {/* </div> */}
            <div className="mt-2 text-center text-sm font-semibold">{benefit.title}</div>
            <div className='absolute left-2 top-1'><FontAwesomeIcon icon={faHandPointer} /></div>
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
    <div className='text-center md:mt-10 mt-5 '>
        <h2 className='md:text-[40px] text-3xl ' >Select from 20 Amazing <span className='text-yellow-500 font-bold'>Treks</span> & <span className='text-yellow-500 font-bold'>Tours</span>  </h2>
    </div>
    <div className='flex flex-row bg-gray-100 md:mt-10 mt-5'>
  <Swiper
      modules={[ Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={false} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 400, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      // Responsive breakpoints
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          autoplay: { delay: 200, disableOnInteraction: false }
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
           autoplay: { delay: 200, disableOnInteraction: false }, 
        },
        1000: {
            slidesPerView: 6,
          },
      }}
    >
      {treks.map((trek, index) => (
        <SwiperSlide key={index}>
          <div className="py-4 flex flex-row font-bold rounded-lg text-center text-sm justify-center items-center">
          <Link href={`/trek/${trek.link}`}> <h3  style={{
  background: 'linear-gradient(to right, #FE5A1C, #FF9E28)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent', // Fallback for browsers that do not support background-clip
  display: 'inline' // This is necessary for the gradient to apply correctly
}}>{trek.name}</h3></Link> 
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
      autoplay={{ delay: 400, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      // Responsive breakpoints
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          autoplay: { delay: 200, disableOnInteraction: false }, 
        },
        // when window width is >= 768px
         768: {
          slidesPerView: 4,
          autoplay: { delay: 200, disableOnInteraction: false }, 
        },
        1000: {
            slidesPerView: 6,
          },
      }}
    >
      {tours.map((tour, index) => (
        <SwiperSlide key={index}>
          <div className="py-4 flex flex-row font-bold rounded-lg text-center text-sm justify-center items-center ">
          <Link href={`/tour/${tour.link}`}>    <h3  style={{
  background: 'linear-gradient(to right, #56CCF2, #2F80ED)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent', // Fallback for browsers that do not support background-clip
  display: 'inline' // This is necessary for the gradient to apply correctly
}}>{tour.name}</h3></Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
    <div className="md:mx-10 mx-4 md:py-10 py-5">
      <div className="flex flex-col md:flex-row items-center  md:space-x-12">
        {/* <div className='w-full'> */}
        {/* Title with each word on a new line */}
        <div className=" md:flex flex-col  md:w-3/4">
          <h2 className="md:text-[40px] text-3xl flex justify-center items-center md:block font-bold text-black uppercase md:ml-14 ml-2">
            <span className="block">What they</span> 
            <span className="text-center ml-2 md:ml-0 text-yellow-500">say</span>
          </h2>
          </div>
          <div className=" md:w-2 bg-yellow-500 md:h-24 w-10 h-1 ml-2 mt-4 md:ml-0 md:mt-0"></div>
        
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        className="mySwiper my-unique-swiper  w-full md:w-auto mt-5 md:mt-0"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex md:flex-row flex-col justify-center items-center px-6  md:py-20 py-10 bg-gray-100 rounded-2xl shadow-xl w-full md:max-w-3xl mx-auto ">
              <div className="flex justify-center items-center flex-col w-[200px]">
                <div className="h-16 w-16 rounded-full relative">
                  <Image src={testimonial.image} alt="Avatar of the testimonial author" layout='fill' objectFit='cover' className='rounded-full' />
                </div>
                <div className="text-lg font-semibold text-black mt-4">{testimonial.name}</div>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
              <div className=" flex-1 relative">
                <p className="text-gray-600 mt-2 before:content-['\201C'] before:absolute before:text-6xl before:-top-6 before:-left-4 before:text-yellow-500 after:content-['\201D'] after:absolute after:text-6xl after:-bottom-[55px] md:after:-right-4 after:-right-1 after:text-yellow-500 text-justify">{testimonial.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    <section className="bg-gray-100 md:py-10 md:px-6 pl-4 pr-4 py-5 "id="trek-pass">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Content Area */}
          <div className="w-full lg:w-1/2  mb-6 lg:mb-0">
          <h2 className="md:text-[40px] text-3xl font-bold text-black mb-4">
  Why should you avail the <br className='hidden md:block'/><span className="text-yellow-500">Trek Pass</span><span className='pl-1 '>?</span>
</h2>
  <div className="flex items-center md:mb-6">
  </div>
  <div className="flex">
  <div className="md:hidden flex flex-col mr-4">
    <div className="h-10 bg-yellow-500 w-[1px]"></div>
  </div>
  <div>
    <p className="md:text-lg text-base text-gray-800 mb-4 text-justify">
    Unlock a year of adventure and nature exploration with our Trek Pass, now available for only ₹12,000. This pass provides 12 months of access, allowing you to select any 6 treks from our range of 20 stunning options – each a 2-day, 1-night adventure – all at a remarkable 50% discount. Originally valued at ₹24,000, this pass is exclusively applicable to all our 2-day, 1-night treks, making it your ticket to unforgettable adventures at unbeatable value.
    </p>
    <p className="text-sm text-gray-600 mb-6 text-justify">
    Dive into the beauty of nature and embark on extraordinary journeys while saving more. Explore more, spend less!
    </p>
  
    <div >  <Link href="/travel-pass/book"><button className=" text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
Avail Now
</button></Link></div>
 
  </div>

  <div className="flex-col ml-4 hidden md:flex">
    <div className="h-full bg-yellow-500 w-1"></div>
  </div>
</div>

</div>
          {/* Image Area */}
  {/* Decorative shapes */}
  {/* Image container */}
  <div className="w-full md:w-1/2" >
  <img src="/about/tour.png" alt="About our Company" className="w-full h-auto object-cover " />
</div>
  {/* Button */}
  {/* <button className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    More About Us
  </button> */}
  <div ></div>
</div>

      </section>
    
          <section className="bg-gray-100 md:pb-10 py-5 md:px-6 pl-4 pr-4" id="tour-pass" >
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    {/* Content Area */}
    <div className="w-full lg:w-1/2 flex lg:order-2">
   
      <div className="flex-1">
   
        <h2 className="md:text-[40px] text-3xl font-bold text-black mb-4" >
          Why should you avail the <br className='hidden md:block'/> <span className="text-yellow-500">Tour Pass</span><span className='pl-1'>?</span>
        </h2>
        <div className="flex items-center md:mb-6">
  </div>
        <div className="flex flex-row ">
    <div className="md:h-auto h-10 bg-yellow-500 w-3 mr-3 "></div>
 
      <div>
        <p className="md:text-lg text-base text-gray-800 mb-4 text-justify">
        Unlock a year of unforgettable travel experiences with our Tour Pass, now available for just ₹21,000. Delve into new cultures, indulge in diverse cuisines, and unwind from the hectic pace of life. This pass grants you 12 months of access to select any 6 tours from our specially curated list of 20 options, all at an exclusive 50% discount. Each tour is a 2-day, 1-night package, perfectly crafted for your exploration and relaxation. Originally valued at ₹42,000, this incredible offer is now available at half the price, applicable exclusively to all our 2-day, 1-night packages.
        </p>
        <p className="text-sm text-gray-600 mb-6 text-justify">
        Create lasting memories as you discover unique destinations and indulge in the richness of travel experiences. Your journey to exploration and relaxation begins here – unlock more, create memories!
        </p>
  
          <div> <Link href="/travel-pass/book"><button className=" text-black bg-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:text-yellow-400 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
Avail Now
</button></Link></div>

        </div>
  
      </div>
   
      </div>
    </div>
    {/* Image container */}
    <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:order-1">
      <img src="/about/trek.png" alt="About our Company" className="w-full h-auto object-cover" />
    </div>
  </div>
</section>

  
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
      
  <Footer />
 </div>
  )
}

export default Travel
