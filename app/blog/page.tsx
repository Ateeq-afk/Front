'use client'
import DestShop from '@/Components/Destination/DestShop';
import TrekSlider from '@/Components/Home/Trekslider/Trekslide';
import Footer from '@/Components/Navbar/Footer/Footer';
import Header from '@/Components/Navbar/Header/Header'
import Image from 'next/image';
import React,{useState} from 'react'
import { FaCalendar } from "react-icons/fa";

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
const page = () => {
    const [readMore, setReadMore] = useState(false);
  return (
    <div className='bg-white'>
      <Header />
      <div className='bg-black h-[80px]'></div>
      <div className="relative bg-black text-white overflow-hidden  flex">
    <div className="container mx-auto flex md:flex-row  flex-col items-center h-full relative">
    <div className="md:w-[40%]  flex flex-col md:items-start md:text-left  pl-12">
  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
    Travel Recommendations
  </p>
  <h1 className="title-font sm:text-5xl text-4xl font-bold mb-4">
    {/* KAYAK helps Indians search for a trip down memory lane – for less – this summer */}
    10 Things to do in Wayanad
  </h1>
  <p className="mb-8">4 mins read</p>
  <div className="flex items-center">
    <div className="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-500 text-white mr-3">
    <FaCalendar />
    </div>
    <p className="text-base">26th April 2023</p>
    <img
              src="/home/GOA.jpg" // Update the path to your profile image
              alt="Kritika Jyotshi"
              className="w-12 h-12 rounded-full border-4 border-yellow-400 ml-5"
            />
            {/* Name and verified badge */}
            <span className="text-white ml-3">by <span className='font-semibold'>Kritika Jyotshi</span></span>
  </div>
</div>
<div className="w-[60%]">
  <div className="w-full h-[400px] relative ">
    <Image
      src="/home/Kashmir.webp" // Make sure this path is correct
      alt="Experience the real Portugal"
      layout="fill"
      objectFit="cover"
    />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent bg-opacity-30"></div>
  </div>
</div>

    </div>
  </div>
  <div className='container mx-auto px-20  bg-white'>
  <div className="bg-white text-black md:mt-5 mt-8 p-4 md:rounded-xl shadow-md ">
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
  </div>
  <div className="container mx-auto px-20 py-10 bg-white">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left content - Main article */}
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-black">
            Ponte Vecchio, the meeting point of Florentine socio-economic life
          </h1>
          <img
            src= "\about\solo.jpg"
            alt="Duomo di Milano"
            className="max-w-xm w-full h-auto rounded-lg mb-4"
          />
          <p className="text-base mb-4 text-black">
            With a height of 158 meters and the famous statue of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
          <p className=" rounded-lg text-base mb-4 text-black">
            The construction of the Duomo began in 1386...
            of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
          <p className=" rounded-lg text-base mb-4 text-black">
            The construction of the Duomo began in 1386...
            of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
          <h1 className="text-2xl font-bold mb-4 text-black">
            Ponte Vecchio, the meeting point of Florentine socio-economic life
          </h1>
          <img
            src= "\about\solo.jpg"
            alt="Duomo di Milano"
            className="max-w-xm w-full h-auto rounded-lg mb-4"
          />
          <p className="text-base mb-4 text-black">
            With a height of 158 meters and the famous statue of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
          <p className=" rounded-lg text-base mb-4 text-black">
            The construction of the Duomo began in 1386...
            of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
          <p className=" rounded-lg text-base mb-4 text-black">
            The construction of the Duomo began in 1386...
            of the Madonnina that watches over the city, the
            Duomo di Milano is undoubtedly one of the most beautiful cathedrals in Italy...
            {/* Add the rest of the text here */}
          </p>
        </div>
        {/* Right content - Related Posts */}
        <div className="md:w-1/4 mt-8 md:mt-0">
            
          <h2 className="text-xl font-bold mb-4 text-black">Related Posts</h2>
          <div className="mb-4">
            {/* Repeat this block for each related post */}
            <a href="/link-to-related-post" className="block mb-2">
              <img
                src="\about\it.jpg"
                alt="Related post"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-black">
                Thekkady – Cat Prowling and Spice Hunting
              </h3>
            </a>
            <a href="/link-to-related-post" className="block mb-2">
              <img
                src="\about\it.jpg"
                alt="Related post"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-black">
                Thekkady – Cat Prowling and Spice Hunting
              </h3>
            </a>
            <a href="/link-to-related-post" className="block mb-2">
              <img
                src="\about\it.jpg"
                alt="Related post"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-black">
                Thekkady – Cat Prowling and Spice Hunting
              </h3>
            </a>
            {/* Repeat end */}
            {/* Add more related posts here */}
          </div>
          <form className="bg-gray-500 p-4 rounded-xl mt-5 shadow-md top-[90px]  sticky md:block hidden">
            <h3 className="text-lg mb-4 text-yellow-500 font-bold">Enquiry Form</h3>
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
    </div>
    <div className='bg-black py-5'>
    <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 my-4 text-white"><span className='text-yellow-500'>Tour </span> Packages </h2>
</div>
        <div>
    <TrekSlider destination={destinations2}  sliderId="destsliderab" />
    </div>
    </div>
    <div>
    <div className="text-center">
  <h2 className="text-3xl font-bold md:my-6 mb-3 mt-8 text-white"><span className='text-yellow-500'>Shopping </span> </h2>
</div>
  <div >
    <DestShop destinations= {dest3}/>
    </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default page
