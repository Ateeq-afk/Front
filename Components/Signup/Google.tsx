'use client'
import Image from 'next/image'
import axios from 'axios';
import { initializeApp, getApps } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useRouter } from 'next/navigation';
import { ToastContainer, toast  } from 'react-toastify';
import { useAuth } from "../../app/AuthContext"
const firebaseConfig = {
    apiKey: "AIzaSyAo9cGsw6Tbo9nrbsdXcoVxY0SGWgrJ4L8",
    authDomain: "backpack-b1f98.firebaseapp.com",
    projectId: "backpack-b1f98",
    storageBucket: "backpack-b1f98.appspot.com",
    messagingSenderId: "520329530780",
    appId: "1:520329530780:web:7da6a30492c1a9fa9d0c59"
  };
  try {
    if (!getApps().length) {
      initializeApp(firebaseConfig);
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
const Googlelogin = () => {
    const router = useRouter();
    const { login } = useAuth();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const { displayName, email, photoURL } = result.user;
        const res = await axios.post('https://launch-api1.vercel.app/auth/google', {
          name: displayName,
          email: email,
          image: photoURL,
        });
        login({ name: displayName, email: email, photoURL: photoURL });
        await  router.back(); 
      } catch (err) {
            alert("Invalid Credentials ")
      }
    }
  return (
    <div >
    <ToastContainer />
    <div className="flex justify-center items-center">
    <div className="w-[20rem] mt-4  ">
<button onClick={() => signInWithGoogle()} className="w-full border  text-black py-2 rounded-lg flex items-center justify-center bg-gray-300 ">
<Image src="/signup/glogo.png" alt="google logo" width={30} height={30} className="pr-2"/>
Sign In with Google Account
</button>
</div>
</div>
</div>
  )
}
export default Googlelogin
