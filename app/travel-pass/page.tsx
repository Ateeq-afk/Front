import React from 'react';
import { Metadata } from 'next';
import Travel from '@/Components/Travel/Travel';
export const metadata:Metadata = {
  title: 'United Travel Pass| Explore 6 Trips & Tours at Flat 50% Off ',
  description: "Get exclusive access to 6 treks and tours with Backpackers United's Trek Pass and Tour Pass. Avail the pass and enjoy flat 50% off on your adventures!",
  openGraph: {
    title: 'Backpackers United',
    description: 'United Travel Pass| Explore 6 Trips & Tours at Flat 50% Off',
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
  alternates: {
    canonical: 'https://backpackersunited.in/travel-pass',
  }
}
const Page = () => {
return(
<div>
  <Travel />
</div>
)
  };
  export default Page;