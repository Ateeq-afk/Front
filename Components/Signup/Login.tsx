'use client'
import {useState} from 'react'
import Link from "next/link";
import axios from 'axios';
import ForgotPasswordModal from './Forgotpassword';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import { useAuth } from "../../app/AuthContext"
const LoginForm = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);
    const [logina, setLogina] = useState({
        email: "",
        password: ""
      });
    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://launch-api1.vercel.app/auth/signin", { email: logina.email, password: logina.password});
          if (response.data.users === false) {
            alert("Email is not registered!");
          } else if (response.data.password === false) {
            alert("Incorrect Password!");
          } else {
            const userData = {
              name: response.data.name, // Or username if that's what you have
              email: response.data.email,
              photoURL: '/about/user.png' // A default image since email login doesn't have a photo URL
            };
            login(userData);
            alert("Login Successful!");
         
            router.back(); 
          }
        } catch (err) {   
        }
      };
      const onChangea = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogina({ ...logina, [e.target.name]: e.target.value });
      };
  return (
    <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <ToastContainer />
      <div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-2">
          Don't have an account yet?{" "}
          <Link href="/signup" className="text-yellow-500">
   Sign up for free
          </Link>
        </p>
      </div>
      <div>
        <div className="relative">
          <input type="email" id="email" placeholder=" " name='email' value={logina.email} onChange={onChangea}   required className="w-full h-full px-4 pt-8 pb-2 border focus:outline-none text-black input-phoneno"/>
          <label htmlFor="email" className="label-phoneno absolute left-4 bottom-5 transform transition-transform duration-200 text-gray-500" >Email</label>
        </div>
      </div>
      <div>
        <div className="relative">
          <input type="password" id="password"  placeholder=" " name='password' value={logina.password} onChange={onChangea} required className="w-full h-full px-4 pt-8 pb-2 border focus:outline-none text-black input-email" />
          <label htmlFor="password" className="label-email absolute left-4 bottom-5 transform transition-transform duration-200 text-gray-500">Password</label>
        </div>
      </div>
      <div>
            <button onClick={() => setModalOpen(true)} className="text-sm font-semibold text-yellow-500 underline" >
          Forgot your password?
          </button>
      </div>
      <div>
        <button type="submit" className="bg-yellow-500 text-white w-full py-4">
          Sign In 
        </button>
      </div>
      <ForgotPasswordModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </form>
  );
};
export default LoginForm;
