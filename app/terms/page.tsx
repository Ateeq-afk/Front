import Terms from '@/Components/Footer/Terms';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Terms of Use - Backpackers United | User Guidelines & Policies',
  description: 'Review the Terms of Use for Backpackers United. Understand the guidelines and policies for using our backpacking resources and community platform.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Terms of Use - Backpackers United | User Guidelines & Policies',
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
}
 

const page = () => {
return(
  <div>
<Terms />
  </div>
)
};
export default page;
