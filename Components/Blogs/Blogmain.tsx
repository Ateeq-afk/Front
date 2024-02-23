"use client"
import { useState,FC } from 'react';
import Image from 'next/image';
import BlogSlider from '@/Components/Blogs/Blogsslider/BlogSlider';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
interface Blog {
  name: string;
  over: string[];
  metatitle: string;
  metades: string;
  blogs: BlogDetail[];
  products: Product[];
}
interface Product {
  testimage: string;
  testimagealt: string;
  _id: string;
  name: string;
  statename: string;
  amount: number;
  urllink: string;
  badge?: string;
}
interface BlogDetail {
  _id: string;
  image: string;
  imagealt: string;
  title: string;
  para: string;
  statename: string; 
  amount: number;   
  urllink: string;  
}
interface DataProps {
  products: {
    _id: string;
    testimage: string;
    testimagealt: string;
    name: string;
    statename: string;
    amount: number;
    urllink: string;
    badge?: string;
  }[];
}
interface BlogProps {
  blog: Blog;
}
const Blogmain : FC <BlogProps> = ({ blog })=> {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const transformBlogToDataProps = (blog: Blog): DataProps => {
    return {
      products: blog.products // Directly use the products array from Blog
    };
  };
  if (!blog) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
}
  return (
    <>
     <div className='bg-black w-full'>
      <Header />
     <div className="flex  pt-20 pl-5" >
       <div className="bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center"></div> 
        <h1 className="md:text-4xl  text-2xl pt-10 text-white">{blog.name}</h1>
       <span className="text-yellow-500 text-9xl  relative hidden md:block " style={{top: '-0.2em'}}>.</span> 
      </div>
       <div className="ml-9">
      {blog && blog.over && blog.over.map((over, index) => (
          <p className="text-gray-300 " key={index}  >
     {over}
     </p>
      ))} 
    </div> 
       <div className="bg-black py-8 pb-0">
  <div className="container mx-auto md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-5">
  {blog && blog.blogs && blog.blogs.map((blogs, index) => (
      <div key={blogs._id} className="mb-6 shadow-lg rounded-lg overflow-hidden border border-white">
        <div className="relative h-[200px]">
          <Image
            src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${blogs.image}`}
            alt={blogs.imagealt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 bg-black">
          <h3 className="text-2xl font-bold mb-3 text-white">{blogs.title}</h3>
          <p className={`text-white mt-4 ${expandedId !== blogs._id ? 'line-clamp-2' : ''}`}>
            {blogs.para}
          </p>
          <button
            className="text-yellow-400 hover:yellow-400 transition-colors mt-4"
            onClick={() => toggleExpanded(blogs._id)}
          >
            {expandedId === blogs._id ? 'Read Less' : 'Read More'}
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
 {blog && <BlogSlider data={transformBlogToDataProps(blog)} />}
      <Footer />
      </div> 
    </>
  );
}
export default Blogmain;