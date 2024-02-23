import Destmain from "@/Components/Destination/Destmain"
import { Metadata } from "next"
export const metadata:Metadata = {
  title: 'Explore Exciting Destinations | Backpackers United',
  description: 'Discover diverse destinations with Backpackers United. Find your next adventure in stunning locations. Start exploring now!',
  openGraph: {
    title: 'Backpackers United',
    description: 'Explore Exciting Destinations | Backpackers United',
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
  alternates: {
    canonical: 'https://backpackersunited.in/destinations',
  }
}
const page = () => {
return(
  <div>
<Destmain />
  </div>
)
}
export default page
