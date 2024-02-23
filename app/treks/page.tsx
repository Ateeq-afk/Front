import Trekmain from "@/Components/Treks/Trekmain"
import { Metadata } from "next"
import dynamic from "next/dynamic"
export const metadata:Metadata = {
  title: 'Discover Amazing Treks | Backpackers United Treks',
  description: 'Explore breathtaking treks with Backpackers United. Find the perfect trekking adventure for your next journey. Start exploring now!',
  openGraph: {
    title: 'Backpackers United',
    description: 'Discover Amazing Treks | Backpackers United Treks',
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
  alternates: {
    canonical: 'https://backpackersunited.in/treks',
  }
}
const Footer = dynamic(() => import('@/Components/Navbar/Footer/Footer'), {
  loading: () => <div>Loading...</div>, // Optional loading component
});
const Header = dynamic(() => import('@/Components/Navbar/Header/Header'), {
});
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
