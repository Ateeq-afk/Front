'use client'
import React,{useState,useEffect,useRef} from 'react'
import Header from '../Navbar/Header/Header'
import Footer from '../Navbar/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faPercent, faUserClock, faLock, faTag, faSuitcase, faCalendarCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
type FaqContent = {
    General: { question: string; answer: string }[];
    Safety: { question: string; answer: string }[];
    Service: { question: string; answer: string }[];
    Policy: { question: string; answer: string }[];
    Booking: { question: string; answer: string }[];
    Payment: { question: string; answer: string }[];
  };
  const tabs: (keyof FaqContent)[] = ['General', 'Safety', 'Service', 'Policy', 'Booking', 'Payment'];
const Travel = () => {
    // Titles and descriptions for each benefit card
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Update isMobile based on the actual window width
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
      
        // Handle window resize
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
      }, []);
const benefits = [
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
          const imageContainerVariants = {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2 } }
          };
        
  return (
    <div className='bg-white text-black'>
        <Header />
            <div className="flex  pt-[100px] mx-10">
    {/* Left Side */}
    <div className='flex  md:flex-row'>
    <div className="w-[55%] p-4 md:block hidden">
        <div className='w-full h-[400px] relative'>
      <Image
        src="/home/Travel.png"
        alt="Travel Pass Image"
        layout='fill'
        objectFit='cover'
      />
      </div>
    </div>

    {/* Right Side */}
    <div className="md:w-[50%] px-8 py-4  border shadow-xl rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-4 text-yellow-500 text-center">What's a Travel Pass?</h2>

      {/* Paragraph */}
      <p className="mb-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi
      </p>

      {/* Card 1 */}
      <div className="flex md:flex-row gap-2 ">
        
          {cards.map((card, index) => (
            <Link href='/travel-pass/book'>
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="border border-black rounded-lg shadow-md w-[220px] transform hover:scale-105 transition duration-500 ease-in-out dark:bg-gray-700"
            >
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 to-yellow-600 rounded-lg">
                
                <div className="p-4 text-center">
                  <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">{card.title}</h3>
                  <p className="text-black text-sm">
                    {index === 0 ? (
                      <span>
                        Venture into 6 Treks for just <span className="line-through">₹24,000</span> ₹12,000/-
                      </span>
                    ) : (
                      <span>
                        Explore 6 Tours for just <span className="line-through">₹42,000</span> ₹21,000/-
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
        <div className='flex justify-center items-center mt-5'>
            
        <Link href='/travel-pass/book'> <button className="text-white bg-black border border-yellow-500 font-bold py-2 px-4 rounded-full hover:text-yellow-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300">
              AVAIL NOW
          </button></Link>

        </div>
  </div>
  </div>
  
  </div>
  <div className="bg-black text-white pl-auto pr-auto ">
          <div className="container mx-auto md:my-12 mt-12 md:p-6 relative">
          {/* Overlay Title */}
          <div className="relative">
          {/* Image Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 md:gap-2 gap-1">
          {adventures.slice(0, isMobile ? 6 : adventures.length).map((adventure, index) => (
          <div key={index} className="relative w-full md:h-[150px] h-[100px] ">
          {/* Ensure your images are square by providing the same width and height, or by using aspect-ratio classes */}
          <Image
          src={adventure.src}
          alt={adventure.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          />
          </div>
          ))}
          </div>
          
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <div className="text-white md:text-4xl text-2xl font-bold p-4 bg-black bg-opacity-50 rounded-lg">
          40 DESTINATIONS
          </div>
          </div>
          </div>
          
          
          {/* Stats Section */}
          <div className="flex justify-around md:mt-12 mt-6">
            <div className="text-center">
              <span className="md:text-6xl text-4xl font-bold text-yellow-500">20</span>
              <p className="md:text-xl text-sm font-semibold">TREKS TO</p>
              <p className="md:text-xl text-sm font-semibold">CHOOSE FROM</p>
            </div>
            <div className="text-center">
              <span className="md:text-6xl text-4xl font-bold text-yellow-500">20</span>
              <p className="md:text-xl text-sm font-semibold">TOURS TO</p>
              <p className="md:text-xl text-sm font-semibold">CHOOSE FROM</p>
            </div>
            <div className="text-center">
              <span className="md:text-6xl text-4xl font-bold text-yellow-500">50%</span>
              <p className="md:text-xl text-sm font-semibold">DISCOUNTED</p>
              <p className="md:text-xl text-sm font-semibold">RATES</p>
            </div>
          </div>

          </div>
          </div>
  <div className='flex flex-row bg-black'>
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
          <div className="py-4 flex flex-row  text-white rounded-lg text-center text-sm justify-center items-center">
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
  {/* <div className="bg-black">
      <div id="slider" ref={sliderRef} className="flex overflow-hidden whitespace-nowrap ">
        {[...treks, ...treks].map((trek, index) => (
          <div key={index} className="inline-block p-4 text-white rounded-lg mr-4">
            {trek}
          </div>
        ))}
      </div>
    </div> */}
  <div className='py-10'>
  <h2 className="md:text-4xl text-3xl font-bold text-center mb-5 text-black">What you get ?</h2>
      <div className="flex justify-center md:pb-10 pb-5">
        <hr className="border-t-2 border-yellow-500 md:w-[60px] w-[30px]" />
      </div>
      <p className="text-justify md:mx-6 mb-10 break-words text-black">
        Join the Backpackers United Member community once you avail the travel pass! ...
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-6 gap-3 text-white">
 {benefits.map((benefit, index) => (
    <div key={index} className="rounded-lg shadow-md md:p-6 p-4 flex flex-col items-center border border-yellow-500" style={{ background: '#090f14', color: 'white' }}>
      {/* Circle for the icon */}
      <div className="mb-4 flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16">
        <FontAwesomeIcon icon={benefit.icon} className="text-black text-3xl" />
      </div>
      {/* Text */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    </div>
  ))}
  </div>
  </div>
  <div className="flex justify-center items-center ">
      <div className="relative p-10">
        <p className="text-center relative">
          <span className="absolute top-[-30px] left-0 text-6xl text-yellow-500">“</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...
          <span className="absolute bottom-[-50px] right-0 text-6xl text-yellow-500">”</span>
        </p>
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
          <div className="flex flex-col md:flex-row items-center justify-center pt-14 space-y-14 md:space-y-0 md:space-x-8">
      {/* Image container with rounded corners and shadow */}
      <motion.div
        className="md:flex-1 flex justify-center items-center p-6"
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="rounded-3xl overflow-hidden shadow-xl w-full">
          <img src="/home/Kashmir.webp" alt="Descriptive Alt Text" className="w-full object-cover" style={{ maxHeight: '50vh' }} />
        </div>
      </motion.div>
      {/* Info box container with similar style to the provided card and additional content */}
      <div className="md:flex-1 bg-white text-black p-8 space-y-4 border-2 border-yellow-500 rounded-lg flex flex-col justify-between" style={{ maxHeight: '50vh' }}>
        <div>
          <h2 className="text-2xl font-bold">Why us</h2>
          <p className="flex-grow">328° - How we managed to achieve this exceptional metric. We focus on providing the best user experience and seamless service.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Unparalleled customer service</li>
            <li>Innovative solutions</li>
            <li>Expert team members</li>
            <li>Positive user feedback</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
        <div>
          <div className="text-4xl font-bold">049.200</div>
          <p>Benefit and feature description, emphasizing our strengths and core values.</p>
        </div>
        <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded self-start mt-4">Discover More</button>
      </div>
    </div>
  <Footer />
 </div>
  )
}

export default Travel
