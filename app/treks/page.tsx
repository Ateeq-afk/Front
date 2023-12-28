import Footer from "@/Components/Navbar/Footer/Footer"
import Header from "@/Components/Navbar/Header/Header"
import Trekmain from "@/Components/Treks/Trekmain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Backpackers United: Trekking the Worlds Most Breathtaking Paths',
  description: 'Explore breathtaking trekking routes with Backpackers United. From beginner trails to challenging hikes, find the perfect trek to match your adventure spirit.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Backpackers United: Trekking the Worlds Most Breathtaking Paths',
    url: 'https://backpackersunited.in/treks',
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
  return (
    <div>
     
          <Header />
          <Trekmain />
          <Footer />
    </div>
  )
}

export default page
