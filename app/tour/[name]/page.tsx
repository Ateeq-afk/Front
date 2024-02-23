import Tourproduct from "@/Components/Treks/Tourproduct";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
interface PageProps {
  params: {
      name: string;
  }
}
interface TourItem {
  name: string;
}
export const dynamicParams = true
export async function generateStaticParams() {
  const res = await fetch('https://launch-api1.vercel.app/trek/tour');
  const tour = await res.json();
  return tour.map((item:TourItem) => ({
    name: item.name
  }));
}
async function getTour(name:string) {
  const res = await fetch(`https://launch-api1.vercel.app/trek/tour/${name}`,{
    next:{
      revalidate: 60
    }
  })
  if(!res.ok){
    notFound()
  }
  return res.json()
 
}
export async function generateMetadata( { params }: PageProps, parent: ResolvingMetadata ): Promise<Metadata> {
  const name = params.name;
  const product = await fetch(`https://launch-api1.vercel.app/trek/tour/${name}`).then((res) => res.json());
  return {
    title: product.metatitle,
    description: product.metades,
    openGraph: {
      title: 'Backpackers United',
      description: product.metatitle,
      url: `https://backpackersunited.in/tour/${product.urllink}`,
      siteName: 'Backpackers United',
      images: [{
        url: `https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${product.testimage}`,
        width: 200,
        height: 200,
      }],
      type: 'website',
    },
    alternates: {
      canonical: `https://backpackersunited.in/tour/${product.urllink}`,
    }
  };
}
  export default async function Tour({ params }: { params: PageProps['params'] }) {
    const data = await getTour(params.name);
 return (
      <div>
        <Tourproduct data={data}/>
      </div>
 )  
}


