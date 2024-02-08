// import Footer from "@/Components/Navbar/Footer/Footer"
// import Header from "@/Components/Navbar/Header/Header"
import Trekmain from "@/Components/Treks/Trekmain"
import { Metadata } from "next"
import dynamic from "next/dynamic"

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
// const Trekmain = dynamic(() => import('@/Components/Treks/Trekmain'), {
//   ssr: false,
//   loading: () => <div>Loading Trekmain...</div>, // Optional loading component
// });
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
          {/* <Trek /> */}
    </div>
  )
}

export default page
