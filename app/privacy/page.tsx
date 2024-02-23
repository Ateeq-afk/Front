import Privacy from '@/Components/Footer/Privacy';
import { Metadata } from 'next';
export const metadata:Metadata = {
  title: 'Backpackers United | Your Privacy Matters',
  description: 'Learn how we protect your data in our Privacy Policy. Committed to secure, transparent handling.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Privacy Policy - Backpackers United | Your Privacy Matters ',
    url: 'https://backpackersunited.in/privacy',
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
    canonical: 'https://backpackersunited.in/privacy',
  }
}
const page = () => {
  return (
   <div>
    <Privacy />
   </div>
  );
};
export default page;
