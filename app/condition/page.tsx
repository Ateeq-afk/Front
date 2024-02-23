import Condition from "@/Components/Footer/Condition";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: 'Backpackers United | Terms & Conditions',
  description: 'Explore Backpackers Uniteds Terms & Conditions for booking, cancellations, and policies. Plan your adventure responsibly',
  openGraph: {
    title: 'Backpackers United',
    description: 'Backpackers United | Terms & Conditions',
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
  alternates: {
    canonical: 'https://backpackersunited.in/condition',
  }
}
const page = () => {
  return (
   <div>
    <Condition />
   </div>
  );
};
export default page;
