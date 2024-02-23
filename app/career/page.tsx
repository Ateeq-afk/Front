import Career from "@/Components/Footer/Career";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Join Our Team | Careers at Backpackers United',
    description: 'Explore career opportunities at Backpackers United. Join our team and embark on a rewarding journey in the travel industry!',
    openGraph: {
      title: 'Backpackers United',
      description: 'Join Our Team | Careers at Backpackers United',
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
      canonical: 'https://backpackersunited.in/career',
    }
  }
const Page = () => {
  return (
    <div>
        <Career />
        </div>
);
};
export default Page;
