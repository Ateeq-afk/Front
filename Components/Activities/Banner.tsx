import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Banner() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 3000); // 3000 ms for the example, adjust the time for the fade effect as you like
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`relative transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <Image
        src="/path-to-your-image.jpg" // Replace with the path to your image
        alt="Experience the real India"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
        <span className="text-sm text-white font-semibold mb-1">
          02 / PLAN WITH A LOCAL
        </span>
        <h1 className="text-5xl text-white font-bold mb-3">
          Experience the real India
        </h1>
        <p className="text-lg text-white mb-4">
          Let a local expert craft your dream trip.
        </p>
        <button className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg">
          Get started
        </button>
      </div>
    </div>
  );
}