import Privacy from '@/Components/Footer/Privacy';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Privacy Policy - Backpackers United | Your Privacy Matters ',
  description: 'Read our Privacy Policy to learn how Backpackers United protects your data and privacy. We are committed to transparent and secure handling of user information.',
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
}
const page = () => {

  return (
   <div>
    <Privacy />
   </div>
  );
};
export default page;
