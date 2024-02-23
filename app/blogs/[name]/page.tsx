import Blogmain from '@/Components/Blogs/Blogmain'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'
interface PageProps {
  params: {
      name: string;
  }
}
interface BlogItem {
  name: string;
}
export const dynamicParams = true
export async function generateStaticParams() {
  const res = await fetch('https://launch-api1.vercel.app/blog');
  const blog = await res.json();
  return blog.data.map((item:BlogItem) => ({
    name: item.name
  }));
}
async function getBlog(name:string) {
  const res = await fetch(`https://launch-api1.vercel.app/blog/${name}`,{
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
  const product = await fetch(`https://launch-api1.vercel.app/blog/${name}`).then((res) => res.json());
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
    alternates: {
      canonical: `https://backpackersunited.in/blogs/${product.urllink}`,
    }
  };
}
export default async function Blog({ params }: { params: PageProps['params'] }) {;
  const blog = await getBlog(params.name);
  return (
    <div>
      <Blogmain blog={blog}/>
    </div>
  )
}

