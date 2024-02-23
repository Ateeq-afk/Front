import Terms from '@/Components/Footer/Terms';
import { Metadata } from 'next';
export const metadata:Metadata = {
  title: 'Terms of Use | Backpackers United',
  description: 'Read the Terms of Use for Backpackers United. Learn about our policies regarding website usage, bookings, and more.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Terms of Use | Backpackers United',
    url: 'https://backpackersunited.in/terms',
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
    canonical: 'https://backpackersunited.in/terms',
  }
}
const page = () => {
return(
  <div>
<Terms />
  </div>
)
};
export default page;
