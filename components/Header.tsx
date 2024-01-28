"use client"

import localFont from 'next/font/local'
import React, { useEffect, useState } from 'react'
import first from "@/public/1.svg";
import second from "@/public/2.svg";
import third from "@/public/3.svg";
import Image from 'next/image';


const heading = localFont({
  src: './GTWalsheimPro-CondensedUltraBold.ttf',
  display: 'swap',
})



export default function Header() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemoveHandler = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mousemoveHandler);

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler);
    };
  }, []);

  const transformStyle = {
    transform: `translate(${cursorPosition.x * 0.01}px, ${cursorPosition.y * 0.01}px)`,
  };

  return (
    <header className='bg-white -translate-y-12 min-h-screen lg:mt-28 lg:mx-4 z-0 lg:py-36 rounded-3xl'>
      <div className="px-52 flex items-start text-center justify-center">
        <Image src={first} alt="1st Svg" className='lg:mb-12 mr-8' style={transformStyle} />
        <h1 className={`'   heading ${heading.className} '`}>
          Your radically <br />
          easy-to-use <br />
          hiring tool
          <span className='w-full justify-end flex bottom-20 right-16 relative'> <Image src={third} alt="3rd Svg" className='mt-4 left-10 relative' style={transformStyle} /></span>
        </h1>
        <Image src={second} alt="2nd Svg" className='mt-4 ml-4' style={transformStyle} />
      </div>
      <div className="space-y-6 text-center lg:px-72">
        <h2 className='text-2xl'>
          Don&apos;t let stellar talent fall through
          the cracks of a messy hiring
          process. Organize your hiring in
          minutes with Homerun.
        </h2>
        <button className='py-3 bg-[#4f75fe] hover:bg-[#254cda] hover:-rotate-3 transition duration-300 text-white text-lg rounded-3xl px-5'>
          Start hiring for free
        </button>
      </div>
    </header>
  );
}