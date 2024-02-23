import AboutUs from '@/Components/Footer/About'
import { Metadata } from 'next'
import React from 'react'
export const metadata:Metadata = {
  title: 'About Backpackers United - Learn About Our Mission & Team',
  description: 'Discover the story behind Backpackers United. Learn about our mission to empower backpackers and our teams passion for making travel accessible to all.',
  openGraph: {
    title: 'Backpackers United',
    description: 'About Backpackers United - Learn About Our Mission & Team',
    url: 'https://backpackersunited.in/about',
    siteName: 'Backpackers United',
    images: [
      {
        url: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/image.png',
        width: 200,
        height: 200,
      }
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://backpackersunited.in/about',
  }
}
const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}
export default page
