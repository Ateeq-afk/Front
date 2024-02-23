import Partner from "@/Components/Footer/Partner";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Partner with Us | Travel Industry Collaboration',
    description: 'Collaborate with Backpackers United. Explore travel industry partnerships and create amazing experiences together.',
    openGraph: {
      title: 'Backpackers United',
      description: 'Partner with Backpackers United | Collaborate in the Travel Industry',
      url: 'https://backpackersunited.in/partner',
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
      canonical: 'https://backpackersunited.in/partner',
    }
  }
const Page = () => {
return(
<div>
    <Partner />
</div>
)
  };
export default Page;