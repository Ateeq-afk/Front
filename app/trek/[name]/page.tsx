import { FC  } from 'react';
import Trekproduct from '@/Components/Treks/Trekproduct';
import { Metadata, ResolvingMetadata } from 'next';
 
interface PageProps {
  params: {
      name: string;
  }
}
export async function generateMetadata( { params }: PageProps, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const name = params.name;

  // fetch data
  const product = await fetch(`https://launch-api1.vercel.app/trek/trek/${name}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
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
  };
}
const page : FC<PageProps> = ({ params })=> {
  const name = params.name
  return (
    <div >
     
      <Trekproduct name={name} />
   
      </div>
);
  }
export default page

