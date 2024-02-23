import dynamic from "next/dynamic";
import Footer from "@/Components/Navbar/Footer/Footer";
import Header from "@/Components/Navbar/Header/Header";
import SignUpForm from "@/Components/Signup/Signup";
import Googlelogin from "@/Components/Signup/Google";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: 'Sign Up for Backpackers United - Join Our Community',
  description: 'Create an account with Backpackers United and join a global community of backpacking enthusiasts. Access exclusive content, tips, and offers.',
  openGraph: {
    title: 'Backpackers United',
    description: 'Sign Up for Backpackers United - Join Our Community',
    url: 'https://backpackersunited.in/signup',
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
    canonical: 'https://backpackersunited.in/signup',
  }
}
const SignUp = () => {
  return (
    <>
<div >
      <Header />
      <section className="pt-24 pb-12 bg-yellow-100 flex justify-center items-center">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-11/12 sm:w-2/3 lg:w-[34rem]">
              <div className="md:p-12 p-6 bg-black text-white shadow-md rounded-lg">

                {/* <SignUpForm /> */}
                <SignUpForm />
                <div className="md:mt-8 mt-4">
                  <div className="text-center">or sign in with</div>
                </div>
      <Googlelogin />
                {/* <LoginWithSocial /> */}

                <div className="mt-8">
                  <div className="text-center">
                    By creating an account, you agree to our Terms of Service and Privacy Statement.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
