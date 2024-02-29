import TrekDate from "@/Components/Home/Date/TrekDate";
import {Metadata} from "next"
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/Components/Navbar/Header/Header'));
const Hero = dynamic(() => import('@/Components/Home/Hero/Hero'));
const TestimonialSection = dynamic(() => import('@/Components/Home/Testimonials/Testimonials'));
const Promo = dynamic(() => import('@/Components/Home/Promo/Promo'));
const TrekSlider = dynamic(() => import('@/Components/Home/Trekslider/Trekslidea'));
const Popular = dynamic(() => import('@/Components/Home/Popular/Popular'));
const LocationListSection = dynamic(() => import('@/Components/Home/Location/Location'));
const Footer = dynamic(() => import('@/Components/Navbar/Footer/Footer'));
const PopularDestinations = dynamic(() => import('@/Components/Home/Destinations/PopularDestinations'));
export const metadata:Metadata = {
  title: 'Backpackers United: Connect with Global Travel Community',
  description: 'Join Backpackers United: a vibrant community for travel enthusiasts. Discover tips, share experiences, and connect with fellow backpackers every weekend.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Join Backpackers United: a vibrant community for travel enthusiasts. Discover tips, share experiences, and connect with fellow backpackers every weekend.',
    url: 'https://backpackersunited.in',
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
    canonical: 'https://backpackersunited.in/',
  }
}
const destinations = [
  {
    title: "Kedarkanta Trek",
    location: "Singtur Range, Uttarakhand",
    price: 5999,
    img: "/home/kedarkanta.webp",
    url:"/trek/kedarkantha-trek"
  },
  {
    title: "Brahmatal Trek",
    location: "Kuling, Uttarakhand",
    price: 6999,
    img: "/home/Hampta.webp",
    url:"/trek/brahmatal-trek"
  },
  {
    title: "Kudremukh",
    location: "Chikamagalur, Karnataka",
    price: 2999,
    img: "/home/kudremukh.webp",
    url:"/trek/kudremukh-trek"
  },
  {
    title: "Kumara Parvatha",
    location: "Kukke Subramanya, ",
    price: 2999,
    img: "/home/kp.webp",
    url:"/trek/kumara-parvatha-kukke-trek"
  },
  {
    title: "Hamta Pass Trek",
    location: "Kullu, Himachal Pradesh",
    price: 7000,
    img: "/home/Brahmatal.webp",
    url:"/trek/hampta-pass-trek"
  },
];
const destinations2 = [
  {
    title: "Wayanad Weekend Getaway",
    location: "Kerala",
    price: 5599,
    originalprice:6999,
    img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--wayanad (2).jpg',
    url:"/tour/wayanad-weekend-getaway"
  },
  {
    title: "Chikmagalur Weekend Getaway",
    location: "Karnataka",
    price: 5499,
    originalprice:6999,
    img: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/siri_11zon.webp',
    url:"/tour/chikmagalur-weekend-getaway"
  },
  {
    title: "Gokarna-Murudeshwar Weekend Getaway",
    location:"Karnataka",
    price: 5499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--tharun-kumar-u-uY0n8FV_ds0-unsplash_11zon.webp",
    url:"/tour/gokarna-murudeshwar-weekend-getaway"
  },
  {
    title: "Kodaikanal Weekend Getaway",
    location: "Tamilnadu",
    price: 6499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--69_39_11zon.webp",
    url:"/tour/kodaikanal-weekend-getaway"
  },
  {
    title: "Ooty Weekend Getaway",
    location: "Tamilnadu",
    price: 5599,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/IMG20220410121642_11zon.webp",
    url:"/tour/ooty-weekend-getaway"
  },
  {
    title: "Coorg Weekend Getaway",
    location: "Karnataka",
    price:5499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--88_50_11zon.webp",
    url:"/tour/coorg-weekend-getaway"
  },
    {
    title: "Pondicherry Weekend Getaway",
    location: "India",
    price:5499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--pondi_11zon.webp",
    url:"/tour/pondicherry-weekend-getaway"
  },
{
    title: "Munnar Weekend Getaway",
    location: "Tamilnadu",
    price:6499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--munnar_11zon.webp",
    url:"/tour/munnar-weekend-getaway"
  },
{
    title: "Hampi Weekend Getaway",
    location: "Karnataka",
    price:5599,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/adarsh-sudheesan-yADr4J5jzOM-unsplash_11zon.webp",
    url:"/tour/hampi-weekend-getaway"
  },
{
    title: "Dandeli Weekend Getaway",
    location: "Karnataka",
    price:5199,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/testimage--chandan-chaurasia-z32bIS5O1KQ-unsplash_11zon.webp",
    url:"/tour/dandeli-weekend-getaway"
  },
{
    title: "Sakleshpur Weekend Getaway",
    location: "Karnataka",
    price:5499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/sak_11zon.webp",
    url:"/tour/sakleshpur-weekend-getaway"
  },
{
    title: "Kannur Weekend Getaway",
    location: "Kerala",
    price:6999,
        img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/nahel-abdul-hadi-3ye0on5cMpQ-unsplash_11zon.webp",
    url:"/tour/kannur-weekend-getaway"
  },
{
    title: "Udupi-Mangalore Weekend Getaway",
    location: "Karnataka",
    price:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/island_11zon.webp",
    url:"/tour/udupi-mangalore-weekend-getaway"
  },
{
    title: "Valparai Weekend Getaway",
    location: "Tamilnadu",
    price:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/IMG20230402170826_11zon.webp",
    url:"/tour/valparai-weekend-getaway"
  },
{
    title: "Thekkady Weekend Getaway",
    location: "Kerala",
    price:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/navi-pk0gENGSkqE-unsplash_11zon.webp",
    url:"/tour/thekkady-weekend-getaway"
  },
{
    title: "Chikmagalur Backpacking Tour",
    location: "Karnataka",
    price:5499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/3_3_11zon.webp",
    url:"/tour/chikmagalur-backpacking-tour",
  },
{
    title: "Kodaikanal Backpacking Tour",
    location: "Tamilnadu",
    price:6499,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/balaji-malliswamy-KDIBZFIw-wQ-unsplash_11zon.webp",
    url:"/tour/kodaikanal-backpacking-tour",
  },
{
    title: "Ooty Backpacking Tour",
    location: "Tamilnadu",
    price:5599,
    originalprice:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/chaitanya-rayampally-XhYP3T-telg-unsplash (1)_11zon.webp",
    url:"/tour/ooty-backpacking-tour",
  },
{
    title: "BR Hills Weekend Getaway",
    location: "Karnataka",
    price:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/WhatsApp Image 2023-11-17 at 3.51.07 AM_11zon.webp",
    url:"/tour/br-hills-weekend-getaway"
  },
{
    title: "Badami Weekend Getaway",
    location: "Karnataka",
    price:6999,
    img: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/badami_11zon.webp",
    url:"/tour/badami-weekend-getaway"
  },
]
export default function Home() {
  return (

    <main className="flex flex-col bg-black ">
      <div >
    <Header />
    <Hero />
    <section className="md:pt-10 pt-5" data-aos="fade-up">
    <div className="text-center md:text-center">
    <h1 className="text-center text-xl md:text-3xl font-bold text-white md:pb-2"><span className="text-yellow-500">Community</span> Trips from <span className="text-yellow-500">Bangalore</span></h1>
          <div className="flex justify-center pt-2 md:pb-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
   </div>
<TrekDate />
</section>
     <section className="md:pt-10 pt-5" data-aos="fade-up">
  <div className="mx-auto md:px-10 px-4">
    <div className="flex flex-wrap items-center justify-center md:mb-10 mb-5 space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex-none">
        <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Destinations</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
      </div>
    </div>
    <div className="md:pt-3 px-3">
      <PopularDestinations  />
    </div>
  </div>
</section> 
<div className='md:mx-10 mx-6 mt-4'>
<div className="text-center md:text-center">
          <div className="text-xl md:text-3xl font-bold text-yellow-500  ">South Indian Tours</div>
          <div className="flex justify-center pt-2 md:pt-5 md:pb-10">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
  <TrekSlider destination={destinations2}  sliderId="slider1" />
  </div>
</div>
<section className='mx-auto md:px-10 px-4' data-aos="fade-up">
    <Popular />
    </section>
<div className='md:mx-10 mx-6 mt-4'>
<div className="text-center md:text-center">
          <div className="text-xl md:text-3xl font-bold text-yellow-500  ">Adventure Explorations</div>
          <div className="flex justify-center pt-2 md:pt-5 md:pb-10">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
  <TrekSlider destination={destinations} sliderId="slider2" />
  </div>
</div>
<section data-aos="fade-up">
<div className='mx-4'>
    <Promo />
  </div>
</section>
<section data-aos="fade-up">
<TestimonialSection />
</section>
<section data-aos="fade-up">
<LocationListSection />
</section>
    <Footer />
      </div>
    </main>
  )
}
