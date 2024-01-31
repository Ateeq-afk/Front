"use client"
import React, { useState} from 'react'; 
import Image from 'next/image';
import Header from '@/Components/Navbar/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Destproduct from '../Destination/Destproduct';
import RelatedDestinations from '../Destination/RelatedDest';

const Blognew = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const [isParagraphExpanded, setIsParagraphExpanded] = useState(false);
  const paragraph = "Your full paragraph text goes here.It contains several sentences. full paragraph text  Your full paragraph text  Your full paragraph text  Your full paragraph text Your full paragraph text Your full paragraph text You want some of these sentences  It contains several sentences. You want some of these sentences  It contains several sentences. You want some of these sentences  It contains several sentences. You want some of these sentences to be blurred until the user clicks 'Read More'. The first few sentences will always be visible. The last three sentences will be blurred out initially.";
  const paragraphClass = `transition-all duration-300 ease-in-out overflow-hidden relative max-h-[180px]`; // Tailwind classes
  
  // Split the paragraph into sentences
  const sentences = paragraph.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g) as string[];
  const toggleReadMore = () => {
    setIsParagraphExpanded(!isParagraphExpanded);
  };
  // We consider the last three sentences for the blur effect
  const blurThreshold = Math.ceil(sentences.length * 0.5);
  const activitiesData = [
    {
      "id": 1,
      "title": "Nandi Hills Drive In Camp",
      "description": "A memorable camping experience at Nandi Hills with stunning views and exciting activities.",
      "duration": "2D/1N",
      "timeToSpend": "1 to 2 hours",
      "startingPrice": 99,
      "originalPrice": 199,
      "image": "/path/to/nandi-hills-image.jpg",
      "tags": ["Free", "Sightseeing"]
    },
    {
      "id": 2,
      "title": "Lalbagh Botanical Garden Visit",
      "description": "Explore the serene beauty of the famous Lalbagh Botanical Garden.",
      "duration": "Half Day",
      "timeToSpend": "2 to 3 hours",
      "startingPrice": 49,
      "originalPrice": 79,
      "image": "/path/to/lalbagh-image.jpg",
      "tags": ["Nature", "Sightseeing"]
    },
    {
      "id": 3,
      "title": "Cubbon Park Picnic",
      "description": "Enjoy a relaxing picnic at the green and lush Cubbon Park.",
      "duration": "Full Day",
      "timeToSpend": "3 to 4 hours",
      "startingPrice": 29,
      "originalPrice": 59,
      "image": "/path/to/cubbon-park-image.jpg",
      "tags": ["Family", "Relaxation"]
    },
    {
      "id": 4,
      "title": "MG Road Shopping Spree",
      "description": "Experience the vibrant and bustling shopping street of MG Road.",
      "duration": "Full Day",
      "timeToSpend": "4 to 5 hours",
      "startingPrice": 0,
      "originalPrice": 0,
      "image": "/path/to/mg-road-image.jpg",
      "tags": ["Shopping", "Culture"]
    }
  ];
  
  return (
    <>
    <Header/>
 
    <div className="relative flex items-center justify-center bg-black text-white pt-10" style={{ height: '65vh' }}> {/* Adjusted height here */}
  
  <Image
    src="/home/valley.jpg" // Update this path to the correct one
    alt="Wayanad"
    layout="fill"
    objectFit="cover"
    className="opacity-50" // This darkens the image for better text visibility
  />
  <div className="z-10 text-center mt-5">
    <h1 className="text-6xl font-bold mb-4 text-white shadow-lg mx-24">
      20 Things to do in Bangalore   
    </h1>
    <div className="mt-2 mb-4 mx-auto h-1 w-10 bg-yellow-500"></div>

    
  </div>
</div>
      <div className="bg-black text-white py-3">
  <div className="container mx-auto max-w-6xl -pl-8">
    <nav className="text-black " aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <a href="#" className="text-gray-400 ">Home</a>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        <li className="flex items-center">
          <a href="#" className="text-gray-400 ">Destinations</a>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        <li className="flex items-center">
          <a href="#" className="text-gray-400 ">Wayanad</a>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        <li className="flex items-center text-white">
     20 Things to do in Wayanad
        </li>
      </ol>
    </nav>
  </div>
</div>
   {/* Activity section with Read More/Read Less */}
<div className='bg-gray-200'>
   <div className="md:max-w-6xl mx-auto p-6 max-w-screen-xl  ">
        <div className="flex items-center mb-4">
          <span className="inline-block bg-yellow-500 w-1 h-12 mr-2"></span>
          <h1 className="text-3xl font-semibold">Activities to Do in Bangalore</h1>
        </div>
        <p className="mb-4">
          Camping at Nandi Hills, Stroll in Lalbagh, Picnic at Cubbon Park, Shopping at MG Road, Night Trek in Skandagiri, Day Outing at Guhantara, Have Fun at Wonderla, Visit Bangalore Palace, Sunrise Trek at Uttari Betta and many more.
        </p>
        {isExpanded && (
          <>
            <p className="mb-4">
              The list of activities to do in Bangalore prick everyone’s interest. Whether you are on a quest to explore new places, dive into Indian history, gain knowledge about the rich culture or loiter in the woods, Bangalore renders you an action-packed vacation.
            </p>
            <p className="mb-4">
              Worry not if you wish to unleash the adventurer in you as there are a lot of thrilling activities in Bangalore like trekking, parasailing, wildlife excursion, camping, watersports, various outdoor- indoor sports, and whatnot. You can also take the opportunity of living in a homestay surrounded by woods and enjoy the enthralling activities the place unfolds into.
            </p>
          </>
        )}
           <button onClick={toggleExpanded} className="text-yellow-600 hover:text-yellow-800 cursor-pointer">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      
      </div>
      </div>
    <div className="bg-black">
    <div className="text-center">
  <h2 className="text-4xl font-bold py-10 text-white"><span className='text-yellow-500'>Bangalore </span>  Packages</h2>
</div>
          <Destproduct />
<div className="w-full text-center py-4  bg-black ">
    <h1 className="text-6xl bg-black font-bold text-gray-300">Things to do in Wayanad</h1>
  </div>

<div className="flex justify-center bg-black text-white mx-20">
    <div className='flex flex-col'>

      <div className="flex w-[100%] max-w-screen-xl mt-8 mb-4 h-[500px]">
        {/* Left column for the content */}
        <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden  mx-auto flex">
  {/* Left column for the image and the descriptive paragraph */}
  <div className="w-1/2  relative" > 
    {/* Image at the top */}
    <Image
      src="/home/Wayanad.webp" // Update the path to your image if needed
      alt="St. Mark's Square" // Replace with the actual height of your image
      layout="fill"
      objectFit='cover'
    />
    {/* Descriptive paragraph below the image */}
  </div>

  {/* Right half for the remaining content */}
  <div className="w-1/2 px-4 flex flex-col justify-between ">
    {/* Title, metadata, tags, and button */}
    <div>
      <h2 className="font-bold text-4xl text-gray-700 mb-4 mt-4">
  #1 <span className='h-10 text-yellow-500 w-2'>|</span> Nandi Hills Drive In Camp
</h2>

<p className="text-gray-700 text-base mb-4">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> Nandi Hills 
      <span className="mx-2">|</span>
      <FontAwesomeIcon icon={faClock} /> 2D/1N
    </p>
      <div className="flex items-center space-x-2 mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
      Free, Sightseeing
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          1 to 2 hours TIME TO SPEND
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="mr-4">
        <span className="text-lg font-bold text-black">Starting at </span>
        <span className="text-xl font-bold text-green-600">&#8377;99</span> {/* Discounted Price */}
        <span className="text-lg text-gray-500 line-through ml-2">&#8377;199</span> {/* Original Price */}
      </div>

      <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2">
        Book Now
      </button>
    </div>
    <div className={`transition-all ease-in-out duration-300 ${paragraphClass}`}>
    <p className="text-gray-700 text-sm mb-4 ">
          {sentences.map((sentence, index) => (
            <span key={index}>
              {index >= blurThreshold && !isParagraphExpanded ? (
                <span className="blur">{sentence} </span>
              ) : (
                <span>{sentence} </span>
              )}
            </span>
          ))}
        </p>
        </div>
        <button onClick={toggleReadMore} className="mt-4 bg-blue-500 text-white hover:bg-blue-700 transition duration-300 ease-in-out font-bold py-2 px-4 rounded-full">
          {isParagraphExpanded ? 'Read Less' : 'Read More'}
        </button>
    </div>
    {/* Rest of the content */}
  </div>
</div>


        {/* Right column for the form */}
    
    </div>
    <div className="flex w-[100%] max-w-screen-xl mb-4 h-[500px]">
        {/* Left column for the content */}
        <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden  mx-auto flex">
  {/* Left column for the image and the descriptive paragraph */}
  <div className="w-1/2  relative" > 
    {/* Image at the top */}
    <Image
      src="/home/Wayanad.webp" // Update the path to your image if needed
      alt="St. Mark's Square" // Replace with the actual height of your image
      layout="fill"
      objectFit='cover'
    />
    {/* Descriptive paragraph below the image */}
  </div>

  {/* Right half for the remaining content */}
  <div className="w-1/2 px-4 flex flex-col justify-between ">
    {/* Title, metadata, tags, and button */}
    <div>
      <h2 className="font-bold text-4xl text-gray-700 mb-4 mt-4">
  #1 <span className='h-10 text-yellow-500 w-2'>|</span> Nandi Hills Drive In Camp
</h2>

<p className="text-gray-700 text-base mb-4">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> Nandi Hills 
      <span className="mx-2">|</span>
      <FontAwesomeIcon icon={faClock} /> 2D/1N
    </p>
      <div className="flex items-center space-x-2 mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
      Free, Sightseeing
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          1 to 2 hours TIME TO SPEND
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="mr-4">
        <span className="text-lg font-bold text-black">Starting at </span>
        <span className="text-xl font-bold text-green-600">&#8377;99</span> {/* Discounted Price */}
        <span className="text-lg text-gray-500 line-through ml-2">&#8377;199</span> {/* Original Price */}
      </div>

      <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2">
        Book Now
      </button>
    </div>
    <div className={`transition-all ease-in-out duration-300 ${paragraphClass}`}>
    <p className="text-gray-700 text-sm mb-4 ">
          {sentences.map((sentence, index) => (
            <span key={index}>
              {index >= blurThreshold && !isParagraphExpanded ? (
                <span className="blur">{sentence} </span>
              ) : (
                <span>{sentence} </span>
              )}
            </span>
          ))}
        </p>
        </div>
        <button onClick={toggleReadMore} className="mt-4 bg-blue-500 text-white hover:bg-blue-700 transition duration-300 ease-in-out font-bold py-2 px-4 rounded-full">
          {isParagraphExpanded ? 'Read Less' : 'Read More'}
        </button>
    </div>
    {/* Rest of the content */}
  </div>
</div>


        {/* Right column for the form */}
    
    </div>
    <div className="flex w-[100%] max-w-screen-xl  mb-4 h-[500px]">
        {/* Left column for the content */}
        <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden  mx-auto flex">
  {/* Left column for the image and the descriptive paragraph */}
  <div className="w-1/2  relative" > 
    {/* Image at the top */}
    <Image
      src="/home/Wayanad.webp" // Update the path to your image if needed
      alt="St. Mark's Square" // Replace with the actual height of your image
      layout="fill"
      objectFit='cover'
    />
    {/* Descriptive paragraph below the image */}
  </div>

  {/* Right half for the remaining content */}
  <div className="w-1/2 px-4 flex flex-col justify-between ">
    {/* Title, metadata, tags, and button */}
    <div>
      <h2 className="font-bold text-4xl text-gray-700 mb-4 mt-4">
  #1 <span className='h-10 text-yellow-500 w-2'>|</span> Nandi Hills Drive In Camp
</h2>

<p className="text-gray-700 text-base mb-4">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> Nandi Hills 
      <span className="mx-2">|</span>
      <FontAwesomeIcon icon={faClock} /> 2D/1N
    </p>
      <div className="flex items-center space-x-2 mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
      Free, Sightseeing
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          1 to 2 hours TIME TO SPEND
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="mr-4">
        <span className="text-lg font-bold text-black">Starting at </span>
        <span className="text-xl font-bold text-green-600">&#8377;99</span> {/* Discounted Price */}
        <span className="text-lg text-gray-500 line-through ml-2">&#8377;199</span> {/* Original Price */}
      </div>

      <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2">
        Book Now
      </button>
    </div>
    <div className={`transition-all ease-in-out duration-300 ${paragraphClass}`}>
    <p className="text-gray-700 text-sm mb-4 ">
          {sentences.map((sentence, index) => (
            <span key={index}>
              {index >= blurThreshold && !isParagraphExpanded ? (
                <span className="blur">{sentence} </span>
              ) : (
                <span>{sentence} </span>
              )}
            </span>
          ))}
        </p>
        </div>
        <button onClick={toggleReadMore} className="mt-4 bg-blue-500 text-white hover:bg-blue-700 transition duration-300 ease-in-out font-bold py-2 px-4 rounded-full">
          {isParagraphExpanded ? 'Read Less' : 'Read More'}
        </button>
    </div>
    {/* Rest of the content */}
  </div>
</div>


        {/* Right column for the form */}
    
    </div>
   </div>
      <div className="flex w-1/2 my-8">
        {/* Left column for the content */}
   


        {/* Right column for the form */}
        <div className="mx-4">
          <form className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold mb-4">Enquiry Form</h3>
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
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Phone No
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="number" placeholder="Your Phone Number" />
            </div>
            <div className="">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
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
            {/* ... more form inputs ... */}
            <div className="flex items-center justify-between">
              <button className="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send Enquiry
              </button>
            </div>
          </form>
          <div className={`top-[100px]  sticky mt-5`} >
          <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden w-full ">
  {/* Sidebar header with decorative line */}
  <div className="flex items-center  py-2 bg-yellow-500">
    <div className="bg-red-600 h-full w-1"></div>
    <h3 className="text-white text-xl font-bold ml-2">Popular Reads</h3>
  </div>

  {/* Sidebar items list */}
  <ul>
    <li className="border-b border-gray-200">
      <a href="/link-to-article" className="flex items-center p-4 hover:bg-gray-100">
        <img className="w-12 h-16 object-cover rounded mr-4" src="/path-to-thumbnail.jpg" alt="Article thumbnail" />
        <span className="font-semibold text-black">50 Resorts in Bangalore for a Day Outing, Get Upto 50% Off</span>
      </a>
    </li>
    {/* Repeat for other items */}
  </ul>
  <ul>
    <li className="border-b border-gray-200">
      <a href="/link-to-article" className="flex items-center p-4 hover:bg-gray-100">
        <img className="w-12 h-16 object-cover rounded mr-4" src="/path-to-thumbnail.jpg" alt="Article thumbnail" />
        <span className="font-semibold text-black">50 Resorts in Bangalore for a Day Outing, Get Upto 50% Off</span>
      </a>
    </li>
    {/* Repeat for other items */}
  </ul>
  <ul>
    <li className="border-b border-gray-200">
      <a href="/link-to-article" className="flex items-center p-4 hover:bg-gray-100">
        <img className="w-12 h-16 object-cover rounded mr-4" src="/path-to-thumbnail.jpg" alt="Article thumbnail" />
        <span className="font-semibold text-black">50 Resorts in Bangalore for a Day Outing, Get Upto 50% Off</span>
      </a>
    </li>
    {/* Repeat for other items */}
  </ul>
  <ul>
    <li className="border-b border-gray-200">
      <a href="/link-to-article" className="flex items-center p-4 hover:bg-gray-100">
        <img className="w-12 h-16 object-cover rounded mr-4" src="/path-to-thumbnail.jpg" alt="Article thumbnail" />
        <span className="font-semibold text-black">50 Resorts in Bangalore for a Day Outing, Get Upto 50% Off</span>
      </a>
    </li>
    {/* Repeat for other items */}
  </ul>

</div>
</div>
        </div>
      </div>
    </div>
   <div className="bg-gray-200 md:px-8 py-4 md:max-w-[1120px] p-6 max-w-screen-lg rounded-lg mt-10 mx-auto">
  <div className="text-4xl font-bold mb-6 ">Other Blogs</div>
  <div className="flex">
    {/* Large featured story on the left */}
    <div className="w-2/3 pr-4">
      <div className="">
        <img className="w-full h-96 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Featured story image" />
        <div className="mt-2">
          <h3 className="text-xl font-semibold">Venice introduces new tourist rules for 2024, including an entry fee and </h3>
          <p className="text-gray-600 mt-2 line-clamp-2">In an effort to regulate the number of tourists within the city, Venice is introducing a new booking system for visitors.</p>
        </div>
      </div>
    </div>
    {/* List of smaller stories on the right */}
    <div className="w-1/3">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="text-lg font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
        {/* Repeat the above block for each story in the list */}
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="text-lg font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
        {/* Repeat the above block for each story in the list */}
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="text-lg font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
        {/* Repeat the above block for each story in the list */}
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="text-lg font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
        {/* Repeat the above block for each story in the list */}
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 object-cover rounded-lg" src="/home/Wayanaddrew.jpg" alt="Story thumbnail" />
          <div>
            <h4 className="text-lg font-semibold">Unesco recommends Venice for its World Heritage in Danger list</h4>
          </div>
        </div>
        {/* Repeat the above block for each story in the list */}
      </div>
    </div>
    </div>
  </div>
   <div>
   <h2 className="text-4xl font-semibold text-white mt-10 text-center">Related Destinations</h2>
   <RelatedDestinations />
    </div>
</div>

    
    </>
  );
}
export default Blognew;