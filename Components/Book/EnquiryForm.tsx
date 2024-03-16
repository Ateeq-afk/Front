"use client"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{ useState, ChangeEvent,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import { motion } from "framer-motion"

interface EnquiryFormProps {
  onClose: () => void;
  source: string;  
}
const EnquiryForm = ({ onClose, source }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    callback: 'Expecting Callback',
    destination: '',
    numberofperson :'',
  });
  const [showMessage, setShowMessage] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
      setShowMessage(true);
  }, []);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // Determine if the event target is a checkbox and specifically for "callback"
    if (e.target.name === 'callback' && e.target instanceof HTMLInputElement) {
        // Toggle between "Expecting Callback" and an alternative value
        const callbackValue = e.target.checked ? 'Expecting Callback' : 'Not Expecting Callback'; // Adjust the "Not Expecting Callback" as needed
        setFormData(prevFormData => ({
          ...prevFormData,
          [e.target.name]: callbackValue,
        }));
    } else {
        // Handle other input changes normally
        setFormData(prevFormData => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
    }
};

  console.log(source,"source")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = {
      ...formData,
      source, 
    };
    try {
      const response = await fetch('https://launch-api1.vercel.app/enquiry/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      alert("Thank you for contacting Backpackers United, We will reach out to you soon")
      console.log(responseData); 
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error Submiting Form")
    }
  };
  return (
    // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-50 ">
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50"> 
       <CSSTransition in={showMessage} timeout={500} classNames="modal" unmountOnExit>{/* Ensuring the form is above other content with z-50 */}
      <div className="relative md:top-[10%] top-[15%] mx-auto p-5 border w-11/12 md:max-w-3xl shadow-lg rounded-xl bg-black ">
      <div className="flex flex-row gap-2">
      <div className="relative w-[400px] h-auto hidden md:block rounded-xl">
                        <Image
                            src="/destination/enq.jpg" // Provide the path to your image
                            alt="Descriptive Alt Text" // Provide descriptive alt text for your image
                            layout="fill" // This will make the image fill the container, adjust as needed
                            objectFit="cover" // Adjust how the image fits within the container
                            className='rounded-xl'
                        />
                    </div>
     <div
        className="bg-black text-white rounded-lg shadow-lg md:px-4 md:py-4"
      > 
     
        <form onSubmit={handleSubmit}>
          <div className='absolute top-[0px] right-[20px]'>
            {/* <h2 className="text-3xl font-bold md:mb-8 mb-4 ml-2 text-white" id="enquiryFormTitle">Enquiry</h2> */}
            <button onClick={onClose} className='flex justify-center'>
              <FontAwesomeIcon icon={faXmark} className='mt-2 text-white'/>
            </button>
          </div>
          <div className='text-yellow-500 font-bold text-xl text-center mb-2 mt-2 md:mt-0'>
          Looking for Your Next Adventure?
          </div>
          <div className='text-center text-white text-sm mb-2 w-[300px]'>
          Connect with our travel experts for exclusive itineraries and best deals tailored to your unique travel experiences.
            </div>
          <div className="md:mb-4 mb-2">
            <label htmlFor="name" className="block text-sm font-medium text-">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Enter your Name"
              className="mt-1 md:p-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl  input-placeholder"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:mb-4 mb-2">
          <div>
  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-100">Phone Number</label>
  <input
    type="tel"
    id="phoneNumber"
    name="phone"
    onChange={handleChange}
    placeholder="Phone Number"
    className="mt-1 md:p-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl"
    pattern="^\d{10}$"
    title="Phone number must be 10 digits."
    required
  />
</div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="john@example.com"
                className="mt-1 md:p-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl  input-placeholder"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:mb-4 mb-2">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-100">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                onChange={handleChange}
                placeholder="Desired Travel Location"
                className="mt-1 md:py-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl input-placeholder"
                required
              />
            </div>
            <div>
              <label htmlFor="numberofperson" className="block text-sm font-medium text-gray-100">Number of People</label>
              <input
                type="number"
                id="numberofperson"
                name="numberofperson"
                onChange={handleChange}
                placeholder="Group Size"
                min="1" 
                className="mt-1 md:p-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl  input-placeholder"
                required
              />
            </div>
          </div>
          <div className="md:mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-100">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Tell Us More"
              className="mt-1 md:p-3 p-2 w-full border-b-2 border-gray-700 bg-black text-gray-100 rounded-xl input-placeholder"
              required
            ></textarea>
          </div>
          <div className="mb-6 flex items-center">
          <input
  type="checkbox"
  id="callbackCheckbox"
  name="callback"
  onChange={handleChange}
  checked={formData.callback === 'Expecting Callback'} // Ensure it's checked when the value matches
  className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
/>

  
            <label htmlFor="callbackCheckbox" className="ml-2 block text-sm text-yellow-500">Expecting a Callback</label>
          </div>
          <motion.button
          type="submit"
               initial={{ backgroundColor: "#FCB418", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FCB418", scale: 1.05 }}
               transition={{ duration: 0.3 }}
               className="border border-yellow-500 text-black py-2 px-4 w-full rounded-full" > Send
               </motion.button>
         
        </form>
       
        </div>
               
      </div>
        </div>
        </CSSTransition>
        {/* </motion.div> */}
    </div>
  );
};
export default EnquiryForm;