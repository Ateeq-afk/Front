import Dest from '@/Components/Destination/Dest';
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation';
interface PageProps {
  params: {
      name: string;
  }
}
interface DestinationItem {
  name: string;
}
export const dynamicParams = true
export async function generateStaticParams() {
  const res = await fetch('https://launch-api1.vercel.app/dest');
  const dest = await res.json();
  return dest.data.map((item:DestinationItem) => ({
    name: item.name
  }));
}
async function getDest(name:string) {
  const res = await fetch(`https://launch-api1.vercel.app/dest/${name}`,{
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
  const product = await fetch(`https://launch-api1.vercel.app/dest/${name}`).then((res) => res.json());
  return {
    title: product.metatitle,
    description: product.metades,
    openGraph: {
      title: 'Backpackers United',
      description: product.metatitle,
      url: `https://backpackersunited.in/destinations/${product.urllink}`,
      siteName: 'Backpackers United',
      images: [{
        url: `https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${product.coverimage}`,
        width: 200,
        height: 200,
      }],
      type: 'website',
    },
    alternates: {
      canonical: `https://backpackersunited.in/destinations/${product.urllink}`,
    }
  };
}
export default async function destination({ params }: { params: PageProps['params'] }) {
  const destination = await getDest(params.name);
    return (
      <div >
       <Dest destination={destination}/>
    </div>
  )
}
