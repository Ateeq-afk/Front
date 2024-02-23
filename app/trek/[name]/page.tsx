import { Metadata, ResolvingMetadata } from 'next';
import Trekproduct from '@/Components/Treks/Trekproduct';
import { notFound } from 'next/navigation';
interface PageProps {
  params: {
      name: string;
  }
}
interface TrekItem {
  name: string;
}
export const dynamicParams = true
export async function generateStaticParams() {
  const res = await fetch('https://launch-api1.vercel.app/trek/trek');
  const trek = await res.json();
  return trek.map((item:TrekItem) => ({
    name: item.name
  }));
}
async function getTrek(name:string) {
  const res = await fetch(`https://launch-api1.vercel.app/trek/trek/${name}`,{
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
  const product = await fetch(`https://launch-api1.vercel.app/trek/trek/${name}`).then((res) => res.json());
  return {
    title: product.metatitle,
    description: product.metades,
    openGraph: {
      title: 'Backpackers United',
      description: product.metatitle,
      url: `https://backpackersunited.in/trek/${product.urllink}`,
      siteName: 'Backpackers United',
      images: [{
        url: `https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${product.testimage}`,
        width: 200,
        height: 200,
      }],
      type: 'website',
    },
    alternates: {
      canonical: `https://backpackersunited.in/trek/${product.urllink}`,
    }
  };
}
export default async function Trek({ params }: { params: PageProps['params'] }) {
  const data = await getTrek(params.name);
  return (
    <div >
      <Trekproduct data={data} />
      </div>
);
  }


