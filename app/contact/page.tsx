import Contact from "@/Components/Footer/Contact";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Backpackers United - Get in Touch for Travel Support & Queries',
    description: 'Reach out to Backpackers United on our Contact Us page. Whether you have questions about trips, need travel support, or want to connect with our team, we are here to help. Get in touch for prompt and friendly assistance.',
    openGraph: {
      title: 'Backpackers United',
      description: 'Contact Backpackers United - Get in Touch for Travel Support & Queries',
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
  }
  
const Page = () => {
   return(
    <div>
        <Contact />
    </div>
   )
  };
  export default Page;