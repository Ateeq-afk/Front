import dynamic from "next/dynamic";
import Header from "@/Components/Navbar/Header/Header";
import Footer from "@/Components/Navbar/Footer/Footer";
import Image from "next/image";
import LoginForm from "@/Components/Signup/Login";
import Googlelogin from "@/Components/Signup/Google";
import DynamicMetaTags from "@/Components/Dynamic/DynamicMetatag";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Log In to Your Backpackers United Account',
  description: 'Access your Backpackers United account. Log in to manage your profile, view exclusive content, and interact with our global community of travelers.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Log In to Your Backpackers United Account',
    url: 'https://backpackersunited.in/login',
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
}
const LogIn = () => {

  return (
    <>
      <Header />
      {/* End Header 1 */}
      <section className="pt-24 pb-8 bg-yellow-100">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className=" lg:w-[34rem] ">
              <div className="px-12 py-12 bg-black text-white shadow-md rounded-md">
                {/* <LoginForm /> */}
                {/* End .Login */}
                    <LoginForm />
                <div className="flex flex-col space-y-2 pt-6">
                  <div className="text-center">or sign in with</div>
              <Googlelogin />
{/* <DynamicGoogleLogin /> */}
                  <div className="text-center px-8">
                    By creating an account, you agree to our Terms of Service
                    and Privacy Statement.
                  </div>
                </div>
                {/* End .flex */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

    
      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(LogIn), { ssr: false });
