"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useState,MouseEvent} from 'react'
import { motion} from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import EnquiryForm from '@/Components/Book/EnquiryForm';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from 'swiper/modules';
  interface TourDateResponse {
    date: string;
  }
  interface Tour {
    urllink: string;
    testimage: string;
    testimagealt: string;
    name: string;
  }
  const TrekDate: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
    const [tourDates, setTourDates] = useState<string[]>([]);
    const [tours, setTours] = useState<Tour[]>([]);
    const [treks, setTreks] = useState<Tour[]>([]);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showContent, setShowContent] = useState<'calendar' | 'content'>('calendar');
    const minDate = new Date('2024-01-01');
    const maxDate = new Date('2024-12-31');
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const fetchTourDates = async () => {
          const response = await fetch('https://launch-api1.vercel.app/date/tours');
          const data: TourDateResponse[] = await response.json(); 
          const dates = data.map((tourDate: TourDateResponse) => new Date(tourDate.date)); 
          if (dates.length > 0) {
            dates.sort((a: Date, b: Date) => a.getTime() - b.getTime()); 
            setTourDates(dates.map((date: Date) => date.toISOString().split('T')[0])); 
            setSelectedDate(dates[0]); 
          }
        };
        fetchTourDates();
      }, []);
      useEffect(() => {
        const fetchTours = async () => {
          const offset = selectedDate.getTimezoneOffset() * 60000; 
  const localISODate = new Date(selectedDate.getTime() - offset).toISOString().split('T')[0];
          const response = await fetch(`https://launch-api1.vercel.app/date/tour/${localISODate}`);
          const data = await response.json();
          setTours(data);
        };
        fetchTours();
      }, [selectedDate]);
      useEffect(() => {
        const fetchTreks = async () => {
          const offset = selectedDate.getTimezoneOffset() * 60000; 
  const localISODate = new Date(selectedDate.getTime() - offset).toISOString().split('T')[0];
          const response = await fetch(`https://launch-api1.vercel.app/date/trek/${localISODate}`);
          const data = await response.json();
          console.log("maintrek",data)
          setTreks(data);
        };
        fetchTreks();
      }, [selectedDate]);
      const tileClassName = ({ date, view }: { date: Date; view: string }) => {
        const offset = date.getTimezoneOffset() * 60000; 
        const localISODate = new Date(date.getTime()  - offset).toISOString().split('T')[0];
        console.log("Checking date:", localISODate); 
        console.log("Available tourDates:", tourDates); 
        if (view === 'month' && tourDates.includes(localISODate)) {
          return 'highlight'; 
        }
      };
      const handleDateChange = (value: any, event: React.MouseEvent<HTMLButtonElement>) => {
        if (value instanceof Date) {
            setSelectedDate(value);
            if (isMobile) {
              const offset = value.getTimezoneOffset() * 60000;
              const adjustedDate = new Date(value.getTime() - offset);
              const localISODate = adjustedDate.toISOString().split('T')[0];
              if (tourDates.includes(localISODate)) {
                setShowContent('content'); 
              }
            }
        } else if (Array.isArray(value)) {
            console.log('Selected range:', value);
          } else {
            console.error('Unexpected value type:', typeof value);
          }
      };
    const toggleCalendarVisibility = () => {
        if (isMobile) {
            setShowContent(showContent === 'calendar' ? 'content' : 'calendar');
        }
    };
    const isDateHighlighted = () => {
        const offset = selectedDate.getTimezoneOffset() * 60000;
        const localISODate = new Date(selectedDate.getTime()  - offset).toISOString().split('T')[0];
        return tourDates.includes(localISODate);
    };
    const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
      if (view === 'month') {
        const offset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
        const localISODate = new Date(date.getTime() - offset).toISOString().split('T')[0];
        return !tourDates.includes(localISODate);
      }
      return false
    };
  return (
    <div>
    <div className='flex md:flex-row  md:mx-10 mx-4 md:gap-5 flex-col'>
    {showContent === 'calendar' && (
    <div style={{ flex: 1 }} className=''>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName} 
        minDate={minDate}
        maxDate={maxDate}
        tileDisabled={tileDisabled}/>
<div className='flex flex-row text-white md:px-2 bg-gray-800 mt-2 pt-2 pb-2 justify-center items-center md:w-[450px] 2xl:w-[650px] 2xl:text-xl w-auto rounded-xl'>
  <p className='md:text-center flex-grow md:text-base text-[10px] ml-2 md:ml-0'>
    All the slots for the trips/treks are on first come, first serve basis. Reach out to us now!
  </p>
  <div className='flex-shrink-0 ml-2'>
    <button className="bg-black text-yellow-500 border border-yellow-500 px-4 py-2 rounded-lg" onClick={() => setShowEnquiry(true)}>Send Enquiry</button>
  </div>
</div>
    </div>
    )}
     {showContent === 'content' && isMobile && (
                        <button onClick={toggleCalendarVisibility} className="text-white text-center my-2 ">
                            Show Calendar
                        </button>
                    )}
{(!isMobile || showContent === 'content') && (
        <div>
               {isDateHighlighted() ? (
                <>
        <div className='flex flex-row '>
            <h3 className='text-white transform rotate-50  md:text-2xl text-lg  text-center' style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Treks</h3>
            <div className='md:w-[50vw] w-[80vw]'>
            <Swiper
      spaceBetween={5}
      slidesPerView={2.5}
      freeMode={{ enabled: true, minimumVelocity: 0.1 }}
      modules={[FreeMode]}
      className="datesslider"
      breakpoints={{
        500: {
            slidesPerView: 2,
            initialSlide: 0
          },
        1000: {
          slidesPerView: 3.5,
          initialSlide: 0
        },
        1300:{
            slidesPerView: 4.5,
            initialSlide: 0
        }
      }}
    >
      {Array.isArray(treks) && treks.map((treks,index) => (
            <SwiperSlide>
 <Link href={`/trek/${treks.urllink}`} >  <div key={index} className="flex flex-col p-2 items-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[190px]">
      {/* Image source must be updated */}
      <div className='h-[150px] w-full relative'>
    <Image objectFit='cover' layout="fill"     src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${treks.testimage}`} 
           alt={treks.testimagealt} className='rounded-lg'
           />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> 
    </div>
      <div className="flex-1 text-white text-center">
        <h4 className="md:text-[14px] text-[12px] ">{treks.name}</h4>
      </div>
      <motion.button
               initial={{ backgroundColor: "#FBBF24", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
               transition={{ duration: 0.3 }}
            className="border border-yellow-500 md:py-1 md:px-8 w-full rounded-lg  text-black shadow-lg">
  Explore
      </motion.button>
    </div>
    </Link> 
    </SwiperSlide>
  ))}
  </Swiper>
  </div>
</div>
<div className='flex flex-row mt-3'>
            <h4 className='text-white transform rotate-50   md:text-2xl text-lg  text-center' style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Tours</h4>
            <div className='md:w-[50vw] w-[80vw]'>
            <Swiper
      spaceBetween={5}
      slidesPerView={2.5}
      freeMode={{ enabled: true, minimumVelocity: 0.1 }}
      modules={[FreeMode]}
      className="datesslider"
      breakpoints={{
        500: {
            slidesPerView: 2,
            initialSlide: 0
          },
        1000: {
          slidesPerView: 3.5,
          initialSlide: 0
        },
        1300:{
            slidesPerView: 4.5,
            initialSlide: 0
        }
      }}>
      {Array.isArray(tours) && tours.map((tour,index) => (
           <SwiperSlide>
 <Link href={`/tour/${tour.urllink}`} >  <div key={index} className="flex flex-col items-center p-2  rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[190px]">
      <div className='h-full w-full relative'>
    <Image objectFit='cover' layout="fill"     src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${tour.testimage}`} 
           alt={tour.testimagealt} className='rounded-lg'
           />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> 
    </div>
      <div className="flex-1 text-white text-center">
        <h4 className="md:text-[14px] text-[12px]  ">{tour.name}</h4>
      </div>
      <motion.button
               initial={{ backgroundColor: "#FBBF24", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
               transition={{ duration: 0.3 }}
            className="border border-yellow-500 md:py-1 md:px-4 w-full rounded-lg ml-2 text-black shadow-lg">
  Explore
      </motion.button>
    </div>
    </Link> 
        </SwiperSlide>
        ))}
        </Swiper>
</div>
</div>
</>
   ):(
<div>
  </div>
   )}
</div>
   )}
</div>
   {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} source='Home page' />}
  </div>
  )
}
export default TrekDate
