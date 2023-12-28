import Travelpassmain from '@/Components/Travel/Travelpassmain';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Get 50% Off with Backpackers United Travel Pass | Start Your Adventure',
  description: 'Unlock a world of adventures with the Backpackers United Travel Pass/Book and enjoy a flat 50% discount on your travels. Gain access to exclusive deals, detailed guides, exclusive travel benefits, merchandise, and dedicated travel assistance. Begin your journey towards unforgettable experiences today!',
  openGraph: {
    title: 'Backpackers United',
    description: 'Get 50% Off with Backpackers United Travel Pass | Start Your Adventure',
    url: 'https://backpackersunited.in/travel-pass/book',
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
const page = () => {
return (
<div>
  <Travelpassmain />
</div>
)
}

export default page