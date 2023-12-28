import Career from "@/Components/Footer/Career";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Backpackers United: Connect with Global Travel CommunityCareers at Backpackers United | Join Our Travel-Enthusiast Team',
    description: 'Looking for a career in travel? Join the Backpackers United team and turn your passion into a profession. Explore current openings and be part of our journey.',
    openGraph: {
      title: 'Backpackers United',
      description: 'Backpackers United: Connect with Global Travel CommunityCareers at Backpackers United | Join Our Travel-Enthusiast Team',
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
  
const Page = () => {

  return (
    <div>
        <Career />
        </div>
);
};
export default Page;
