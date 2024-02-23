import Blog from "@/Components/Blogs/Blog";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: 'Backpackers United Blog - Insights, Tips & Travel Stories',
  description: 'Dive into the Backpackers United Blog for the latest travel insights, tips, and inspiring stories. Stay updated with our regular backpacking adventures.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Backpackers United Blog - Insights, Tips & Travel Stories',
    url: 'https://backpackersunited.in/blogs',
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
    canonical: 'https://backpackersunited.in/blogs',
  }
}
const Page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
}
export default Page;