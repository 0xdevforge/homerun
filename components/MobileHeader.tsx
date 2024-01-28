import React from 'react'
import first from "@/public/1.svg";
import second from "@/public/2.svg";
import third from "@/public/3.svg";
import Image from 'next/image';
import localFont from 'next/font/local'




const mobileHeading = localFont({
    src: './GTWalsheimPro-CondensedUltraBold.ttf',
    display: 'swap',
    weight:'400'
  })
  
  
export default function MobileHeader() {
    return (
        <div className='bg-[#fbf9f5]-translate-y-12 min-h-screen mt-28 z-0  rounded-3xl'>
            <div className="flex gap-3 w-full justify-center">
                <Image src={first} alt="1st Svg" className='lg:mt-4 relative rotate-12' />
                <Image src={second} alt="1st Svg" className='lg:mt-4 relative bottom-4' />
                <Image src={third} alt="1st Svg" className='lg:mt-4 rotate-6' />
                <Image src={first} alt="1st Svg" className='lg:mt-4 rotate-3' />
            </div>
            <div className="">
                <h1 className= {`' ${mobileHeading.className} mobileHeading font-extrabold text-6xl text-center ' `}>
                    Your 
                    <br /> radically
                    <br />
                    easy-to-
                    <br />use
                    <br />
                    hiring tool
                </h1>

                <div className="space-y-6 text-center pt-6">
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
            </div>
        </div>
    )
}
