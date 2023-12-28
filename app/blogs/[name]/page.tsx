import Blogmain from '@/Components/Blogs/Blogmain'
import { Metadata, ResolvingMetadata } from 'next';
import React, { FC } from 'react'

interface PageProps {
  params: {
      name: string;
  }
}
export async function generateMetadata( { params }: PageProps, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const name = params.name;

  // fetch data
  const product = await fetch(`https://launch-api1.vercel.app/blog/${name}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  return {
    title: product.metatitle,
    description: product.metades,
    openGraph: {
      title: 'Backpackers United',
      description: product.metatitle,
      url: `https://backpackersunited.in/blog/${product.urllink}`,
      siteName: 'Backpackers United',
      images: [{
        url: 'https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/image.png',
        width: 200,
        height: 200,
      }],
      type: 'website',
    },
  };
}

const Page : FC<PageProps> = ({ params })=> {
  const name = params.name
  return (
    <div>
      <Blogmain name={name}/>
    </div>
  )
}

export default Page
