"use client";

import Image from 'next/image'
import React, { useState } from 'react'

import logo from '@/public/logo.png';
import menu from '@/public/menu.png';
import Link from 'next/link';
import localFont from 'next/font/local'


const navlinks = localFont({
    src: './GTWalsheimPro-CondensedUltraBold.ttf',
    display: 'swap',
    weight:'400'
  })

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='z-10 top-0 fixed w-full px-2 overflow-x-hidden '>
            <div className="px-5 rounded-full bg-white mt-2 py-3 flex justify-between items-center">
                <Image src={menu} alt="menu" className='w-6' onClick={toggleDropdown} />

                <div className="pl-8">
                    <Image src={logo} alt="logo" className='w-24' />
                </div>
                <button className='py-1.5 bg-[#4f75fe] hover:bg-[#254cda] items-center hover:-rotate-3 transition duration-300 text-white text-md font-semibold rounded-3xl px-3'>
                    Sign Up
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col bg-white -mx-2 px-6 py-6 text-gray-600 pb-36 text-lg overflow-y-auto" style={{ maxHeight: '100vh' }}>
                    <Link href="/link1" className='font-semibold'>Log In</Link>
                    <div className="pt-6 border-b-2 -mx-20 border-gray-200"></div>
                    <div className="space-y-6 flex flex-col">
                        <Link href="/link1" className= {`'font-bold text-xl pt-4 text-black ${navlinks.className} ' `}>Product</Link>
                        <Link href="/link1" className='font-semibold'>Career sire & Job</Link>
                        <Link href="/link1" className='font-semibold'>Application Forms</Link>
                        <Link href="/link1" className='font-semibold'>Application tracking</Link>
                        <Link href="/link1" className='font-semibold'>Templates</Link>
                        <Link href="/link1" className='font-semibold'>All Features</Link>

                    </div>
                    <div className="pt-8 border-b-2 -mx-20 border-gray-200"></div>

                    <Link href="/link1" className='font-semibold pt-4'>Pricing</Link>

                    <div className="pt-4 border-b-2 -mx-20 border-gray-200"></div>


                    <Link href="/link1" className='font-semibold pt-4'>Learn</Link>

                    <div className="pt-4 border-b-2 -mx-20 border-gray-200"></div>

                    <div className="space-y-6 flex flex-col">
                        <Link href="/link1" className= {`'font-bold text-xl pt-4 text-black ${navlinks.className} ' `}>Blog</Link>
                        <Link href="/link1" className='font-semibold'>Guides</Link>
                        <Link href="/link1" className='font-semibold'>Showcase</Link>
                        <Link href="/link1" className='font-semibold'>Get Started with Homerun</Link>
                        <Link href="/link1" className='font-semibold'>Help Center</Link>

                    </div>
                    {/* Add more links as needed */}
                </div>
            )}
        </nav>
    )
}
