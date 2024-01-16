import React from 'react';
import { Metadata } from 'next';
import Travel from '@/Components/Travel/Travel';


export const metadata:Metadata = {
  title: 'Backpackers United Travel Pass/Book: Your Gateway to Endless Adventures',
  description: 'Embark on unforgettable journeys with the Backpackers United Travel Pass/Book. Gain exclusive access to travel deals, comprehensive guides, and personalized itineraries. Start exploring today!',
  openGraph: {
    title: 'Backpackers United',
    description: 'Backpackers United Travel Pass/Book: Your Gateway to Endless Adventures',
    url: 'https://backpackersunited.in/travel-pass',
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
}
 
const Page = () => {
return(
<div>
  <Travel />
</div>
)
  };
  export default Page;