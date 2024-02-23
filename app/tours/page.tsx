import Tourmain from "@/Components/Treks/Tourmain"
import { Metadata } from "next"
export const metadata:Metadata = {
  title: 'Unique Adventure Tours | Backpackers United Tours',
  description: 'Embark on unforgettable adventure tours with Backpackers United. Explore our unique tours and start your next journey today!',
  openGraph: {
    title: 'Backpackers United',
    description: 'Unique Adventure Tours | Backpackers United Tours',
    url: 'https://backpackersunited.in/tours',
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
    canonical: 'https://backpackersunited.in/tours',
  }
}
const page = () => {
 return(
  <div>
    <Tourmain />
  </div>
 )
}
export default page
