import React from 'react'
import Image from 'next/image'
import { TfiPencil } from "react-icons/tfi";

const Profile = () => {

  return (

    <div className="w-[65%]"> {/* This sets the width to 60% */}
      {/* Profile Card */}
  
      {/* Details Section */}
        <div className="p-4 rounded-lg shadow-md relative text-white">
          <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-2">My Profile</h3>
          {/* Pencil Icon for editing */}
          <TfiPencil  className="h-6 w-6 text-blue-400 absolute top-4 right-4 cursor-pointer hover:text-black" />
          <div className="flex flex-col mt-4">
            <div className="flex justify-between items-center">
              <span>Name</span>
              <span>Syed Mudassir Hussain</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Email</span>
              <span>arsalain12@gmail.com</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Phone Number </span>
              <span>9900934056</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Traveller preference</span>
              <span>Adventure</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Wish list</span>
              <span>Wayanad Weekend Gateway</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Bucket list</span>
              <span>Bangalore,Karnataka</span>
            </div>
            {/* Additional details can go here */}
          </div>
        </div>
{/* New Address Details Section */}
<div className="mt-6">
          <div className="border-2 border-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center text-white">
            <h3 className="text-lg font-semibold">Address Details</h3>
            <button className="flex items-center text-blue-500 hover:text-blue-300">
            <TfiPencil  className="h-5 w-5 mr-2" />
              Edit
            </button>
          </div>
          {/* You can add the address content here */}
          <div className="mt-4">
            {/* Address content goes here */}
          </div>
        </div>
        {/* Buttons Section */}
       
 
</div>

    
  )
}

export default Profile
