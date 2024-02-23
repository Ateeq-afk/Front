import Travelpassmain from '@/Components/Travel/Travelpassmain';
import { Metadata } from 'next';
export const metadata:Metadata = {
  title: 'Get 50% Off with Backpackers United Travel Pass',
  description: 'Get 50% off with our Travel Pass! Exclusive deals, guides, benefits, and support await. Start your adventure now!',
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
  alternates: {
    canonical: 'https://backpackersunited.in/travel-pass/book',
  }
}
const page = () => {
return (
<div>
  <Travelpassmain />
</div>
)
}
export default page