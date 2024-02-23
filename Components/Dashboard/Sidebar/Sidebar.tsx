import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { LiaPassportSolid } from "react-icons/lia";
import { IoLogOutOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
<div className="sticky top-20  w-[280px] h-screen-sm bg-black  pt-5  mb-10 border-2 border-gray-800 text-white rounded-lg m-2 ">
<div className="flex flex-col justify-between h-full ">
  <div className="flex justify-center items-center flex-col mb-10 ">
    <div className="w-32 h-32 relative mx-5 rounded-lg flex ">
      <Image
        src="/about/about.jpg"
        alt="Profile Picture"
        objectFit="cover"
        layout="fill"
        className="rounded-full"
      />
    </div>
    <h2 className="text-xl font-semibold mt-4 text-center">Syed Mudassir Hussain </h2>
    </div>
    <nav>
      <Link href="/my-profile">
        <div className="px-4 py-3 rounded hover:bg-gray-900 flex flex-row items-center border-y-2 border-gray-800"><FaRegUser className="mr-2 text-sm" />My Profile</div>
      </Link>
      <Link href="/my-profile">
        <div className="flex flex-row items-center px-4  py-3  rounded hover:bg-gray-900 border-b-2 border-gray-800"><BsCalendarCheck className="mr-2 text-sm" />My Booking</div>
      </Link>
      <Link href="/my-profile">
        <div className="flex flex-row items-center px-3 py-3  rounded hover:bg-gray-900 border-b-2 border-gray-800"><LiaPassportSolid className="mr-2 text-2xl" />Travel Pass</div>
      </Link>
      <Link href="/my-profile">
        <div className="flex flex-row items-center px-4 py-3 rounded hover:bg-gray-900"><IoLogOutOutline className="mr-2 text-xl" />Log Out</div>
      </Link>
    </nav>
  </div>
</div>
  )
}
export default Sidebar
