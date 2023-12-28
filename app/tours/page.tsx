import Tourmain from "@/Components/Treks/Tourmain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Backpackers United Tours: Unique Journeys for the Avid Traveler',
  description: 'Join our curated tours at Backpackers United and experience the world like never before. Tailored adventures await in every corner of the globe.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Backpackers United Tours: Unique Journeys for the Avid Traveler',
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
}
const page = () => {
 return(
  <div>
    <Tourmain />
  </div>
 )
}

export default page
