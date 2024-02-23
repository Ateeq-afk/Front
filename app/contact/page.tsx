import Contact from "@/Components/Footer/Contact";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Contact Backpackers United | Get in Touch with Us',
    description: "Reach out to Backpackers United for inquiries, support, or collaborations. We're here to assist you on your travel journey. Contact us now!",
    openGraph: {
      title: 'Backpackers United',
      description: 'Contact Backpackers United | Get in Touch with Us',
      url: 'https://backpackersunited.in/contact',
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
      canonical: 'https://backpackersunited.in/contact',
    }
  } 
const Page = () => {
   return(
    <div>
        <Contact />
    </div>
   )
  };
export default Page;