import Destmain from "@/Components/Destination/Destmain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Explore Global Destinations with Backpackers United | Travel Guide',
  description: 'Discover and plan your next adventure with Backpackers United. Explore our comprehensive guides on global destinations for backpackers and travelers.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Explore Global Destinations with Backpackers United | Travel Guide',
    url: 'https://backpackersunited.in/login',
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
<Destmain />
  </div>
)
}

export default page
