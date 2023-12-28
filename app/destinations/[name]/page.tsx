import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
import Dest from '@/Components/Destination/Dest';
import { FC  } from 'react';
import type { Metadata, ResolvingMetadata } from 'next'


interface PageProps {
  params: {
      name: string;
  }
}
export async function generateMetadata( { params }: PageProps, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const name = params.name;

  // fetch data
  const product = await fetch(`https://launch-api1.vercel.app/dest/${name}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
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
  };
}

const page : FC<PageProps> = ({ params })=> {
  const name = params.name
    return (
      <div >
       <Dest name={name}/>

   
    </div>
  )
}
export default page;