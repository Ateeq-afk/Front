import Condition from "@/Components/Footer/Condition";
import { Metadata } from "next";

// AboutUs Component
export const metadata:Metadata = {
  title: 'Terms & Conditions - Backpackers United | Booking & Service Policies',
  description: 'Understand the Terms & Conditions at Backpackers United. Get detailed information on booking policies, service terms, and user responsibilities.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Terms & Conditions - Backpackers United | Booking & Service Policies',
    url: 'https://backpackersunited.in/condition',
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
    <Condition />
   </div>
  );
};
export default page;
